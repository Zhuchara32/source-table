import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mainObj: { // исходный объект
      mo: [
        {
          bt: 0,
          et: 779
        }
      ],
      tu: [
        {
          bt: 240,
          et: 779
        },
        {
          bt: 1140,
          et: 1319
        }
      ],
      we: [
        {
          bt: 1140,
          et: 1439
        }
      ],
      th: [],
      fr: [],
      sa: [],
      su: []
    },
    mauseDownObj: { // объект в котором сохраняем данные при нажатии на ЛКМ
      nameArr: null,
      td: null
    }
  },
  getters: {
    mainObj (state) {
      return state.mainObj
    }
  },
  mutations: {
    addProp (state) { // добавляем проперти в каждый массив, для возможности выделения всего дня в 1 клик
      const arrValues = Object.values(state.mainObj)
      for (let i = 0; i < arrValues.length; i++) {
        arrValues[i].push({ active: false })
      }
    },
    clickTd (state, { value, arg, prop }) { // событие клика по ячейке
      const newObj = value.find(el => el.bt < arg && el.et >= arg) // проверяем выделена ли эта ячейка
      const idxObj = value.findIndex(el => el.bt < arg && el.et >= arg)

      if (newObj === undefined) { // если не выделена, то добавляем новый объект, чтобы выделить
        const tdLeft = value.find(el => el.et === (arg - 60)) // слева выбранная ячейка
        const idLeft = value.findIndex(el => el.et === (arg - 60))
        const tdRight = value.find(el => el.bt === (arg + 1)) // справа выбранная ячейка
        const idRight = value.findIndex(el => el.bt === (arg + 1))
        if (tdLeft !== undefined && tdRight !== undefined) { // если и с права и с лева выделены ячейки объеденяем в 1 объект
          const obj = {
            bt: tdLeft.bt,
            et: tdRight.et
          }
          state.mainObj[prop].splice(idLeft, 1, obj)
          state.mainObj[prop].splice(idRight, 1)
        } else if (tdLeft !== undefined) { // если есть только выделенная ячейка слева
          const obj = {
            bt: tdLeft.bt,
            et: arg
          }
          state.mainObj[prop].splice(idLeft, 1, obj)
        } else if (tdRight !== undefined) { // если есть только выделенная ячейка с права
          const obj = {
            bt: arg - 59,
            et: tdRight.et
          }
          state.mainObj[prop].splice(idRight, 1, obj)
        } else { // если рядом нет выделенных ячеек
          const obj = {
            bt: arg - 59,
            et: arg
          }
          state.mainObj[prop].unshift(obj)
        }
      }
      if (newObj !== undefined) { // если ячейка выделена
        if (arg === newObj.et && (arg - 59) > newObj.bt) { // уменьшаем объект, сняв выделение с нужной ячейки
          newObj.et -= 60
          const cloneObj = Object.assign(newObj)
          state.mainObj[prop].splice(idxObj, 1, cloneObj)
        } else if (arg === newObj.et && (arg - 59) === newObj.bt) { // если яцейка одинарная была, то попросту удаляем ее
          state.mainObj[prop].splice(idxObj, 1)
        } else if ((arg - 59) === newObj.bt && arg < newObj.et) { // уменьшаем объект, сняв выделение с нужной ячейки
          newObj.bt += 60
          const cloneObj = Object.assign(newObj)
          state.mainObj[prop].splice(idxObj, 1, cloneObj)
        } else { // снимаем выделение с центральной ячейки и разделяем объект на 2 объекта
          const cloneObj = Object.assign(newObj)
          const firstObj = {
            bt: cloneObj.bt,
            et: arg - 60
          }
          const secondObj = {
            bt: arg + 1,
            et: cloneObj.et
          }
          state.mainObj[prop].splice(idxObj, 1, firstObj, secondObj)
        }
      }
    },
    chooseAll (state, { value, prop }) { // выделяем/снимаем выделение всей строки
      if (value[value.length - 1].active === false) {
        const newObj = {
          bt: 0,
          et: 1439
        }
        value[value.length - 1].active = true
        state.mainObj[prop].splice(0, state.mainObj[prop].length - 1, newObj)
      } else {
        value[value.length - 1].active = false
        state.mainObj[prop].splice(0, state.mainObj[prop].length - 1)
      }
    },
    clearTable (state) { // очищаем таблицу, очистив массивы объекта (оставляем только нужный объект c active)
      for (const value in state.mainObj) {
        state.mainObj[value].splice(0, state.mainObj[value].length - 1)
      }
    },
    saveLocalSt (state) { // сохраняем в local Storage
      const parsed = JSON.stringify(state.mainObj)
      localStorage.setItem('mainObj', parsed)
    },
    saveMouseDown (state, { value, arg }) { // сохраняем данные, которые получаем при зажатии ЛКМ
      const newObj = value.find(el => el.bt < arg && el.et >= arg)
      if (newObj === undefined) { // проверяем выделена ли ячейка
        state.mauseDownObj = {
          nameArr: value,
          td: arg
        }
      }
    },
    saveMouseMove (state, { value, arg, prop }) { // на ходу добавляем объекты, в нужные массивы, для выделения ячеек, объеденив полученные данные при mausedown и при mousemove
      if (state.mauseDownObj.nameArr !== null) { // начинаем выделение, если получили координаты при mousedown
        if (state.mauseDownObj.td < arg) { // если выделяем с лева на право
          const newObj = {
            bt: state.mauseDownObj.td,
            et: arg
          }
          const arrValues = Object.values(state.mainObj)
          const firstId = arrValues.findIndex(el => el === state.mauseDownObj.nameArr)
          const secondId = arrValues.findIndex(el => el === value)
          if (firstId < secondId) { // если выделяем с верху в низ (и слева на право)
            for (let i = firstId; i <= secondId; i++) {
              arrValues[i].unshift(newObj)
            }
          } else { // если выделяем с низу вверх (с лева на право)
            for (let i = secondId; i <= firstId; i++) {
              arrValues[i].unshift(newObj)
            }
          }
        } else { // Если выделяем с права на лево
          const newObj = {
            bt: arg - 59,
            et: state.mauseDownObj.td + 1
          }
          const arrValues = Object.values(state.mainObj)
          const firstId = arrValues.findIndex(el => el === state.mauseDownObj.nameArr)
          const secondId = arrValues.findIndex(el => el === value)
          if (firstId < secondId) { // если выделяем с права на лево и с верху вниз
            for (let i = firstId; i <= secondId; i++) {
              arrValues[i].unshift(newObj)
            }
          } else { // если выделяем с права на леве и с низу вверх
            for (let i = secondId; i <= firstId; i++) {
              arrValues[i].unshift(newObj)
            }
          }
        }
      }
    },
    saveMouseUp (state) { // очищаем объект начальных координат, чтобы остановить выделение
      state.mauseDownObj = {
        nameArr: null,
        td: null
      }
    },
    checkChoiseAll (state, prop) {
      const choiseAll = state.mainObj[prop].find(el => el.bt === 0 && el.et === 1439)
      if (choiseAll !== undefined) {
        state.mainObj[prop][state.mainObj[prop].length - 1].active = true
      }
    }
  },
  actions: {
    addProp (ctx) {
      ctx.commit('addProp')
    },
    clickTd (ctx, { value, arg, prop }) {
      ctx.commit('clickTd', { value, arg, prop })
      ctx.dispatch('checkChoiseAll', prop)
    },
    chooseAll (ctx, { value, prop }) {
      ctx.commit('chooseAll', { value, prop })
    },
    clearTable (ctx) {
      ctx.commit('clearTable')
    },
    saveLocalSt (ctx) {
      ctx.commit('saveLocalSt')
    },
    saveMouseDown (ctx, { value, arg }) {
      ctx.commit('saveMouseDown', { value, arg })
    },
    saveMouseMove (ctx, { value, arg, prop }) {
      ctx.commit('saveMouseMove', { value, arg, prop })
      ctx.dispatch('checkChoiseAll', prop)
    },
    saveMouseUp (ctx) {
      ctx.commit('saveMouseUp')
    },
    checkChoiseAll (ctx, prop) {
      ctx.commit('checkChoiseAll', prop)
    }
  }
})
