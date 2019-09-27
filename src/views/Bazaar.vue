<template>
  <v-container>
    <v-row v-if="$store.state.selected">
      <v-col cols="8" md="6">
        <div class="bills">
          <Bill v-for="(id, index) in $store.getters.billIds" :key="index" :id="id" 
            @finish="addBill" :highlighted="index === 0"/>
        </div>
        <v-btn center @click="addBill">
          <v-icon left>mdi-basket</v-icon>
          <span class="mr-2">Neue Rechnung</span>
        </v-btn>
      </v-col>
      <v-col cols="4" md="6">
        <Customers />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Bill from "@/components/Bill.vue";
import Customers from "@/components/Customers.vue";

export default {
  name: "Bazaar",
  components: {
    Bill,
    Customers
  },
  mounted() {
    console.log('$route.params.id', this.$route.params.id);
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
