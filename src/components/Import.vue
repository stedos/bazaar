<template>
  <div class="import">
    <input ref="upload" type="file" @change="loadTextFromFile" class="upload" accept="application/json">
    <v-btn text @click="$refs.upload.click()">
      <span v-if="showText" class="mr-2 d-none d-sm-flex">Importieren</span>
      <v-icon :right="$vuetify.breakpoint.smAndUp">mdi-upload</v-icon>
    </v-btn>

    <v-dialog v-model="dialog.show" max-width="370">
      <v-card>
        <v-card-title class="headline">
          Importieren
          <template v-if="dialog.error">&nbsp;fehlgeschlagen</template>
          <template v-else>&nbsp;erfolgreich</template>
        </v-card-title>
        <v-card-text v-if="dialog.error">Leider ist ein Fehler aufgetreten. Bitte laden Sie die Datei erneut herunter und versuchen Sie diese einzufügen.</v-card-text>
        <v-card-text v-else>Rechnungen '{{ dialog.name }}' wurden erfolgreich mit der ID {{ dialog.id }} importiert.</v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn text @click="closeDialog()">Okay!</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Vue from "vue";

const dialogDefault = () => ({
  show: false,
  error: false,
  id: 0,
  name: '',
});

export default {
  name: 'Import',
  props: {
    showText: Boolean,
  },
  data: () => ({
    dialog: dialogDefault(),
  }),
  methods: {
    loadTextFromFile(ev) {
      this.dialog.show = true;

      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        try {
          const bazaar = JSON.parse(e.target.result);
          const originalId = bazaar.id;
          let count = 1;
          
          while(this.$store.getters.hasBazaar(bazaar.id)) {
            bazaar.id = `${originalId} (${count++})`;
          }
          
          this.dialog.id = bazaar.id;
          this.dialog.name = bazaar.name;
          this.$store.commit('createBazaar', bazaar);

        } catch (error) {
          console.log('error', error);
          this.dialog.error = true;
        }

        this.$refs.upload.value = '';
      };

      reader.readAsText(file);
    },
    closeDialog() {
      this.dialog = dialogDefault();
    }
  }
};
</script>

<style lang="less" scoped>
.import {
  position: relative;
}
.upload {
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 1px;
    overflow: hidden;
    opacity: 0;
}
</style>