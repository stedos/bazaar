<template>
	<v-card
		:outlined="highlighted"
		:raised="highlighted"
		class="bill"
		:id="refId"
		@click="$refs.customer.focus()"
		:style="highlighted || focused ? '' : 'opacity: 0.5;'"
	>
		<!-- TODO highlighted weiter behandeln -->
		<div class="chart-naming">
			<h3>Rechnung {{ id }}</h3>
			<span>
				<Delete :headline="`Rechnung '${id}' wirklich löschen?`" @delete="deleteBill" />
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
				<tr v-for="(entry, entryId) in bill" :key="entryId">
					<td>{{ entry.customer }}</td>
					<td>{{ entry.price.toFixed(2) }}&nbsp;&euro;</td>
					<td @click="deleteEntry(entryId)">
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
							@focus="focused = true"
							@blur="focused = false"
							@keyup.enter="$refs.price.focus()"
						/>
					</td>
					<td>
						<v-text-field
							name="price"
							ref="price"
							label="Preis"
							type="number"
							v-model.number="current.price"
							@focus="focused = true"
							@blur="focused = false"
							@keyup.enter="addEntry"
						/>
					</td>
					<td>
						<v-icon v-show="highlighted" @click="showInfo = !showInfo">mdi-information</v-icon>
					</td>
				</tr>
			</tbody>
		</v-simple-table>

		<span
			class="bill__info"
			v-if="highlighted && showInfo"
		>Doppelt Enter ohne Eingabe einer Kundennr. und eines Preises schließt die aktuelle Rechnung ab und erstellt automatisch eine neue Rechnung.</span>
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
			focused: false,
			showInfo: true
		};
	},
	computed: {
		bill() {
			return this.$store.getters.getBillById(this.id);
		},
		sum() {
			return this.bill.reduce((acc, cur) => acc + cur.price, 0);
		},
		refId() {
			return `bill-${this.id}`;
		}
	},
	methods: {
		focus() {
			console.log("focus");
		},
		addEntry() {
			if (this.current.customer.length && this.current.price >= 0) {
				this.$store.commit("addEntryToBill", {
					billId: this.id,
					...this.current
				});
			} else {
				this.finish();
			}
			this.$refs.customer.focus();
			this.reset();
		},
		deleteEntry(entryId) {
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
		reset() {
			this.current = cleanData();
		},
		finish() {
			this.$emit("finish");
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
