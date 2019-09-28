<template>
  <v-btn :text="showText" :icon="!showText" :href="href" :download="`Rechnung-${id}.json`" @click.stop>
    <span v-if="showText"  class="mr-2 d-none d-sm-flex">Download</span>
    <v-icon v-if="showText">mdi-download</v-icon>
	<v-tooltip v-else bottom>
		<template v-slot:activator="{ on }">
			<v-icon v-on="on">mdi-download</v-icon>
		</template>
		<span v-if="!showText">Download</span>
	</v-tooltip>
  </v-btn>
</template>

<script>
import Vue from "vue";

export default {
	name: "Export",
	props: {
		showText: Boolean,
		id: String,
	},
	data: () => ({
	}),
	computed: {
		href() {
			const file = new Blob([JSON.stringify(this.$store.state.bazaars[this.id])], { type: "application/json" });
			return URL.createObjectURL(file);
		}
	},
	methods: {}
};
</script>

<style lang="less" scoped>
</style>