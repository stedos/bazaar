<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-on="on">
        <span class="d-none d-sm-flex">Neuen Basar erstellen</span>
        <v-icon :right="$vuetify.breakpoint.smAndUp">mdi-shopping</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Basar erstellen</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field label="Name" required v-model="name" ref="name"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="ID" disabled v-model="id"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Date" disabled v-model="date"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="red darken-1" text @click="dialog = false">Schließen</v-btn>
        <v-btn color="green darken-1" text @click="create">Erstellen</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateBazaar",
  props: {
  },
  data() {
    return {
      dialog: false,
      id: '' + Math.floor(Math.random() * Math.pow(10, 6)),
      date: new Date().toUTCString(),
      name: "",
    }
  },
  watch: {
    dialog() {
      if(this.dialog) {
        setTimeout(() => this.$refs.name.focus(), 250);
      }
    }
  },
  methods: {
    create() {
      this.$store.commit('createBazaar', {id: this.id, date: this.date, name: this.name});
      this.dialog = false;
    },
    close() {
      this.$emit('change', false);
    }
  }

};
</script>