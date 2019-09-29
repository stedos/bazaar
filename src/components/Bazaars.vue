<template>
  <v-card>
    <h1>Basars</h1>
    <v-simple-table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>ID</th>
          <th>Rechnungen</th>
          <th>Aktionen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bazaar in $store.getters.bazaarsAsList" :key="bazaar.id" @click.stop="$router.push(`/bazaar/${bazaar.id}`)">
          <td>{{ bazaar.name }}</td>
          <td>{{ bazaar.date }}</td>
          <td>{{ bazaar.id }}</td>
          <td>{{ Object.keys(bazaar.bills).length }}</td>
          <td>
            <EditBazaar :bazaar="bazaar" />
            <Merge :preselection="bazaar.id" />
            <Export :id="bazaar.id" />
            <Delete :headline="`Basar '${bazaar.name}' [ID: ${bazaar.id}] wirklich löschen?`" @delete="deleteEntry(bazaar.id)" />
          </td>
        </tr>
      </tbody>
    </v-simple-table>
  </v-card>
</template>

<script>
import Export from "@/components/Export.vue";
import Delete from "@/components/Delete.vue";
import Merge from "@/components/Merge.vue";
import EditBazaar from "@/components/EditBazaar.vue";

export default {
  name: "Bazaars",
  components: {
    Delete,
    Export,
    Merge,
    EditBazaar,
  },
  props: {
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
    deleteEntry(id) {
      this.$store.commit('deleteBazaar', id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
tbody tr {
  cursor: pointer;
  &:hover > td {
    background: teal;
  }
}
</style>
