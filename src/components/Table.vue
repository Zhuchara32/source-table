<template>
          <v-simple-table>
          <table class="table tableMain" border="1">
            <tbody>
              <tr>
                <td class="zeroTd"></td>
                <td class="text-uppercase col-1" align="center">all day</td>
                <td>00:00</td>
                <td>03:00</td>
                <td>06:00</td>
                <td>09:00</td>
                <td>12:00</td>
                <td>15:00</td>
                <td>18:00</td>
                <td>21:00</td>
              </tr>
              <tr class="tr" v-for="(value, prop) in mainObj" :key="prop">
                <td class="text-uppercase" align="center"
                  :class="{ active: value.length > 1 }"
                >{{ prop }}</td>
                <td align="center" @click="chooseAll(value, prop)">
                  <v-icon v-show="value[value.length - 1].active">mdi-check-bold</v-icon>
                </td>
                <td>
                  <table class="table" width="100%">
                    <tbody>
                      <tr>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 0) }"
                          @click="clickChange(value, 59, prop)"
                          @mousedown.prevent="saveMouseDown(value, 0)"
                          @mousemove="saveMouseMove(value, 59, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 60) }"
                          @click="clickChange(value, 119, prop)"
                          @mousedown.prevent="saveMouseDown(value, 60)"
                          @mousemove="saveMouseMove(value, 119, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 120) }"
                          @click="clickChange(value, 179, prop)"
                          @mousedown.prevent="saveMouseDown(value, 120)"
                          @mousemove="saveMouseMove(value, 179, prop)"
                          @mouseup="saveMouseUp"
                        >&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table class="table" width="100%">
                    <tbody>
                      <tr>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 180) }"
                          @click="clickChange(value, 239, prop)"
                          @mousedown.prevent="saveMouseDown(value, 180)"
                          @mousemove="saveMouseMove(value, 239, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 240) }"
                          @click="clickChange(value, 299, prop)"
                          @mousedown.prevent="saveMouseDown(value, 240)"
                          @mousemove="saveMouseMove(value, 299, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 300) }"
                          @click="clickChange(value, 359, prop)"
                          @mousedown.prevent="saveMouseDown(value, 300)"
                          @mousemove="saveMouseMove(value, 359, prop)"
                          @mouseup="saveMouseUp"
                        >&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table class="table" width="100%">
                    <tbody>
                      <tr>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 360) }"
                          @click="clickChange(value, 419, prop)"
                          @mousedown.prevent="saveMouseDown(value, 360)"
                          @mousemove="saveMouseMove(value, 419, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 420) }"
                          @click="clickChange(value, 479, prop)"
                          @mousedown.prevent="saveMouseDown(value, 420)"
                          @mousemove="saveMouseMove(value, 479, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 480) }"
                          @click="clickChange(value, 539, prop)"
                          @mousedown.prevent="saveMouseDown(value, 480)"
                          @mousemove="saveMouseMove(value, 539, prop)"
                          @mouseup="saveMouseUp"
                        >&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table class="table" width="100%">
                    <tbody>
                      <tr>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 540) }"
                          @click="clickChange(value, 599, prop)"
                          @mousedown.prevent="saveMouseDown(value, 540)"
                          @mousemove="saveMouseMove(value, 599, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 600) }"
                          @click="clickChange(value, 659, prop)"
                          @mousedown.prevent="saveMouseDown(value, 600)"
                          @mousemove="saveMouseMove(value, 659, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 660) }"
                          @click="clickChange(value, 719, prop)"
                          @mousedown.prevent="saveMouseDown(value, 660)"
                          @mousemove="saveMouseMove(value, 719, prop)"
                          @mouseup="saveMouseUp"
                        >&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table class="table" width="100%">
                    <tbody>
                      <tr>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 720) }"
                          @click="clickChange(value, 779, prop)"
                          @mousedown.prevent="saveMouseDown(value, 720)"
                          @mousemove="saveMouseMove(value, 779, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 780) }"
                          @click="clickChange(value, 839, prop)"
                          @mousedown.prevent="saveMouseDown(value, 780)"
                          @mousemove="saveMouseMove(value, 839, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 840) }"
                          @click="clickChange(value, 899, prop)"
                          @mousedown.prevent="saveMouseDown(value, 840)"
                          @mousemove="saveMouseMove(value, 899, prop)"
                          @mouseup="saveMouseUp"
                        >&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table class="table" width="100%">
                    <tbody>
                      <tr>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 900) }"
                          @click="clickChange(value, 959, prop)"
                          @mousedown.prevent="saveMouseDown(value, 900)"
                          @mousemove="saveMouseMove(value, 959, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 960) }"
                          @click="clickChange(value, 1019, prop)"
                          @mousedown.prevent="saveMouseDown(value, 960)"
                          @mousemove="saveMouseMove(value, 1019, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 1020) }"
                          @click="clickChange(value, 1079, prop)"
                          @mousedown.prevent="saveMouseDown(value, 1020)"
                          @mousemove="saveMouseMove(value, 1079, prop)"
                          @mouseup="saveMouseUp"
                        >&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table class="table" width="100%">
                    <tbody>
                      <tr>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 1080) }"
                          @click="clickChange(value, 1139, prop)"
                          @mousedown.prevent="saveMouseDown(value, 1080)"
                          @mousemove="saveMouseMove(value, 1139, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 1140) }"
                          @click="clickChange(value, 1199, prop)"
                          @mousedown.prevent="saveMouseDown(value, 1140)"
                          @mousemove="saveMouseMove(value, 1199, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 1200) }"
                          @click="clickChange(value, 1259, prop)"
                          @mousedown.prevent="saveMouseDown(value, 1200)"
                          @mousemove="saveMouseMove(value, 1259, prop)"
                          @mouseup="saveMouseUp"
                        >&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td>
                  <table class="table" width="100%">
                    <tbody>
                      <tr>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 1260) }"
                          @click="clickChange(value, 1319, prop)"
                          @mousedown.prevent="saveMouseDown(value, 1260)"
                          @mousemove="saveMouseMove(value, 1319, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 1320) }"
                          @click="clickChange(value, 1379, prop)"
                          @mousedown.prevent="saveMouseDown(value, 1320)"
                          @mousemove="saveMouseMove(value, 1379, prop)"
                          @mouseup="saveMouseUp"
                        ></td>
                        <td class="trInside" width="33%"
                          :class="{ active: changeDesign(value, 1380) }"
                          @click="clickChange(value, 1439, prop)"
                          @mousedown.prevent="saveMouseDown(value, 1380)"
                          @mousemove="saveMouseMove(value, 1439, prop)"
                          @mouseup="saveMouseUp"
                        >&nbsp;</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </v-simple-table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Table',
  computed: mapGetters(['mainObj']),
  methods: {
    ...mapActions([
      'clickTd',
      'chooseAll',
      'saveMouseDown',
      'saveMouseUp'
    ]),
    changeDesign (value, x) {
      if (x === 0) {
        const newObj = value.find(el => el.bt === 0)
        if (newObj !== undefined) {
          return true
        } else {
          return false
        }
      }
      if (x > 0) {
        const newObj = value.find(el => el.bt <= x && el.et > x)
        if (newObj !== undefined) {
          return true
        } else {
          return false
        }
      }
    },
    clickChange (value, arg, prop) {
      this.$store.dispatch('clickTd', { value, arg, prop })
    },
    chooseAll (value, prop) {
      this.$store.dispatch('chooseAll', { value, prop })
    },
    saveMouseDown (value, arg) {
      this.$store.dispatch('saveMouseDown', { value, arg })
    },
    saveMouseMove (value, arg, prop) {
      this.$store.dispatch('saveMouseMove', { value, arg, prop })
    }
  }
}
</script>
