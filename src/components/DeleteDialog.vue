<template>
  <v-dialog v-model="visible" max-width="370">
    <v-card>
      <v-card-title class="headline">Rechnung {{ id }} wirklich löschen?</v-card-title>
      <v-card-text>Dies kann nicht Rückgängig gemacht werden.</v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="green darken-1" text @click="close(); $emit('keep')">Behalten!</v-btn>
        <v-btn color="red darken-1" text @click="close(); $emit('delete'); $emit">Löschen!</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DeleteDialog",
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    id: String,
    visible: Boolean,
  },
  methods: {
    close() {
      this.$emit('change', false);
    }
  }

};
</script>