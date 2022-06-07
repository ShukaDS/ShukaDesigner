<template>
	<div>

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

	</div>
</template>

<script>
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'
import useGlobalMedia from '../../composables/useGlobalMedia'

export default {
	components: {},
	async setup () {
		const items = ref([])
		const response = await fetch('https://z.shuka.design/api/work/12')
		const data = await response.json()
		console.log(data)
		items.value = data.items
		console.log(items)
		const { windowWidth, mediaType } = useGlobalMedia()
		return {
			items, windowWidth, mediaType
		}
	}
}
</script>

<style>
.gertrude {
    font-family: "Gertrude", sans-serif;
}
</style>
