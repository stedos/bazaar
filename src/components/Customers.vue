<template>
	<v-card outlined raised class="customers" id="invoice">
		<div class="chart-naming">
			<h2>Abrechnung</h2>
			<span>
				<Print ref-id="invoice" />
			</span>
		</div>
		<v-simple-table>
			<thead>
				<tr>
					<th>Nr.</th>
					<th>Artikel</th>
					<th>Brutto</th>
					<th>Abzug {{reverseTax * 100}}%</th>
					<th>Netto</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="customer in customers" :key="customer.id">
					<td>{{ customer.id }}</td>
					<td>{{ customer.amount }}</td>
					<td>{{ clean(customer.price) }}&nbsp;&euro;</td>
					<td>{{ clean(customer.price, reverseTax) }}&nbsp;&euro;</td>
					<td>{{ clean(customer.price, tax) }}&nbsp;&euro;</td>
				</tr>
				<tr>
					<td>SUMME</td>
					<td>{{ amountSum }}</td>
					<td>{{ clean(sum) }}&nbsp;&euro;</td>
					<td>{{ clean(sum, reverseTax) }}&nbsp;&euro;</td>
					<td>{{ clean(sum, tax) }}&nbsp;&euro;</td>
				</tr>
			</tbody>
		</v-simple-table>
	</v-card>
</template>

<script>
import Print from "@/components/Print.vue";

export default {
	name: "Customers",
	components: {
		Print
	},
	props: {
		tax: {
			type: Number,
			default: 0.9
		}
	},
	computed: {
		reverseTax() {
			return -(100 - this.tax * 100) / 100;
		},
		customers() {
			return this.$store.getters.customers;
		},
		sum() {
			return this.$store.getters.sum;
		},
		amountSum() {
			return this.$store.getters.amount;
		}
	},
	methods: {
		clean(price, tax = 1) {
			return (price * tax).toFixed(2);
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.customers {
	padding: 20px;
	th:last-child,
	td:last-child {
		text-align: right;
	}
	tr:last-child {
		font-weight: bold;
	}
	th {
		word-break: break-all;
	}
}
</style>