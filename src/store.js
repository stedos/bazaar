import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const STORAGE_BAZAARS = 'bazaars';
const STORED_BAZAARS = JSON.parse(localStorage.getItem(STORAGE_BAZAARS));

const store = new Vuex.Store({
	state: {
		bazaars: STORED_BAZAARS || {},
		selected: null,
	},
	getters: {
		// common
		bazaar: state => state.bazaars[state.selected] || { bills: {} },
		hasBazaar: state => bazaarId => !!state.bazaars[bazaarId],
		
		// all bazaars
		bazaarsAsList: state => Object.values(state.bazaars),

		// bills (single bazaar)
		billIds: (_, getters) => Object.keys(getters.bazaar.bills).reverse(),
		getBillById: (_, getters) => billId => getters.bazaar.bills[billId],
		sum: (_, getters) => Object.values(getters.bazaar.bills).flat().reduce((acc, cur) => acc + cur.price, 0),
		customers: (_, getters) => {
			const customerMap = Object.values(getters.bazaar.bills).flat()
				.reduce((acc, cur) => ({
				...acc,
				[cur.customer]: acc[cur.customer] ? 
					{ price: acc[cur.customer].price + cur.price, amount: ++acc[cur.customer].amount } : 
					{ price: cur.price, amount: 1 }
				}), {});

			return Object.keys(customerMap)
				.map(customer => ({id: customer, price: customerMap[customer].price, amount: customerMap[customer].amount }))
				.sort((a, b) => a.id > b.id);
		},
	},
	mutations: {
		// Bazaar
		createBazaar(state, {id, name, date, lastBillId=0, bills={} }) {
			state.bazaars = {
				...state.bazaars,
				[id]: { id, name, date, lastBillId, bills },
			};
		},
		selectBazaar(state, bazaarId) {
			state.selected = bazaarId;
		},
		deleteBazaar(state, bazaarId) {
			Vue.delete(state.bazaars, bazaarId);
	 	},

		// Bills
		addBill(state, bazaarId) {
			const bazaar = state.bazaars[bazaarId || state.selected];
			// date: new Date().toLocaleString('de') // TODO date could be added to bill
			bazaar.bills = {
				...bazaar.bills,
				[++bazaar.lastBillId]: [],
			};

			state.bazaars = { ...state.bazaars, [state.selected]: bazaar}
		},
		addEntryToBill(state, { billId, customer, price }) {
			const bazaar = state.bazaars[state.selected];

			bazaar.bills = {
				...bazaar.bills,
				[billId]: [...bazaar.bills[billId], { customer, price }],
			};

			state.bazaars = { ...state.bazaars, [state.selected]: bazaar}
		},
		deleteEntryFromBill(state, { billId, entryId }) {
			const bazaar = state.bazaars[state.selected];

			bazaar.bills = {
				...bazaar.bills,
				[billId]: bazaar.bills[billId].filter((el, i) => i !== entryId),
			};

			state.bazaars = { ...state.bazaars, [state.selected]: bazaar}
		},
		deleteBill(state, { billId }) {
			const bazaar = state.bazaars[state.selected];

			delete bazaar.bills[billId];

			state.bazaars = { ...state.bazaars, [state.selected]: bazaar}
		},

		addBillsToBazaar(state, {id, bills, idAddon}) {
			const bazaar = state.bazaars[id];

			const newBills = Object.keys(bills).reduce((acc, cur) => ({
				...acc,
				[`${cur} (${idAddon})`]: bills[cur]
			}), {});

			bazaar.bills = { ...newBills, ...bazaar.bills };

			state.bazaars = { ...state.bazaars, [id]: bazaar}
		},
	},
	actions: {
		merge({state, commit}, {name, bazaars}) {
			const id = '' + Math.floor(Math.random() * Math.pow(10, 6));

			commit('createBazaar', { name, id, date: new Date().toUTCString() });

			bazaars.forEach(bazaarId => {
				commit('addBillsToBazaar', {
					id, 
					idAddon: bazaarId,
					bills: state.bazaars[bazaarId].bills
				});
			});
		}
	},
});

// save store automatically in storage
store.watch(state => state.bazaars, bazaars => localStorage.setItem(STORAGE_BAZAARS, JSON.stringify(bazaars)));

export default store;