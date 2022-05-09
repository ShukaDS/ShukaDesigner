<template>
	<div>

		<pre>{{ data }}</pre>

		<AppRow/>

		<!--		<div v-for="item in data" key="items" class="w-full relative grid grid-rows-1">-->

		<!--				{{ item }}-->

		<!--		</div>-->


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
		const { data, pending, error, refresh } = await useAsyncData(
			'mountains',
			() => $fetch('https://haton.ru/custom/t1/captions.json')
		)
	}
}
</script>
