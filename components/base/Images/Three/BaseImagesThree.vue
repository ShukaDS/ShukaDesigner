<template>

	<div :class="classesWrap">

		<img v-for="(image, key) in content.data.images"
				 :src="image.src"
				 :alt="image.alt"
				 :class="[{
					 'sm:col-start-3': content.data.images.length === 2 && key === 0,
					 'sm:col-start-5': content.data.images.length === 1 && key === 0,
					 },
					 classesImage
					 ]">
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
		classesWrap () {
			let self = this
			let r = {
				'container': true,
				'mx-auto': true,
				'grid': true,
				'gap-5 ': true
			}
			switch (self.mediaType) {
				case 'xs' :
					if (self.cmt('xs')) {
					} else {
						r['grid-cols-6'] = true
					}
					break
				case 's' :
					if (self.cmt('s')) {
					} else {
						r['grid-cols-12'] = true
					}
					break
				case 'm' :
					if (self.cmt('m')) {
					} else {
						r['grid-cols-12'] = true
					}
					break
				case 'l' :
				case 'xl' :
					if (self.cmt('l') || self.cmt('xl')) {
					} else {
						r['grid-cols-12'] = true
					}
			}
			return r
		},
		classesImage () {
			let self = this
			let result = {
				'w-full': true,
				'col-span-12': true,
				'sm:col-span-4': true
			}
			switch (self.mediaType) {
				case 'xs' :
					if (self.cmt('xs')) {
						switch (self.content.data.mediaTypes.xs) {
							case 'mini-1.3A' :
								result['col-span-12'] = false
								result['col-span-4'] = true
								result['col-start-2'] = true
								break
						}
					}
					break
				case 's' :
					if (self.cmt('s')) {
						switch (self.content.data.mediaTypes.sm) {
							case 'mini-1.2A' :
								result['sm:col-span-12'] = true
								result['sm:col-span-6'] = true
								result['sm:col-start-4'] = true
								break
						}
					}
					break
				case 'm' :
					if (self.cmt('m')) {
						switch (self.content.data.mediaTypes.xs) {
							case 'mini-1.3A' :
								result['col-span-12'] = false
								result['col-span-4'] = true
								result['col-start-2'] = true
								break
						}
					}
					break
				case 'l' :
				case 'xl' :
					if (self.cmt('l')) {
						switch (self.content.data.mediaTypes.xs) {
							case 'mini-1.3A' :
								result['col-span-12'] = false
								result['col-span-4'] = true
								result['col-start-2'] = true
								break
						}
					}
			}
			return result
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
