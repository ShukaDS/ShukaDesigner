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
		const { data, pending, error, refresh } = await useFetch(
			'items',
			() => $fetch('https://haton.ru/custom/t1/captions.json')
		)
		console.log(data)
		for(let i in data){
			//Object.assign({}, obj);
			console.log(data[i], i)
			items.value.push(Object.assign({backgroundColor: '#ffffff'}, data[i]))
		}

		return {
			items
		}
	}
}
</script>
