<template>

	<div :class="classesWrap1">

		<div :class="classesWrapM">
			<div class="mb-2" v-if="content.data.marginalia.images">
				<!--				<img class="w-full" :src="content.data.marginalia.images[0].src" alt="">-->
				<BaseContentDefault></BaseContentDefault>
			</div>
			<p class="text-gray-500 text-sm" v-if="content.data.marginalia.text" v-html="content.data.marginalia.text"></p>
		</div>

		<div :class="classesWrapC">
			<div :class="classesText" v-html="content.data.text"></div>
		</div>

	</div>

</template>

<script>
import useGlobalMedia from '../../../../../composables/useGlobalMedia'

export default {
	layout: false,
	props: {
		content: {
			type: Object,
			required: true
		}
	},
	setup () {
		const { windowWidth, mediaType } = useGlobalMedia()
		return { windowWidth, mediaType }
	},
	computed: {
		classesWrap1 () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					r['container mx-auto grid grid-cols-6'] = true
					break
				case 's' :
				case 'm' :
				case 'l' :
				case 'xl' :
					r['container mx-auto grid grid-cols-12 gap-v20'] = true
			}
			return r
		},
		classesWrapC () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					r['col-span-5 col-start-2 mt-v64'] = true
					break
				case 's' :
				case 'm' :
				case 'l' :
				case 'xl' :
					r['col-span-6 col-start-7'] = true
			}
			return r
		},
		classesWrapM () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					r['col-span-4 flex flex-col col-start-2'] = true
					break
				case 's' :
					r['col-span-3 flex flex-col'] = true
					break
				case 'm' :
				case 'l' :
				case 'xl' :
					r['col-span-2 flex flex-col'] = true
			}
			return r
		},
		classesText () {
			let self = this
			let r = {
				'text-xl': true,
				'text-gray-500': true,
				'grid': true,
				'gap-v20': true
			}
			switch (self.mediaType) {
				case 'xs' :
					break
				case 's' :
					break
				case 'm' :
					break
				case 'l' :
				case 'xl' :
			}
			return r
		}
	},
	methods: {}
}
</script>
