<template>
	<div :class="classesWrap">
		<div v-for="(image, key) in content.data.images"
				 :class="[classesImage]">
			<img :src="image.src"
					 :alt="image.alt"
					 class="w-full">
		</div>

	</div>
</template>

<script>
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
				'grid grid-flow-col': true
			}

			if (typeof self.content.data.type !== 'undefined') {

				switch (self.content.data.type){
					case 'without-gap-2.1' :
						break

					case 'with-gap-1.1' :
						result['gap-5'] = true
						break

					case 'col-12-with-gap-3.1' :
						result['gap-5'] = true
						result['mx-auto'] = true
						result['container'] = true
						result['grid-cols-12'] = true
						break


				}

			} else {

			}

			/*
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
			*/

			return result
		},
		classesImage () {
			let self = this
			let result = {
				// 'w-full': true
			}

			if (typeof self.content.data.type !== 'undefined') {

				switch (self.content.data.type){
					case 'without-gap-2.1' :
						break

					case 'with-gap-1.1' :

						break

					case 'col-12-with-gap-3.1' :
						result['col-span-6'] = true
						break


				}

			} else {

			}



			return result
		}
	}
}
</script>
