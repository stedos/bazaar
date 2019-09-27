<template>
  <v-app>
    <Header />

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'App',
  components: {
    Header
  },
  data: () => ({
    //
  }),
  methods: {
  }
};
</script>

<style lang="less">
i {
  cursor: pointer;
}
.chart-naming {
    width: 100%;
    display: flex;
    justify-content: space-between;

    i {
      margin-left: 16px;
    }
  }
</style>