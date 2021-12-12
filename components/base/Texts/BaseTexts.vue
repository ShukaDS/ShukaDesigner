<template>
	<div class="container">
		<div :class="classesWrap">
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
		},
	},
	setup () {
		const { windowWidth, mediaType } = useGlobalMedia()

		return { windowWidth, mediaType }
	},
	computed: {
		classesWrap () {
			return {
				'grid': true,
				'grid-cols-12': true,
				'gap-5': true
			}
		},
		classesText () {
			let self = this
			let r = {
				'text-xl': true,
				'text-gray-500': true,
				'grid': true,
				'gap-5': true
			}

			switch (self.mediaType) {
				case 'xs' :
					if(self.content.data.type === 'right'){
						r['col-span-5'] = true
						r['col-start-8'] = true
					}

					if(self.content.data.type === 'left'){
						r['col-span-5'] = true
					}

					if(self.content.data.type === 'center'){
						r['col-span-6'] = true
						r['col-start-4'] = true
						r['text-center'] = true
					}

					break
				case 's' :
					if(self.content.data.type === 'right'){
						r['col-span-5'] = true
						r['col-start-8'] = true
					}

					if(self.content.data.type === 'left'){
						r['col-span-5'] = true
					}

					if(self.content.data.type === 'center'){
						r['col-span-6'] = true
						r['col-start-4'] = true
						r['text-center'] = true
					}

					break
				case 'm' :
					if(self.content.data.type === 'right'){
						r['col-span-5'] = true
						r['col-start-8'] = true
					}

					if(self.content.data.type === 'left'){
						r['col-span-5'] = true
					}

					if(self.content.data.type === 'center'){
						r['col-span-6'] = true
						r['col-start-4'] = true
						r['text-center'] = true
					}

					break
				case 'l' :
				case 'xl' :
					if(self.content.data.type === 'right'){
						r['col-span-5'] = true
						r['col-start-8'] = true
					}

					if(self.content.data.type === 'left'){
						r['col-span-5'] = true
					}

					if(self.content.data.type === 'center'){
						r['col-span-6'] = true
						r['col-start-4'] = true
						r['text-center'] = true
					}
			}

			return r
		}
	},
	methods: {}
}
</script>
