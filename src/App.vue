<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Bazaar</span>
        <span class="font-weight-light">V1</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="$store.commit('addBill')">
        <v-icon left>mdi-basket</v-icon>
        <span class="mr-2">Neue Rechnung</span>
      </v-btn>
      <v-btn text href="#">
        <span class="mr-2">Download</span>
        <v-icon>mdi-download</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
  methods: {
  }
};
</script>
