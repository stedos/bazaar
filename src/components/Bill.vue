<template>
  <v-card
    :outlined="highlighted"
    :raised="highlighted"
    class="bill"
    :id="refId"
    @click="$refs.customer.focus()"
    :style="highlighted ? '' : 'opacity: 0.5;'"
  >
    <div class="chart-naming">
      <h3>Rechnung {{ id }}</h3>
      <span>
        <Delete
          :headline="`Rechnung '${id}' wirklich löschen?`"
          @delete="deleteBill"
        />
        <Print :ref-id="refId" />
      </span>
    </div>
    <v-simple-table>
      <thead>
        <tr>
          <th>Kundenr.</th>
          <th>Preis</th>
          <th>Entfernen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, entryId) in entries" :key="entryId">
          <td>
            <v-text-field
              :flat="true"
              :solo="true"
              :hide-details="true"
              :value="entry.customer"
              @change="
                customer => adaptEntryCustomer(entryId, customer, entry.price)
              "
              @click.stop
            />
          </td>
          <td>
            <v-text-field
              :flat="true"
              :solo="true"
              :hide-details="true"
              type="number"
              :value="entry.price.toFixed(2)"
              @change="
                price => adaptEntryCustomer(entryId, entry.customer, +price)
              "
              suffix="€"
              @click.stop
            />
          </td>
          <td @click.stop="deleteEntry(entryId, entry)">
            <v-icon>mdi-close-circle</v-icon>
          </td>
        </tr>

        <tr>
          <td>SUMME</td>
          <td colspan="2">{{ sum.toFixed(2) }}&nbsp;&euro;</td>
        </tr>

        <tr>
          <td>
            <v-text-field
              name="customer"
              ref="customer"
              label="Kundenr."
              v-model="current.customer"
              @focus="$emit('select', id)"
              @keyup.enter="$refs.price.focus()"
              @click.stop
            />
          </td>
          <td>
            <v-text-field
              name="price"
              ref="price"
              label="Preis"
              type="number"
              v-model.number="current.price"
              @focus="$emit('select', id)"
              @keyup.enter="addEntry"
              @click.stop
            />
          </td>
          <td>
            <v-icon v-show="highlighted" @click="showInfo = !showInfo"
              >mdi-information</v-icon
            >
          </td>
        </tr>
      </tbody>
    </v-simple-table>

    <span class="bill__info" v-if="highlighted && showInfo"
      >Doppelt Enter ohne Eingabe einer Kundennr. und eines Preises schließt die
      aktuelle Rechnung ab und erstellt automatisch eine neue Rechnung.</span
    >

    <v-snackbar v-model="deletedEntry.visible" :timeout="10000" bottom right>
      Eintrag wurde gelöscht (Kunde {{ deletedEntry.entry.customer }}; Betrag
      {{ deletedEntry.entry.price }}&nbsp;&euro;)
      <v-btn color="red" text @click="resetEntry">Rückgängig</v-btn>
      <v-btn color="primary" text @click="deletedEntry.visible = false"
        >Schließen</v-btn
      >
    </v-snackbar>
  </v-card>
</template>

<script>
import Delete from "@/components/Delete.vue";
import Print from "@/components/Print.vue";

const cleanData = () => ({
  customer: "",
  price: null
});

export default {
  name: "Bill",
  components: {
    Delete,
    Print
  },
  props: {
    id: String,
    highlighted: Boolean
  },
  data() {
    return {
      current: cleanData(),
      showInfo: false,
      deletedEntry: {
        visible: false,
        entry: {}
      }
    };
  },
  computed: {
    entries() {
      return this.$store.getters.getBillById(this.id);
    },
    sum() {
      return this.entries.reduce((acc, cur) => acc + cur.price, 0);
    },
    refId() {
      return `bill-${this.id}`;
    },
    hasCustomer() {
      return !!this.current.customer.length;
    },
    hasPrice() {
      return this.current.price && this.current.price >= 0;
    }
  },
  mounted() {
    this.$refs.customer.focus();
  },
  methods: {
    addEntry() {
      if (this.hasCustomer && this.hasPrice) {
        this.$store.commit("addEntryToBill", {
          billId: this.id,
          ...this.current
        });
        this.current = cleanData();
        this.$refs.customer.focus();
      } else if (!this.hasCustomer && !this.hasPrice) {
        this.$emit("finish");
      } else if (!this.hasCustomer) {
        this.$refs.customer.focus();
      }
    },
    resetEntry() {
      this.$store.commit("addEntryToBill", {
        billId: this.id,
        ...this.deletedEntry.entry
      });
      this.deletedEntry.visible = false;
    },
    deleteEntry(entryId, entry) {
      this.deletedEntry.visible = true;
      this.deletedEntry.entry = entry;
      this.$store.commit("deleteEntryFromBill", {
        billId: this.id,
        entryId: entryId
      });
    },
    deleteBill() {
      this.$store.commit("deleteBill", {
        billId: this.id
      });
    },
    adaptEntryCustomer(entryId, customer, price) {
      this.$store.commit("adaptEntryFromBill", {
        billId: this.id,
        entryId,
        entry: { customer, price }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bill {
  margin-bottom: 40px;

  &__info {
    font-size: 12px;
  }

  tr:nth-last-child(2) {
    font-weight: bold;
    td {
      font-size: 22px;
    }
  }
}
</style>
