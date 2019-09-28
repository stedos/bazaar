<template>
  <v-btn icon @click.stop="$htmlToPaper(refId)">
	<v-tooltip bottom>
		<template v-slot:activator="{ on }">
			<v-icon v-on="on">mdi-printer</v-icon>
		</template>
		<span>Drucken</span>
	</v-tooltip>
  </v-btn>
</template>

<script>
import Vue from "vue";

export default {
	name: "Print",
	props: {
		refId: String,
	},
};
</script>

<style lang="less" scoped>
</style>