<template>
  <v-container class="home">
    <v-row>
      <v-col cols="12">
        <Bazaars />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Bazaars from "@/components/Bazaars.vue";

export default {
  name: "home",
  components: {
    Bazaars
  },
  mounted() {
    this.$store.commit("selectBazaar", null);
  },
  methods: {}
};
</script>
