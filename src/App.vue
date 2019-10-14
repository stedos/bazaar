<template>
  <v-app>
    <Header />

    <v-content>
      <router-view />
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
  methods: {}
};
</script>

<style lang="less">
i {
  cursor: pointer;
}
// a, a:visited, a:hover, a:active {
//   text-decoration: none;
// }
.v-card {
  padding: 20px;
}
.chart-naming {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
