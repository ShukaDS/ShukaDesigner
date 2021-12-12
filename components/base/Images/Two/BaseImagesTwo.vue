<template>
	<div :class="classesWrap1">
		<div v-for="(image, key) in content.data.images" :class="[
			classesWrap2,
			{
				'col-start-2': (content.data.type === '10-col-5.1' && key === 0) ||
				(content.data.type === '10-col-without-gap-6.1' && key === 0),

				'col-start-3': key === 0 && (
					(content.data.type === '8-col-7.1') ||
					(content.data.type === '8-col-without-gap-8.1')
				)

			}
		]">
			<div :class="classesWrap3">
				<img :src="image.src" :alt="image.alt" class="w-full">

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
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r[''] = true
							break
						case 'without-gap-2.1' :
							r[''] = true
							break
						case 'col-12-with-gap-3.1' :
							r[''] = true
							break
						case 'without-gap-4.1' :
							r[''] = true
							break
						case '10-col-5.1' :
							r[''] = true
							break
						case '10-col-without-gap-6.1' :
							r[''] = true
							break
						case '8-col-7.1' :
							r[''] = true
							break
						case '8-col-without-gap-8.1' :
							r[''] = true
							break
					}
					break
				case 's' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['grid grid-flow-col gap-5'] = true
							break
						case 'without-gap-2.1' :
							r['grid grid-flow-col'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['container mx-auto grid gap-5 grid-cols-12'] = true
							break
						case 'without-gap-4.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '10-col-5.1' :
							r['container mx-auto gap-5 grid grid-cols-12'] = true
							break
						case '10-col-without-gap-6.1' :
							r['container mx-auto gap-5 grid grid-cols-12'] = true
							break
						case '8-col-7.1' :
							r['container mx-auto gap-5 grid grid-cols-12'] = true
							break
						case '8-col-without-gap-8.1' :
							r['container mx-auto gap-5 grid grid-cols-12'] = true
							break
					}
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							// если есть медиа настройки то делаем то то
							// если нет -> r['grid grid-flow-col gap-5'] = true
							r['grid grid-flow-col gap-5'] = true
							break
						case 'without-gap-2.1' :
							r['grid grid-flow-col'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['container mx-auto grid gap-5 grid-cols-12'] = true
							break
						case 'without-gap-4.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '10-col-5.1' :
							r['container mx-auto gap-5 grid grid-cols-12'] = true
							break
						case '10-col-without-gap-6.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '8-col-7.1' :
							r['container mx-auto gap-5 grid grid-cols-12'] = true
							break
						case '8-col-without-gap-8.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							// если есть медиа настройки то делаем то то
							// если нет -> r['grid grid-flow-col gap-5'] = true
							r['grid grid-flow-col gap-5'] = true
							break
						case 'without-gap-2.1' :
							r['grid grid-flow-col'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['container mx-auto grid gap-5 grid-cols-12'] = true
							break
						case 'without-gap-4.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '10-col-5.1' :
							r['container mx-auto gap-5 grid grid-cols-12'] = true
							break
						case '10-col-without-gap-6.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '8-col-7.1' :
							r['container mx-auto gap-5 grid grid-cols-12'] = true
							break
						case '8-col-without-gap-8.1' :
							r['container mx-auto grid grid-cols-12'] = true
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
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r[''] = true
							break
						case 'without-gap-2.1' :
							r[''] = true
							break
						case 'col-12-with-gap-3.1' :
							r[''] = true
							break
						case 'without-gap-4.1' :
							r[''] = true
							break
						case '10-col-5.1' :
							r[''] = true
							break
						case '10-col-without-gap-6.1' :
							r[''] = true
							break
						case '8-col-7.1' :
							r[''] = true
							break
						case '8-col-without-gap-8.1' :
							r[''] = true
							break
					}
					break
				case 's' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['w-full'] = true
							break
						case 'without-gap-2.1' :
							r['w-full'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['col-span-6'] = true
							break
						case 'without-gap-4.1' :
							r['col-span-6'] = true
							break
						case '10-col-5.1' :
							r['col-span-5'] = true
							break
						case '10-col-without-gap-6.1' :
							r[''] = true
							break
						case '8-col-7.1' :
							r[''] = true
							break
						case '8-col-without-gap-8.1' :
							r[''] = true
							break
					}
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['w-full'] = true
							break
						case 'without-gap-2.1' :
							r['w-full'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['col-span-6'] = true
							break
						case 'without-gap-4.1' :
							r['col-span-6'] = true
							break
						case '10-col-5.1' :
							r['col-span-5'] = true
							break
						case '10-col-without-gap-6.1' :
							r['col-span-5'] = true
							break
						case '8-col-7.1' :
							r['col-span-4'] = true
							break
						case '8-col-without-gap-8.1' :
							r['col-span-4'] = true
							break
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['w-full'] = true
							break
						case 'without-gap-2.1' :
							r['w-full'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['col-span-6'] = true
							break
						case 'without-gap-4.1' :
							r['col-span-6'] = true
							break
						case '10-col-5.1' :
							r['col-span-5'] = true
							break
						case '10-col-without-gap-6.1' :
							r['col-span-5'] = true
							break
						case '8-col-7.1' :
							r['col-span-4'] = true
							break
						case '8-col-without-gap-8.1' :
							r['col-span-4'] = true
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
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r[''] = true
							break
						case 'without-gap-2.1' :
							r[''] = true
							break
						case 'col-12-with-gap-3.1' :
							r[''] = true
							break
						case 'without-gap-4.1' :
							r[''] = true
							break
						case '10-col-5.1' :
							r[''] = true
							break
						case '10-col-without-gap-6.1' :
							r[''] = true
							break
						case '8-col-7.1' :
							r[''] = true
							break
						case '8-col-without-gap-8.1' :
							r[''] = true
							break
					}
					break
				case 's' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r[''] = true
							break
						case 'without-gap-2.1' :
							r[''] = true
							break
						case 'col-12-with-gap-3.1' :
							r[''] = true
							break
						case 'without-gap-4.1' :
							r[''] = true
							break
						case '10-col-5.1' :
							r[''] = true
							break
						case '10-col-without-gap-6.1' :
							r[''] = true
							break
						case '8-col-7.1' :
							r[''] = true
							break
						case '8-col-without-gap-8.1' :
							r[''] = true
							break
					}
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['w-full'] = true
							break
						case 'without-gap-2.1' :
							r['w-full'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['w-full'] = true
							break
						case 'without-gap-4.1' :
							r['w-full'] = true
							break
						case '10-col-5.1' :
							r['w-full'] = true
							break
						case '10-col-without-gap-6.1' :
							r['w-full'] = true
							break
						case '8-col-7.1' :
							r['w-full'] = true
							break
						case '8-col-without-gap-8.1' :
							r['w-full'] = true
							break
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['w-full'] = true
							break
						case 'without-gap-2.1' :
							r['w-full'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['w-full'] = true
							break
						case 'without-gap-4.1' :
							r['w-full'] = true
							break
						case '10-col-5.1' :
							r['w-full'] = true
							break
						case '10-col-without-gap-6.1' :
							r['w-full'] = true
							break
						case '8-col-7.1' :
							r['w-full'] = true
							break
						case '8-col-without-gap-8.1' :
							r['w-full'] = true
							break
					}
			}
			return r
		}
	}
}
</script>
