<template>
	<div>

<!--		<pre>{{ items }}</pre>-->

		<div v-for="item in items" class="w-full relative grid grid-rows-1">

			<BaseRowqwe
							:background-color="item.bg"
							:margin-top="item.mt"
							:margin-bottom="item.mb"
							:padding-top="item.pt"
							:padding-bottom="item.pb"
							:content="item.contents"
							:data="item.data"
			></BaseRowqwe>

		</div>

		<!--		<BuilderRow type="create" :item="items[0]"></BuilderRow>-->

	</div>
</template>

<script>
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'

export default {
	components: {},
	async setup () {
		const items = ref([])

		const response = await fetch('https://z.shuka.design/api/work/1')
		const data = await response.json()
		console.log(data)

		items.value = data.items
		// console.log(data.value.items)
		// items.value = data.value.items
		// console.log(data)
		// for (let i in data.value) {
		// 	console.log(data.value[i], i)
		// 	items.value.push(data.value[i])
		// }
		console.log(items)
		return {
			items
		}
	}
}
</script>
