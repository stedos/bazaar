<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <span v-on="on" @click.stop>
        <slot></slot>
      </span>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ headline }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="12" md="12">
              <v-text-field label="Name" required v-model="value" ref="name" @keyup.enter="finish"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="red darken-1" text @click="dialog = false">Abbrechen</v-btn>
        <v-btn color="green darken-1" text @click="finish">Fertig</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "BazaarEditor",
  props: {
    headline: String,
    name: String,
  },
  data() {
    return {
      dialog: false,
      value: '',
    }
  },
  watch: {
    dialog() {
      if(this.dialog) {
        this.value = this.name;
        setTimeout(() => this.$refs.name.focus(), 350);
      }
    }
  },
  methods: {
    finish() {
      this.dialog = false;
      this.$emit('finish', this.value);
    },
  }

};
</script>