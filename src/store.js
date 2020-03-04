import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import localforage from "localforage";
import { bazaarData } from "@/utils/utils.js";

Vue.use(Vuex);

const vuexPersist = new VuexPersistence({
  storage: localforage,
  reducer: state => ({ bazaars: state.bazaars }),
  asyncStorage: true
});

const store = new Vuex.Store({
  state: {
    bazaars: {},
    selected: null
  },
  getters: {
    // common
    bazaar: state => state.bazaars[state.selected] || { bills: {} },
    hasBazaar: state => bazaarId => !!state.bazaars[bazaarId],

    // all bazaars
    bazaarsAsList: state =>
      Object.values(state.bazaars).sort(
        (a, b) => Date.parse(b.date) - Date.parse(a.date)
      ),

    // bills (single bazaar)
    billIds: (_, getters) => Object.keys(getters.bazaar.bills),
    getBillById: (_, getters) => billId => getters.bazaar.bills[billId],
    sum: (_, getters) =>
      Object.values(getters.bazaar.bills)
        .flat()
        .reduce((acc, cur) => acc + cur.price, 0),
    amount: (_, getters) => Object.values(getters.bazaar.bills).flat().length,
    customers: (_, getters) => {
      const customerMap = Object.values(getters.bazaar.bills)
        .flat()
        .reduce(
          (acc, cur) => ({
            ...acc,
            [cur.customer]: acc[cur.customer]
              ? {
                  amount: ++acc[cur.customer].amount,
                  price: acc[cur.customer].price + cur.price
                }
              : { price: cur.price, amount: 1 }
          }),
          {}
        );

      return Object.keys(customerMap)
        .map(customer => ({
          id: customer,
          price: customerMap[customer].price,
          amount: customerMap[customer].amount
        }))
        .sort((a, b) => a.id.localeCompare(b.id, undefined, {numberic: true}));
    }
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    // Bazaar
    createBazaar(state, bazaar) {
      state.bazaars = {
        ...state.bazaars,
        [bazaar.id]: bazaar
      };
    },
    editBazaar(state, { bazaarId, name }) {
      const bazaar = state.bazaars[bazaarId];

      bazaar.name = name;

      state.bazaars = { ...state.bazaars, [bazaarId]: bazaar };
    },
    deleteBazaar(state, bazaarId) {
      Vue.delete(state.bazaars, bazaarId);
    },
    selectBazaar(state, bazaarId) {
      state.selected = bazaarId;
    },

    // Bills
    addBill(state, bazaarId) {
      const bazaar = state.bazaars[bazaarId || state.selected];
      // date: new Date().toLocaleString('de') // TODO date could be added to bill
      bazaar.bills = {
        ...bazaar.bills,
        [++bazaar.lastBillId]: []
      };

      state.bazaars = {
        ...state.bazaars,
        [bazaarId || state.selected]: bazaar
      };
    },
    addEntryToBill(state, { billId, customer, price }) {
      const bazaar = state.bazaars[state.selected];

      bazaar.bills = {
        ...bazaar.bills,
        [billId]: [...bazaar.bills[billId], { customer, price }]
      };

      state.bazaars = { ...state.bazaars, [state.selected]: bazaar };
    },
    adaptEntryFromBill(state, { billId, entryId, entry }) {
      const bazaar = state.bazaars[state.selected];

      bazaar.bills = {
        ...bazaar.bills,
        [billId]: bazaar.bills[billId].map((existingEntry, i) =>
          i === entryId ? entry : existingEntry
        )
      };

      state.bazaars = { ...state.bazaars, [state.selected]: bazaar };
    },
    deleteEntryFromBill(state, { billId, entryId }) {
      const bazaar = state.bazaars[state.selected];

      bazaar.bills = {
        ...bazaar.bills,
        [billId]: bazaar.bills[billId].filter((el, i) => i !== entryId)
      };

      state.bazaars = { ...state.bazaars, [state.selected]: bazaar };
    },
    deleteBill(state, { billId }) {
      const bazaar = state.bazaars[state.selected];

      delete bazaar.bills[billId];

      state.bazaars = { ...state.bazaars, [state.selected]: bazaar };
    },

    addBillsToBazaar(state, { id, bills, idAddon }) {
      const bazaar = state.bazaars[id];

      const newBills = Object.keys(bills).reduce(
        (acc, cur) => ({
          ...acc,
          [`${cur} (${idAddon})`]: bills[cur]
        }),
        {}
      );

      bazaar.bills = { ...newBills, ...bazaar.bills };

      state.bazaars = { ...state.bazaars, [id]: bazaar };
    }
  },
  actions: {
    create({ commit }, name) {
      const bazaar = { ...bazaarData(), name };

      commit("createBazaar", bazaar);

      return bazaar;
    },
    merge({ state, dispatch, commit }, { name, bazaars }) {
      dispatch("create", name).then(bazaar => {
        bazaars.forEach(bazaarId => {
          commit("addBillsToBazaar", {
            id: bazaar.id,
            idAddon: bazaarId,
            bills: state.bazaars[bazaarId].bills
          });
        });
      });
    }
  },
  plugins: [vuexPersist.plugin]
});

export default store;
