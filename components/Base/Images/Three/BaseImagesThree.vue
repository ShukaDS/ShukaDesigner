<template>

	<div :class="classesWrap1">
		<div v-for="(image, key) in content.data.images" :class="[
			classesWrap2,
			{
				'col-start-3': (
					content.data.type === 'with-gap-1.1'
					&& !cmt(mediaType)
					&& key === 0
					&& ['xl', 'l', 'm', 's'].includes(mediaType)
					&& content.data.images.length === 2),

					'col-start-5': (
					content.data.type === 'with-gap-1.1'
					&& !cmt(mediaType)
					&& key === 0
					&& ['xl', 'l', 'm', 's'].includes(mediaType)
					&& content.data.images.length === 1)

			}
		]">
			<div :class="classesWrap3">

				<!--<div class="w-full">
          <img src="https://cs6.livemaster.ru/storage/7a/7a/c19fe7d3ccd19d823a39673e4bjn.png" class="w-full" alt="">
        </div>-->

				<!--<div class="w-full">
          <img src="https://i.pinimg.com/736x/95/db/85/95db85905c32e5ac384e185cb3f8568d.jpg" class="w-full" alt="">
        </div>-->

				<div class="relative pb-[100%]">
					<iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/xTY0SlyVfCQ"
									title="YouTube video player"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen></iframe>
				</div>

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
							r['container mx-auto grid gap-v20 grid-cols-6'] = true
					}
					break
				case 's' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['container mx-auto grid gap-v20 grid-cols-12'] = true
					}
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['container mx-auto grid gap-v20 grid-cols-12'] = true
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['container mx-auto grid gap-v20 grid-cols-12'] = true
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
							if (self.cmt('xs')) {
								switch (self.content.data.mediaTypes['xs']) {
									case 'mini-1.3A' :
										r['col-span-4'] = true
										r['col-start-2'] = true
										break
									// case 'mini-1.4A' :
									// 	r['col-span-4'] = true
									// 	r['col-start-2'] = true
									// 	break
								}
							} else {
								r['col-span-6'] = true
							}
					}
					break
				case 's' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							if (self.cmt('s')) {
								switch (self.content.data.mediaTypes['s']) {
									case 'mini-1.2A' :
										r['col-span-6'] = true
										r['col-start-4'] = true
										break
								}
							} else {
								r['col-span-4'] = true
							}
					}
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['col-span-4'] = true
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['col-span-4'] = true
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
							r['w-full'] = true
					}
					break
				case 's' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['w-full'] = true
					}
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['w-full'] = true
					}
					break
				case 'l' :
				case 'xl' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['w-full'] = true
					}
			}
			return r
		},
		classesWrap () {
			let self = this
			let r = {
				'container': true,
				'mx-auto': true,
				'grid': true,
				'gap-v20 ': true
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
			return typeof self.content.data.mediaTypes !== 'undefined'
				&& typeof self.content.data.mediaTypes[name] !== 'undefined'
		}
	}
}
</script>
