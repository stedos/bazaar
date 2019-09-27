<template>
	<v-dialog v-model="dialog" max-width="600">
		<template v-slot:activator="{ on }">
			<v-btn text @click.stop v-on="on">
				<span v-if="showText" class="mr-2">Entfernen</span>
				<v-icon>mdi-delete</v-icon>
			</v-btn>
		</template>
		<v-card>
			<v-card-title class="headline">{{ headline }}</v-card-title>
			<v-card-text>Dies kann nicht Rückgängig gemacht werden.</v-card-text>
			<v-card-actions>
				<div class="flex-grow-1"></div>
				<v-btn color="green darken-1" text @click="dialog = false; $emit('keep')">Behalten!</v-btn>
				<v-btn color="red darken-1" text @click="dialog = false; $emit('delete'); $emit">Löschen!</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>

export default {
	name: "ImportExport",
	components: {
	},
	props: {
		showText: Boolean,
		headline: String,
	},
	data() {
		return {
			dialog: false,
		}
	},
	computed: {},
	methods: {}
};
</script>

<style lang="less" scoped>
</style>