<template>
  <v-card>
    <h1>Basars</h1>
    <v-simple-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>ID</th>
          <th>Aktionen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bazaar in $store.getters.bazaarsAsList" :key="bazaar.id" @click.stop="$router.push(`/bazaar/${bazaar.id}`)">
          <td>{{ bazaar.name }}</td>
          <td>{{ bazaar.date }}</td>
          <td>{{ bazaar.id }}</td>
          <td>
            <!-- <ImportExport :hideText="false" />
            <v-icon @click="deleteEntry(bazaar.id)">mdi-delete</v-icon> -->
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
import ImportExport from "@/components/ImportExport.vue";

export default {
  name: "Bazaars",
  components: {
    ImportExport
  },
  props: {
  },
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
    deleteEntry(id) {
      // this.$store.commit('deleteBazaar', id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
