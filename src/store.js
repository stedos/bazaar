import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const STORAGE_NAME = 'bills';
const STORED_BILL = JSON.parse(localStorage.getItem(STORAGE_NAME));

const store = new Vuex.Store({
	state: {
		bills: STORED_BILL || {},
		currentId: STORED_BILL ? Object.keys(STORED_BILL).length : 0,
	},
	getters: {
		billIds: state => Object.keys(state.bills),
    getBillById: state => billId => state.bills[billId],
    customers: state => {
      const customerMap = Object.values(state.bills).flat()
        .reduce((acc, cur) => ({
          ...acc,
          [cur.customer]: acc[cur.customer] ? acc[cur.customer] + cur.price : cur.price
        }), {});

      return Object.keys(customerMap)
        .map(customer => ({id: customer, price: customerMap[customer]}))
        .sort((a, b) => a.id > b.id);
    },
    sum: state => Object.values(state.bills).flat().reduce((acc, cur) => acc + cur.price, 0),
	},
	mutations: {
		addBill(state) {
			state.bills = {
				...state.bills,
				[++state.currentId]: [],
			};
		},
		addEntryToBill(state, { billId, customer, price }) {
			state.bills = {
				...state.bills,
				[billId]: [...state.bills[billId], { customer, price }],
			};
		},
		deleteEntryFromBill(state, { billId, entryId }) {
			state.bills = {
				...state.bills,
				[billId]: state.bills[billId].filter((el, i) => i !== entryId),
			};
		},
	},
	actions: {},
});

// save store automatically in storage
store.watch(state => state.bills, bills => localStorage.setItem(STORAGE_NAME, JSON.stringify(bills)));

export default store;