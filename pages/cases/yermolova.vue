<template>
	<div>

		<FirstScreen
						:cover-title="meta.cover_title"
						:cover-type="meta.cover_type"
						:cover-media="meta.cover"
						:cover-ratio="meta.cover_ratio"
						:cover-dark="meta.cover_dark"
		></FirstScreen>

		<div v-for="item in items" class="w-full relative grid grid-rows-1">

			<BaseRowqwe
							:background-color="item.bg"
							:margin-top="item.mt"
							:margin-bottom="item.mb"
							:padding-top="item.pt"
							:padding-bottom="item.pb"
							:content="item.contents" :label="item.label"
							:data="item.data"
			></BaseRowqwe>

		</div>

	</div>
</template>

<script>
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'
import useGlobalMedia from '../../composables/useGlobalMedia'
import FirstScreen from '../../components/Base/Content/FirstScreen'

export default {
	components: { FirstScreen },
	async setup () {
		const items = ref([])
		const meta = ref([])
		const response = await fetch('https://z.shuka.design/api/work/9')
		const data = await response.json()
		console.log(data)
		items.value = data.items
		meta.value = data.meta
		console.log(items)
		const { windowWidth, mediaType } = useGlobalMedia()
		return {
			items, meta, windowWidth, mediaType
		}
	}
}
</script>

<style>
.gertrude {
    font-family: "Gertrude", sans-serif;
}
</style>
