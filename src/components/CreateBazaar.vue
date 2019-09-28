<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="teal" v-on="on">
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
              <v-text-field label="Name" required v-model="bazaar.name" ref="name" @keyup.enter="create"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="ID" disabled v-model="bazaar.id"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Date" disabled v-model="bazaar.date"></v-text-field>
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
import { bazaarData } from '@/utils/utils.js';

export default {
  name: "CreateBazaar",
  props: {
  },
  data() {
    return {
      dialog: false,
      bazaar: bazaarData(),
    }
  },
  watch: {
    dialog() {
      if(this.dialog) {
        this.bazaar = bazaarData();
        setTimeout(() => this.$refs.name.focus(), 250);
      }
    }
  },
  methods: {
    create() {
      this.$store.commit('createBazaar', this.bazaar);
      this.dialog = false;
      this.$router.push(`/bazaar/${this.bazaar.id}`);
    },
  }

};
</script>