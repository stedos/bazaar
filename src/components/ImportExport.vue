<template>
  <div class="impex">
    <input ref="upload" type="file" @change="loadTextFromFile" class="upload" accept="application/json">
    <v-btn text @click="$refs.upload.click()">
      <span class="mr-2">Importieren</span>
      <v-icon>mdi-upload</v-icon>
    </v-btn>
    <v-btn text :href="href" :download="`Rechnung-${invoiceId}.json`">
      <span class="mr-2">Download</span>
      <v-icon>mdi-download</v-icon>
    </v-btn>

    <v-dialog v-model="dialog.show" max-width="370">
      <v-card>
        <v-card-title class="headline">
          Importieren
          <template v-if="dialog.error">&nbsp;fehlgeschlagen</template>
          <template v-else>&nbsp;erfolgreich</template>
        </v-card-title>
        <v-card-text v-if="dialog.error">Leider ist ein Fehler aufgetreten. Bitte laden Sie die Datei erneut herunter und versuchen Sie diese einzufügen.</v-card-text>
        <v-card-text v-else>Rechnungen wurden erfolgreich mit der ID {{ dialog.id }} importiert.</v-card-text>
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
});

export default {
  name: 'ImportExport',
  data: () => ({
    invoiceId: Math.floor(Math.random() * Math.pow(10, 6)),
    dialog: dialogDefault(),
  }),
  computed: {
    href() {
      const content = JSON.stringify({id: this.invoiceId, bills: this.$store.state.bills});
      const file = new Blob([content], { type: "application/json" });
      return URL.createObjectURL(file);
    }
  },
  methods: {
    loadTextFromFile(ev) {
      this.dialog.show = true;

      const file = ev.target.files[0];
      const reader = new FileReader();

      reader.onload = e => {
        try {
          const content = JSON.parse(e.target.result);
          this.dialog.id = content.id;
          this.$store.commit('addBills', content);
        } catch (error) {
          this.dialog.error = true;
        }
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
.impex {
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