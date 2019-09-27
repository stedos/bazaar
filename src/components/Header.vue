<template>
  <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" @click="$router.push('/').catch(err => {})">
        <span>Bazaar</span>
        <span class="font-weight-light">V1</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- bill selected -->
      <template v-if="$store.state.selected">
        <Export :id="$store.state.selected" :showText="true"/>
        <CreateBill />
      </template>
      <!-- bill not selected -->
      <template v-else>
        <Import :showText="true"/>
        <CreateBazaar />
      </template>
    </v-app-bar>
</template>

<script>
import Import from "@/components/Import.vue";
import Export from "@/components/Export.vue";
import CreateBazaar from "@/components/CreateBazaar.vue";
import CreateBill from "@/components/CreateBill.vue";

export default {
  name: 'Header',
  components: {
    Import,
    Export,
    CreateBazaar,
    CreateBill,
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
};
</script>

<style lang="less" scoped>
.headline {
  cursor: pointer;
}
</style>