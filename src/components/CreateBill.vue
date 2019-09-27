<template>
  <v-btn class="primary" @click="$store.commit('addBill')">
    <span class="mr-2 d-none d-sm-flex">Neue Rechnung</span>
    <v-icon :right="$vuetify.breakpoint.smAndUp">mdi-receipt</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: "CreateBill",
};
</script>