<template>
	<!--	<div class="container">-->
	<!--		<div :class="classesWrap">-->
	<!--			<div :class="classesText" v-html="content.data.text"></div>-->
	<!--		</div>-->
	<!--	</div>-->


	<div :class="classesWrap1">
		<div :class="classesWrap2">
			<div :class="classesWrap3">

				<!--<div class="w-full">
          <img src="https://cs6.livemaster.ru/storage/7a/7a/c19fe7d3ccd19d823a39673e4bjn.png" class="w-full" alt="">
        </div>-->

				<!--<div class="w-full">
          <img src="https://i.pinimg.com/736x/95/db/85/95db85905c32e5ac384e185cb3f8568d.jpg" class="w-full" alt="">
        </div>-->

				<!--<div class="relative pb-[100%]">
          <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/xTY0SlyVfCQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>-->

				<div class="relative pb-[100%]">
<!--					<iframe class="absolute top-0 left-0 w-full h-full"-->
<!--									src="https://player.vimeo.com/video/146066786?h=9d352f1bc4&title=0&byline=0"-->
<!--									allow="autoplay; fullscreen; picture-in-picture" webkitallowfullscreen mozallowfullscreen-->
<!--									allowfullscreen></iframe>-->
					<BaseContentDefault></BaseContentDefault>
				</div>

				<!--<div class="relative pb-[100%]">
          <iframe class="absolute top-0 left-0 w-full h-full" loading="lazy" title="1" src="https://player.vimeo.com/video/612734414?quality=1080p&amp;20badge=0&amp;autopause=0&amp;background=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen" allowfullscreen="" data-ready="true"></iframe>
        </div>-->

				<!--<img v-if="content.data.images" class="w-full" :src="content.data.images[0].src" alt="">
				<p :class="classesText" v-if="content.data.text" v-html="content.data.text"></p>-->
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
