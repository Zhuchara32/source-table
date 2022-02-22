<template>
  <v-app>
    <v-main>
      <v-col offset="1" cols="10">
        <h1 class="text-uppercase grey--text">set schedule</h1>
        <Table />
        <div class="appBtn">
          <v-btn color="red" class="white--text"
            @click="clearTable"
          >
            Clear
          </v-btn>
          <v-btn color="green" class="ml-5 white--text"
            @click="saveLocalSt"
          >
            Save changes
          </v-btn>
        </div>
      </v-col>
    </v-main>
  </v-app>
</template>

<script>
import Table from './components/Table.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Table
  },
  created () {
    this.addProp()
  },
  methods: {
    ...mapActions([
      'addProp',
      'clearTable',
      'saveLocalSt'
    ])
  }
}
</script>

<style lang="scss">
  .active {
    background: #C0C0C0;
  }
  .tr > td:nth-child(2) {
    background: grey;
    border-bottom: white 1px solid;
  }
  .table {
    border-collapse: collapse;
  }
  .trInside {
    empty-cells: show;

    &:first-child, &:nth-child(2) {
      border-right: 1px solid black;
    }
  }
  .appBtn {
    padding-top: 20px;
  }
</style>
