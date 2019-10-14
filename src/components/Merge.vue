<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on" @click.stop>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">mdi-merge</v-icon>
          </template>
          <span>Zusammenführen</span>
        </v-tooltip>
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
              <v-text-field
                label="Name"
                required
                v-model="name"
                ref="name"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-combobox
                v-model="selected"
                :items="bazaars"
                label="Wähle alle Basars die zusammengeführt werden sollen"
                multiple
                chips
                :small-chips="true"
                :deletable-chips="true"
                autofocus
              ></v-combobox>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="red darken-1" text @click="dialog = false"
          >Schließen</v-btn
        >
        <v-btn color="primary" text @click="create">Erstellen</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Merge",
  props: {
    preselection: String
  },
  data() {
    return {
      dialog: false,
      bazaars: [],
      selected: [],
      name: "Zusammengeführte Basars"
    };
  },
  watch: {
    dialog() {
      if (this.dialog) {
        this.bazaars = this.$store.getters.bazaarsAsList.map(b => ({
          text: `${b.name} - ${b.date} (${b.id})`,
          value: b.id
        }));
        this.selected = this.bazaars.filter(b => b.value === this.preselection);
        setTimeout(() => this.$refs.name.focus(), 250);
      }
    }
  },
  methods: {
    create() {
      this.$store.dispatch("merge", {
        name: this.name,
        bazaars: this.selected.map(b => b.value)
      });

      this.dialog = false;
    }
  }
};
</script>
