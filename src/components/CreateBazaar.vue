<template>
  <BazaarEditor headline="Basar erstellen" @finish="create">
    <v-btn color="teal">
      <span class="d-none d-sm-flex">Neuen Basar erstellen</span>
      <v-icon :right="$vuetify.breakpoint.smAndUp">mdi-shopping</v-icon>
    </v-btn>
  </BazaarEditor>
</template>

<script>
import BazaarEditor from "@/components/BazaarEditor.vue";

export default {
  name: "CreateBazaar",
  components: {
    BazaarEditor
  },
  methods: {
    create(name) {
      this.$store.dispatch('create', name).then(({ id }) => {
        this.$router.push(`/bazaar/${id}`);
      });
    },
  }

};
</script>