<template>
  <v-container class="home">
    <v-row>
      <v-col cols="12">
        <CreateBazaar />
        <Bazaars />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CreateBazaar from "@/components/CreateBazaar.vue";
import Bazaars from "@/components/Bazaars.vue";

export default {
  name: "home",
  components: {
    CreateBazaar,
    Bazaars
  },
  mounted() {
  },
  methods: {
  }
};
</script>
