<template>
  <v-btn icon @click.stop="print">
    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-icon v-on="on">mdi-printer</v-icon>
      </template>
      <span>Drucken</span>
    </v-tooltip>
  </v-btn>
</template>

<script>
import { Printd } from "printd";

export default {
  name: "Print",
  props: {
    refId: String
  },
  data() {
    return {
      css: [
        // general
        `
          table {
            width: 100%;
            border-spacing: 0;
            border-collapse: separate;
          }
          th {
            font-weight: bold;
            border-bottom: 2px solid grey;
            font-size: 16px;
            text-align: left;
          }
          td {
            border-bottom: 1px solid grey;
            height: 32px;
            font-size: 14px;
          }
          input {
            border: none;
          }
          button {
            display: none;
          }
        `,
        // bill
        `
          .bill thead th:last-child,
          .bill tbody tr:last-child,
          .bill tbody td:last-child:not([colspan="2"]) {
            display: none;
          }
          .bill input ~ div {
            display: inline-block;
          }
        `,
        // invoice
        `
          .customers th:nth-child(n+3),
          .customers td:nth-child(n+3) {
            text-align: right;
          }
          .customers tbody tr:last-child {
            font-weight: bold;
          }
        `
      ]
    };
  },
  mounted() {},
  methods: {
    print() {
      new Printd().print(this.$parent.$el, this.css);
    }
  }
};
</script>

<style lang="less" scoped></style>
