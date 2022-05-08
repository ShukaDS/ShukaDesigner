<template>

	<div :class="classesWrap1">
		<div :class="classesWrapM" :style="stylesWrapM">
			<div class="mb-2" v-if="content.data.marginalia.images">
				<img class="w-full" :src="content.data.marginalia.images[0].src" alt="">
			</div>
			<p class="text-gray-500 text-sm" v-if="content.data.marginalia.text" v-html="content.data.marginalia.text"></p>
		</div>
		<div :class="classesWrapC" :style="stylesWrapC">
			<img :src="content.data.image.src" :alt="content.data.image.alt" class="w-full">
		</div>
	</div>

</template>

<script>
import useGlobalMedia from '../../../../../../../composables/useGlobalMedia'

export default {
	layout: false,
	props: {
		content: {
			type: Object,
			required: true
		}
	},
	setup () {
		const { windowWidth, mediaType, oneColumnWidth, oneColumnWidthWithoutGap } = useGlobalMedia()
		return { windowWidth, mediaType, oneColumnWidth, oneColumnWidthWithoutGap }
	},
	computed: {
		classesWrap1 () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					r['flex justify-between flex-col relative'] = true
					break
				case 's' :
					r['flex justify-between relative'] = true
					break
				case 'm' :
					r['flex justify-between relative'] = true
					break
				case 'l' :
				case 'xl' :
					r['flex justify-between relative'] = true
			}
			return r
		},
		classesWrapC () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					r['mt-v64'] = true
					break
				case 's' :
				case 'm' :
				case 'l' :
				case 'xl' :
					r[''] = true
			}
			return r
		},
		stylesWrapC () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					r['width'] = (self.oneColumnWidthWithoutGap * 6 + 24) + 'px'
					r['margin-left'] = 24 + 'px'
					break
				case 's' :
					r['width'] = (self.oneColumnWidth * 9 + (20 * 8) + 32 - 10) + 'px'
					break
				case 'm' :
					r['width'] = (self.oneColumnWidth * 9 + (20 * 8) + 48 - 10) + 'px'
					break
				case 'l' :
				case 'xl' :
					r['width'] = (self.oneColumnWidth * 9 + (20 * 8) + 80 - 10) + 'px'
			}
			return r
		},
		classesWrapM () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					r['flex flex-col relative'] = true
					break
				case 's' :
					r['flex flex-col relative'] = true
					break
				case 'm' :
					r['flex flex-col relative'] = true
					break
				case 'l' :
				case 'xl' :
					r['flex flex-col relative'] = true
			}
			return r
		},
		stylesWrapM () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					r['width'] = (self.oneColumnWidth * 4 + (20 * 3) + 20) + 'px'
					r['left'] = 24 + self.oneColumnWidth + 20 + 'px'
					break
				case 's' :
					r['width'] = (self.oneColumnWidth * 3 + 20 + 20) + 'px'
					r['left'] = 32 + 'px'
					break
				case 'm' :
					r['width'] = (self.oneColumnWidth * 2 + 20) + 'px'
					r['left'] = 48 + 'px'
					break
				case 'l' :
				case 'xl' :
					r['width'] = (self.oneColumnWidth * 2 + 20) + 'px'
					r['left'] = 80 + 'px'
			}
			return r
		}
	},
	methods: {}
}
</script>
