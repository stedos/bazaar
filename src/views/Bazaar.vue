<template>
  <v-container v-if="$store.state.selected">
    <v-row>
      <v-col cols="8">
        <h1>{{ bazaar.name }}</h1>
      </v-col>
      <v-col cols="4" class="name-info">
        <h4>{{ bazaar.date }}</h4>
        <h5>ID: {{ bazaar.id }}</h5>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" class="bills">
        <Bill
          v-for="(id, index) in bills"
          :key="index"
          :id="id"
          @finish="addBill"
          @select="id => (selected = id)"
          :highlighted="index === bills.length - 1 || selected === id"
        />
      </v-col>
      <v-col cols="12" sm="6">
        <Customers />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Bill from "@/components/Bill.vue";
import Customers from "@/components/Customers.vue";

export default {
  name: "Bazaar",
  components: {
    Bill,
    Customers
  },
  data() {
    return {
      selected: null
    };
  },
  computed: {
    bazaar() {
      return this.$store.getters.bazaar;
    },
    bills() {
      return this.$store.getters.billIds;
    }
  },
  mounted() {
    this.$store.commit("selectBazaar", this.$route.params.id);

    if (!this.bills.length) {
      this.addBill(this.$route.params.id);
    }
  },
  methods: {
    addBill() {
      this.$store.commit("addBill");
    }
  }
};
</script>

<style lang="less" scoped>
.bills {
  display: flex;
  flex-direction: column-reverse;
}
.name-info {
  text-align: right;
}
</style>
