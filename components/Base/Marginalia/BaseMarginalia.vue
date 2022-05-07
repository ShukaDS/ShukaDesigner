<template>
	<!--	<div class="container">-->
	<!--		<div :class="classesWrap">-->
	<!--			<div :class="classesText" v-html="content.data.text"></div>-->
	<!--		</div>-->
	<!--	</div>-->


	<div :class="classesWrap1">
		<div :class="classesWrap2">
			<div :class="classesWrap3">
				<img v-if="content.data.images" class="w-full" :src="content.data.images[0].src" alt="">
				<p :class="classesText" v-if="content.data.text" v-html="content.data.text"></p>
			</div>
		</div>
	</div>


</template>

<script>
import useGlobalMedia from '../../../composables/useGlobalMedia'

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
					r['container mx-auto grid grid-cols-6 gap-v20'] = true
					break
				case 's' :
				case 'm' :
				case 'l' :
				case 'xl' :
					r['container mx-auto grid grid-cols-12 gap-v20'] = true
			}
			return r
		},
		classesWrap2 () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					r['col-span-4 col-start-2 flex flex-col'] = true
					break
				case 's' :
					if (self.content.data.type === 'right') {
						r['col-span-3 col-start-10 flex flex-col'] = true
					}
					if (self.content.data.type === 'left') {
						r['col-span-3 flex flex-col'] = true
					}
					break
				case 'm' :
				case 'l' :
				case 'xl' :
					if (self.content.data.type === 'right') {
						r['col-span-2 col-start-11 flex flex-col'] = true
					}
					if (self.content.data.type === 'left') {
						r['col-span-2 flex flex-col'] = true
					}
			}
			return r
		},
		classesWrap3 () {
			let r = {}
			return r
		},
		classesText () {
			let self = this
			let r = {
				'text-gray-500 mt-2': true
			}

			switch (self.mediaType) {
				case 'xs' :
				case 's' :
				case 'm' :
					r['text-base'] = true
					break
				case 'l' :
				case 'xl' :
					r['text-l'] = true

			}

			return r
		}
	},
	methods: {}
}
</script>
