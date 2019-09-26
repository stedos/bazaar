<template>
  <table class="customers">
    <tr>
      <th>Kunde</th>
      <th>Preis brutto</th>
      <th>Preis netto</th>
    </tr>
    <tr v-for="customer in $store.getters.customers" :key="customer.id">
      <td>{{ customer.id }}</td>
      <td>{{ customer.price }}</td>
      <td>{{ customer.price * tax }}</td>
    </tr>
    <tr>
      <td>SUMME</td>
      <td>{{ sum }}</td>
      <td>{{ sum * tax }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "Customers",
  props: {
    tax: {
      type: Number,
      default: 0.9,
    }
  },
  computed: {
    customers() {
      return this.$store.getters.customers;
    },
    sum() {
      return this.$store.getters.sum;
    }
  },
  methods: {
    reset() {
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.customers {
  border: 1px solid #000;
  margin: 20px;
  padding: 20px;
}
</style>
