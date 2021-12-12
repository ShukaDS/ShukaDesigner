<template>
	<div :class="classesWrap1">
		<div :class="classesWrap2">
			<div :class="classesWrap3">
				<img :src="content.data.image.src" :alt="content.data.image.alt" class="w-full">
			</div>
		</div>
	</div>
</template>

<script>
import useGlobalMedia from '../../../../composables/useGlobalMedia'

export default {
	layout: false,
	setup () {
		const { windowWidth, mediaType } = useGlobalMedia()
		return { windowWidth, mediaType }
	},
	props: {
		content: {
			type: Object,
			required: true
		}
	},
	computed: {
		classesWrap1 () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					break
				case 's' :
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'full-1.1' :
							r['w-full'] = true
							break
						case 'full-container-2.1' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '10-col-3.1' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '8-col-4.1' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '6-col-left-5' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '6-col-right-6' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '6-col-center-7' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '6-col-full-left-8' :
							r['grid grid-cols-2 gap-5'] = true
							break
						case '6-col-full-right-9' :
							r['grid grid-cols-2 gap-5'] = true
							break
						case '9-col-full-left-10.1' :
							r['flex'] = true
							break
						case '9-col-full-right-11.1' :
							r['flex justify-end'] = true
							break
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case 'full-1.1' :
							r['w-full'] = true
							break
						case 'full-container-2.1' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '10-col-3.1' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '8-col-4.1' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '6-col-left-5' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '6-col-right-6' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '6-col-center-7' :
							r['container mx-auto grid grid-cols-12 gap-5'] = true
							break
						case '6-col-full-left-8' :
							r['grid grid-cols-2 gap-5'] = true
							break
						case '6-col-full-right-9' :
							r['grid grid-cols-2 gap-5'] = true
							break
						case '9-col-full-left-10.1' :
							r['flex'] = true
							break
						case '9-col-full-right-11.1' :
							r['flex justify-end'] = true
							break
					}
			}
			return r
		},
		classesWrap2 () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					break
				case 's' :
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'full-1.1' :
							r['w-full'] = true
							break
						case 'full-container-2.1' :
							r['col-span-12'] = true
							break
						case '10-col-3.1' :
							r['col-span-10 col-start-2'] = true
							break
						case '8-col-4.1' :
							r['col-span-8 col-start-3'] = true
							break
						case '6-col-left-5' :
							r['col-span-6'] = true
							break
						case '6-col-right-6' :
							r['col-span-6 col-start-7'] = true
							break
						case '6-col-center-7' :
							r['col-span-6 col-start-4'] = true
							break
						case '6-col-full-left-8' :
							r['w-full'] = true
							break
						case '6-col-full-right-9' :
							r['col-start-2'] = true
							break
						case '9-col-full-left-10.1' :
							r['w-3/4'] = true
							break
						case '9-col-full-right-11.1' :
							r['w-3/4'] = true
							break
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case 'full-1.1' :
							r['w-full'] = true
							break
						case 'full-container-2.1' :
							r['col-span-12'] = true
							break
						case '10-col-3.1' :
							r['col-span-10 col-start-2'] = true
							break
						case '8-col-4.1' :
							r['col-span-8 col-start-3'] = true
							break
						case '6-col-left-5' :
							r['col-span-6'] = true
							break
						case '6-col-right-6' :
							r['col-span-6 col-start-7'] = true
							break
						case '6-col-center-7' :
							r['col-span-6 col-start-4'] = true
							break
						case '6-col-full-left-8' :
							r['w-full'] = true
							break
						case '6-col-full-right-9' :
							r['col-start-2'] = true
							break
						case '9-col-full-left-10.1' :
							r['w-3/4'] = true
							break
						case '9-col-full-right-11.1' :
							r['w-3/4'] = true
							break
					}
			}
			return r
		},
		classesWrap3 () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					break
				case 's' :
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'full-1.1' :
							r['w-full'] = true
							break
						case 'full-container-2.1' :
							r['w-full'] = true
							break
						case '10-col-3.1' :
							r['w-full'] = true
							break
						case '8-col-4.1' :
							r['w-full'] = true
							break
						case '6-col-left-5' :
							r['w-full'] = true
							break
						case '6-col-right-6' :
							r['w-full'] = true
							break
						case '6-col-center-7' :
							r['w-full'] = true
							break
						case '6-col-full-left-8' :
							r['w-full'] = true
							break
						case '6-col-full-right-9' :
							r['w-full'] = true
							break
						case '9-col-full-left-10.1' :
							r['w-full'] = true
							break
						case '9-col-full-right-11.1' :
							r['w-full'] = true
							break
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case 'full-1.1' :
							r['w-full'] = true
							break
						case 'full-container-2.1' :
							r['w-full'] = true
							break
						case '10-col-3.1' :
							r['w-full'] = true
							break
						case '8-col-4.1' :
							r['w-full'] = true
							break
						case '6-col-left-5' :
							r['w-full'] = true
							break
						case '6-col-right-6' :
							r['w-full'] = true
							break
						case '6-col-center-7' :
							r['w-full'] = true
							break
						case '6-col-full-left-8' :
							r['w-full'] = true
							break
						case '6-col-full-right-9' :
							r['w-full'] = true
							break
						case '9-col-full-left-10.1' :
							r['w-full'] = true
							break
						case '9-col-full-right-11.1' :
							r['w-full'] = true
							break
					}
			}
			return r
		}
	},
	methods: {
		cmt (name) {
			let self = this
			return typeof self.content.data.mediaTypes !== 'undefined' && typeof self.content.data.mediaTypes[name] !== 'undefined'
		}
	}
}
</script>
