<template>

	{{ mediaType }}

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
			let result = {
				'container': true,
				'mx-auto': true,
				'grid': true,
				'gap-5 ': true
			}
			if (self.mediaType === 'xs') {
				if (typeof self.content.data.mediaTypes !== 'undefined'
					&& typeof self.content.data.mediaTypes.xs !== 'undefined') {
				} else {
					result['grid-cols-6'] = true
				}
			}
			if (self.mediaType === 'sm') {
				if (typeof self.content.data.mediaTypes !== 'undefined'
					&& typeof self.content.data.mediaTypes.sm !== 'undefined') {
				} else {
					result['grid-cols-12'] = true
				}
			}
			if (self.mediaType === 'md') {
				if (typeof self.content.data.mediaTypes !== 'undefined'
					&& typeof self.content.data.mediaTypes.md !== 'undefined') {
				} else {
					result['grid-cols-12'] = true
				}
			}
			if (self.mediaType === 'xl') {
				if (typeof self.content.data.mediaTypes !== 'undefined'
					&& typeof self.content.data.mediaTypes.xl !== 'undefined') {
				} else {
					result['grid-cols-12'] = true
				}
			}
			return result
		},
		classesImage () {
			let self = this
			let result = {
				'w-full': true,
				'col-span-12': true,
				'sm:col-span-4': true,
			}
			if (self.mediaType === 'xs') {
				if (typeof self.content.data.mediaTypes !== 'undefined') {
					if (typeof self.content.data.mediaTypes.xs !== 'undefined') {
						switch (self.content.data.mediaTypes.xs) {
							case 'mini-1.3A' :
								result['col-span-12'] = false
								result['col-span-4'] = true
								result['col-start-2'] = true
								break
						}
					}
				} else {
				}
			}
			if (self.mediaType === 'sm') {
				if (typeof self.content.data.mediaTypes.sm !== 'undefined') {
					switch (self.content.data.mediaTypes.sm) {
						case 'mini-1.2A' :
							result['sm:col-span-12'] = true
							result['sm:col-span-6'] = true
							result['sm:col-start-4'] = true
							break
					}
				}
			}
			if (self.mediaType === 'md') {
				if (typeof self.content.data.mediaTypes !== 'undefined') {
					if (typeof self.content.data.mediaTypes.md !== 'undefined') {
						switch (self.content.data.mediaTypes.xs) {
							case 'mini-1.3A' :
								result['col-span-12'] = false
								result['col-span-4'] = true
								result['col-start-2'] = true
								break
						}
					}
				} else {
				}
			}
			if (self.mediaType === 'xl') {
				if (typeof self.content.data.mediaTypes.xl !== 'undefined') {
					if (typeof self.content.data.mediaTypes.xs !== 'undefined') {
						switch (self.content.data.mediaTypes.xs) {
							case 'mini-1.3A' :
								result['col-span-12'] = false
								result['col-span-4'] = true
								result['col-start-2'] = true
								break
						}
					}
					if (typeof self.content.data.mediaTypes.sm !== 'undefined') {
						switch (self.content.data.mediaTypes.sm) {
							case 'mini-1.2A' :
								result['sm:col-span-12'] = true
								result['sm:col-span-6'] = true
								result['sm:col-start-4'] = true
								break
						}
					}
				} else {
				}
			}
			return result
		}
	}
}
</script>
