<template>
	<div :class="classesWrap1">
		<div :class="classesWrap2">
			<div :class="classesText" v-html="content.data.text"></div>
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
		//
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
					if (self.content.data.type === 'right') {
						r['col-span-5 col-start-2'] = true
					}
					if (self.content.data.type === 'left') {
						r['col-span-5 col-start-2'] = true
					}
					if (self.content.data.type === 'center') {
						r['col-span-6'] = true
					}
					break
				case 's' :
				case 'm' :
				case 'l' :
				case 'xl' :
					if (self.content.data.type === 'right') {
						r['col-span-5 col-start-8'] = true
					}
					if (self.content.data.type === 'left') {
						r['col-span-5'] = true
					}
					if (self.content.data.type === 'center') {
						r['col-span-6 col-start-4'] = true
					}
			}
			return r
		},
		classesText () {
			let self = this
			let r = {
				'text-gray-500': true,
				'grid': true,
				'gap-v20': true
			}
			if (self.content.data.type === 'center') {
				r['text-center'] = true
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
