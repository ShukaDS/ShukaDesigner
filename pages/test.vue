<template>
	<div>

		<pre>{{ items }}</pre>

		<div v-for="item in items" class="w-full relative grid grid-rows-1">

			<app-row
							:background-color="item.backgroundColor"
							:margin-top="item.marginTop"
							:margin-bottom="item.marginBottom"
							:padding-top="item.paddingTop"
							:padding-bottom="item.paddingBottom"
							:content="item.content"

			></app-row>

		</div>


	</div>
</template>

<script>
import AppRow from '../components/Base/Row/BaseRow'

export default {
	components: {
		AppRow
	},
	setup () {
		const items = ref([])

		const { data, pending, error, refresh } = useFetch(
			'https://haton.ru/custom/t1/captions.json'

		)

		console.log(data)

		for(let i in data.value){
			//Object.assign({}, obj);
			console.log(data.value[i], i)
			items.value.push(Object.assign({backgroundColor: '#ffffff'}, data.value[i]))
		}

		return {
			items
		}
	}
}
</script>
