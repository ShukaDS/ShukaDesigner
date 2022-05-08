<template>
	<div :class="classesWrap1">
		<div :class="classesWrap2" :style="stylesWrap2">
			<div :class="classesWrap3">

				<div class="w-full">
					<img src="https://cs6.livemaster.ru/storage/7a/7a/c19fe7d3ccd19d823a39673e4bjn.png" class="w-full" alt="">
				</div>

				<!--<div class="w-full">
          <img src="https://i.pinimg.com/736x/95/db/85/95db85905c32e5ac384e185cb3f8568d.jpg" class="w-full" alt="">
        </div>-->

				<!--<div class="relative pb-[100%]">
          <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/xTY0SlyVfCQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>-->

				<!--<div class="relative pb-[100%]">
          <iframe class="absolute top-0 left-0 w-full h-full" src="https://player.vimeo.com/video/146066786?h=9d352f1bc4&title=0&byline=0" allow="autoplay; fullscreen; picture-in-picture" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>-->

				<!--<div class="relative pb-[100%]">
          <iframe class="absolute top-0 left-0 w-full h-full" loading="lazy" title="1" src="https://player.vimeo.com/video/612734414?quality=1080p&amp;20badge=0&amp;autopause=0&amp;background=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen" allowfullscreen="" data-ready="true"></iframe>
        </div>-->

				<!--<img :src="image.src" :alt="image.alt" class="w-full">-->

			</div>
		</div>
	</div>
</template>

<script>
import useGlobalMedia from '../../../../composables/useGlobalMedia'

export default {
	layout: false,
	setup () {
		const { windowWidth, mediaType, oneColumnWidth, oneColumnWidthWithoutGap } = useGlobalMedia()
		return { windowWidth, mediaType, oneColumnWidth, oneColumnWidthWithoutGap }
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
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '10-col-3.1' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '8-col-4.1' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '6-col-left-5' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '6-col-right-6' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '6-col-center-7' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '6-col-full-left-8' :
							r['grid grid-cols-2 gap-v20'] = true
							break
						case '6-col-full-right-9' :
							r['grid grid-cols-2 gap-v20'] = true
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
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '10-col-3.1' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '8-col-4.1' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '6-col-left-5' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '6-col-right-6' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '6-col-center-7' :
							r['container mx-auto grid grid-cols-12 gap-v20'] = true
							break
						case '6-col-full-left-8' :
							r['grid grid-cols-2 gap-v20'] = true
							break
						case '6-col-full-right-9' :
							r['grid grid-cols-2 gap-v20'] = true
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
		},
		stylesWrap2 () {
			let self = this
			let r = {}
			switch (self.mediaType) {
				case 'xs' :
					switch (self.content.data.type) {
						case '9-col-full-left-10.1' :
						case '9-col-full-right-11.1' :
							r['width'] = (self.oneColumnWidthWithoutGap * 6 + 24) + 'px'
							r['margin-left'] = 24 + 'px'
							break
					}
					break
				case 's' :
					switch (self.content.data.type) {
						case '9-col-full-left-10.1' :
						case '9-col-full-right-11.1' :
							r['width'] = (self.oneColumnWidth * 9 + (20 * 8) + 32) + 'px'
							break
					}
					break
				case 'm' :
					switch (self.content.data.type) {
						case '9-col-full-left-10.1' :
						case '9-col-full-right-11.1' :
							r['width'] = (self.oneColumnWidth * 9 + (20 * 8) + 48) + 'px'
							break
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case '9-col-full-left-10.1' :
						case '9-col-full-right-11.1' :
							r['width'] = (self.oneColumnWidth * 9 + (20 * 8) + 80) + 'px'
							break
					}
			}
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
