<template>
  <BazaarEditor headline="Basar verändern" :name="bazaar.name" @finish="rename">
    <v-btn icon>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">mdi-square-edit-outline</v-icon>
        </template>
        <span>Umbennen</span>
      </v-tooltip>
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
    bazaar: Object
  },
  methods: {
    rename(name) {
      this.$store.commit("editBazaar", { bazaarId: this.bazaar.id, name });
    }
  }
};
</script>
