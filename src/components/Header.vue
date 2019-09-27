<template>
  <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" @click="$router.push('/').catch(err => {})">
        <span>Bazaar</span>
        <span class="font-weight-light">V1</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="$store.commit('addBill')">
        <v-icon left>mdi-basket</v-icon>
        <span class="mr-2">Neue Rechnung</span>
      </v-btn>
      <ImportExport />
    </v-app-bar>
</template>

<script>
import ImportExport from "@/components/ImportExport.vue";

export default {
  name: 'Header',
  components: {
    ImportExport
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.headline {
  cursor: pointer;
}
</style>