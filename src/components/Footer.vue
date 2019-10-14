<template>
  <!-- <div class="overflow-hidden footer">
    <div class="text-center mb-1">
      <v-btn text color="primary" @click="showNav = !showNav">Menü {{ showNav ? 'verstecken' : 'anzeigen' }}</v-btn>
    </div>

    <v-bottom-navigation
      v-model="activeBtn"
      :input-value="showNav"
      color="primary"
      shift
    >
      <v-btn @click="$router.push('/').catch(err => {})">
        <span>Übersicht</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn>
        <span>Zum Seitenstart</span>
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>

      <v-btn>
        <span>Hilfe</span>
        <v-icon @click="showInfobox = true">mdi-account-question</v-icon>
      </v-btn>

    </v-bottom-navigation>
    <InfoBox v-model="showInfobox" />
  </div> -->
  <v-card class="text-right">
    <v-btn outlined color="primary" @click="showInfobox = true">
      <span>Hilfe</span>
      <v-icon right>mdi-account-question</v-icon>
    </v-btn>
    <InfoBox v-model="showInfobox" />
  </v-card>
</template>

<script>
import InfoBox from "@/components/InfoBox.vue";

export default {
  name: "Footer",
  components: {
    InfoBox
  },
  props: {},
  data() {
    return {
      activeBtn: 1,
      showNav: true,
      showInfobox: false
    };
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
