<template>
	<div>

		<!--		<pre>{{ items }}</pre>-->

		<!--
		<div v-for="item in items" class="w-full relative grid grid-rows-1">

			<template v-if="item.editingOnly">
				<BuilderRow type="edit"></BuilderRow>
			</template>

			<BaseRow
							v-else
							:background-color="item.backgroundColor"
							:margin-top="item.marginTop"
							:margin-bottom="item.marginBottom"
							:padding-top="item.paddingTop"
							:padding-bottom="item.paddingBottom"
							:content="item.content"

			></BaseRow>

		</div>
		-->

		<BuilderRow type="create" :item="items[0]"></BuilderRow>

	</div>
</template>

<script>
import Temp from '../../temp'
export default {
	components: { Temp },
	setup () {
		const items = ref([])
		const { data, pending, error, refresh } = useFetch(
			'https://z.shuka.design/cases-data/caseSber.json'
		)
		console.log(data)
		for (let i in data.value) {
			//Object.assign({}, obj);
			console.log(data.value[i], i)
			items.value.push(Object.assign({ backgroundColor: '#ffffff' }, data.value[i]))
		}
		return {
			items
		}
	}
}
</script>
