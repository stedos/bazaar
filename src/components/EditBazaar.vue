<template>
  <BazaarEditor headline="Basar verändern" :name="bazaar.name" @finish="rename">
    <v-btn icon>
      <v-icon>mdi-square-edit-outline</v-icon>
    </v-btn>
  </BazaarEditor>
</template>

<script>
import BazaarEditor from "@/components/BazaarEditor.vue";

export default {
  name: "EditBazaar",
  components: {
    BazaarEditor
  },
  props: {
    bazaar: Object,
  },
  methods: {
    rename(name) {
      this.$store.commit('editBazaar', { bazaarId: this.bazaar.id, name });
    },
  }

};
</script>