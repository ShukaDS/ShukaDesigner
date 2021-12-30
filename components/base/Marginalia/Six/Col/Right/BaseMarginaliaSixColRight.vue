<template>

	<div :class="classesWrap1">
		<div :class="classesWrapC">
			<img :src="content.data.image.src" :alt="content.data.image.alt" class="w-full">
		</div>
		<div :class="classesWrapM">
			<div class="mb-2" v-if="content.data.marginalia.images">
				<img class="w-full" :src="content.data.marginalia.images[0].src" alt="">
			</div>
			<p class="text-gray-500 text-sm" v-if="content.data.marginalia.text" v-html="content.data.marginalia.text"></p>
		</div>
	</div>

</template>

<script>
import useGlobalMedia from '../../../../../../composables/useGlobalMedia'

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
					r['col-span-6 mb-v64'] = true
					break
				case 's' :
				case 'm' :
				case 'l' :
				case 'xl' :
					r['col-span-6'] = true
			}
			return r
		},
		classesWrapM () {
			let self = this

			let r = {}

			switch (self.mediaType) {
				case 'xs' :
					r['col-span-4 col-start-2 flex flex-col'] = true

					break
				case 's' :
					r['col-span-3 col-start-10 flex flex-col'] = true

					break
				case 'm' :
				case 'l' :
				case 'xl' :
					r['col-span-2 col-start-11 flex flex-col'] = true
			}


			//
			return r
		}
	},
	methods: {}
}
</script>
