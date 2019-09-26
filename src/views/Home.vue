<template>
  <div class="home">
    <div class="add">
      <button @click="addBill">Add new Bill</button>
    </div>
    <div class="bills">
      <Bill v-for="(id, index) in $store.getters.billIds" :key="index" :id="id" />
    </div>
    <Customers />
  </div>
</template>

<script>
// @ is an alias to /src
import Bill from "@/components/Bill.vue";
import Customers from "@/components/Customers.vue";

export default {
  name: "home",
  components: {
    Bill,
    Customers
  },
  mounted() {
    // this.$store.commit('addBill');
  },
  methods: {
    addBill() {
      this.$store.commit('addBill');
      const id = this.$store.state.currentId;
    }
  }
};
</script>
