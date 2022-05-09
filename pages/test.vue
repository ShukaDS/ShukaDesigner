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

			/>
		</div>


	</div>
</template>

<script>
import { useAsyncData } from 'nuxt/app'
import AppRow from '../components/Base/Row/BaseRow'

export default {
	data () {
		return {
			show: false
		}
	},
	components: {
		AppRow
	},
	async setup () {
		const items = await useAsyncData(
			'mountains',
			() => $fetch('https://haton.ru/custom/t1/captions.json')
		)
	}
}
</script>
