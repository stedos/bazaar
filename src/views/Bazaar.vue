<template>
  <v-container v-if="$store.state.selected">
    <v-row>
      <v-col cols="12" md="8">
        <h1>{{ bazaar.name }}</h1>
      </v-col>
      <v-col cols="12" md="4" class="name-info">
        <h4>{{ bazaar.date }}</h4>
        <h5>ID: {{ bazaar.id }}</h5>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <div class="bills">
          <Bill v-for="(id, index) in $store.getters.billIds" :key="index" :id="id" 
            @finish="addBill" :highlighted="index === 0"/>
        </div>
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
  computed: {
    bazaar() {
      return this.$store.getters.bazaar;
    }
  },
  mounted() {
    this.$store.commit('selectBazaar', this.$route.params.id);

    if(!this.$store.getters.billIds.length) {
      this.addBill(this.$route.params.id);
    }
  },
  methods: {
    addBill() {
      this.$store.commit('addBill');
    }
  }
};
</script>

<style lang="less" scoped>
.name-info {
  text-align: right;
}
</style>
