<template>
  <v-overlay
      :opacity="0.5"
      :value="overlay"
      :z-index="100"
    >
    <v-card max-width="800" class="text-left">
        <h2>Übersicht</h2>
        <p></p>
        <h3>Neuen Basar erstellen</h3>
        <p>Erstellt einen neuen Basar nach Eingabe eines beliebigen Namens.</p>
        <h3>Downloaden</h3>
        <p>Exportiere/Downloade einen Basar um ihn zwischen zu speichern oder ihn auf einen anderen PC zu übertragen.</p>
        <h3>Importieren</h3>
        <p>Importiere zuvor exportierte Basars um beispielsweise zwei Kassen zusammenzuführen.</p>
        <h3>Zusammenführen</h3>
        <p>Kombiniere beliebig viele Basars zu einem neuen um eine Gesamtrechnung zu erstellen.</p>

        <h2>Basar Detailseite</h2>
        <p></p>
        <h3>Neuen Rechnung</h3>
        <p>Erstellt eine neue Rechnung. Gleiches geschieht nachdem zweimal hintereinander "Enter" gedrückt wurde, während eine bestehende Rechnung bearbeitet wird.</p>

      </v-card>
      
      <v-btn text color="primary" @click="$emit('event', false)">Schließen</v-btn>
      
  </v-overlay>
</template>

<script>

export default {
  name: "InfoBox",
  components: {
  },
  model: {
    prop: 'overlay',
    event: 'event'
  },
  props: {
    overlay: true,
  },
  data() {
    return {
    }
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
