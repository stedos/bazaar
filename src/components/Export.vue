<template>
  <v-btn
    :text="showText"
    :icon="!showText"
    :href="href"
    :download="`${name}.json`"
    @click.stop
  >
    <span v-if="showText" class="mr-2 d-none d-sm-flex">Download</span>
    <v-icon v-if="showText">mdi-download</v-icon>
    <v-tooltip v-else bottom>
      <template v-slot:activator="{ on }">
        <v-icon v-on="on">mdi-download</v-icon>
      </template>
      <span v-if="!showText">Download</span>
    </v-tooltip>
  </v-btn>
</template>

<script>
export default {
  name: "Export",
  props: {
    showText: Boolean,
    id: String
  },
  computed: {
    href() {
      const file = new Blob(
        [JSON.stringify(this.$store.state.bazaars[this.id])],
        { type: "application/json" }
      );
      return URL.createObjectURL(file);
    },
    name() {
      return this.$store.state.bazaars[this.id].name;
    }
  }
};
</script>

<style lang="less" scoped></style>
