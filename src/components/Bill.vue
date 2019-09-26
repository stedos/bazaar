<template>
  <table class="bill">
    <tr>
      <th colspan="3">Rechnung: {{ id }}</th>
    </tr>

    <tr>
      <th>Kunde</th>
      <th>Preis</th>
      <th>Entfernen</th>
    </tr>

    <tr v-for="(entry, entryId) in bill" :key="entryId">
      <td>{{ entry.customer }}</td>
      <td>{{ entry.price }}</td>
      <td @click="deleteEntry(entryId)"> X</td>
    </tr>

    <tr>
      <td><input name="customer" v-model="current.customer" ref="customer" @keyup.enter="$refs.price.focus()" /></td>
      <td><input name="price" type="number" v-model.number="current.price" ref="price" @keyup.enter="addEntry" /></td>
    </tr>
  </table>
</template>

<script>
const cleanData = () => ({
  customer: "",
  price: null,
});

export default {
  name: "Bill",
  props: {
    id: String
  },
  data() {
    return {
      current: cleanData(),
    }
  },
  computed: {
    bill() {
      return this.$store.getters.getBillById(this.id);
    }
  },
  methods: {
    addEntry() {
      this.$store.commit('addEntryToBill', {
        billId: this.id,
        ...this.current,
      });

      this.reset();
      this.$refs.customer.focus();
    },
    deleteEntry(entryId) {
      this.$store.commit('deleteEntryFromBill', {
        billId: this.id,
        entryId: entryId
      });
    },
    reset() {
      this.current = cleanData();
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bill {
  border: 1px solid #000;
  margin: 20px;
  padding: 20px;

  table {
    // width: 100%;
  }
}
a {
  color: #42b983;
}
</style>
