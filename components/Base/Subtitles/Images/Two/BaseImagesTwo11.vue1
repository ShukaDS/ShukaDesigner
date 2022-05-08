<template>

	<div :class="classesWrap1">
		<div v-for="(image, key) in content.data.images" :class="[
			classesWrap2,
			{
				'col-start-2':
					(content.data.type === '10-col-5.1' && key === 0 && ['xl', 'l', 'm', 's'].includes(mediaType))
					|| (content.data.type === '10-col-5.1' && (key === 0 || key === 1)  && ['xs'].includes(mediaType))
					|| (content.data.type === '10-col-without-gap-6.1' && key === 0 && ['xl', 'l', 'm', 's'].includes(mediaType))
					|| (content.data.type === '10-col-without-gap-6.1' && (key === 0 || key === 1) && ['xs'].includes(mediaType))
					|| (content.data.type === '8-col-7.1' && (key === 0 || key === 1) && ['xs'].includes(mediaType))
					|| (content.data.type === '8-col-without-gap-8.1' && (key === 0 || key === 1) && ['xs'].includes(mediaType))

					,

				'col-start-3':
						(content.data.type === '8-col-7.1' && key === 0 && ['xl', 'l', 'm', 's'].includes(mediaType))
					  || (content.data.type === '8-col-without-gap-8.1' && key === 0 && ['xl', 'l', 'm', 's'].includes(mediaType))

			}
		]">
			<div :class="classesWrap3">

        <!--<div class="w-full">
          <img src="https://cs6.livemaster.ru/storage/7a/7a/c19fe7d3ccd19d823a39673e4bjn.png" class="w-full" alt="">
        </div>-->

        <div class="w-full">
          <img src="https://i.pinimg.com/736x/95/db/85/95db85905c32e5ac384e185cb3f8568d.jpg" class="w-full" alt="">
        </div>

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
							r['grid grid-flow-row gap-v20'] = true
							break
						case 'without-gap-2.1' :
							r['grid grid-flow-row'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['container mx-auto grid gap-v20 grid-cols-6'] = true
							break
						case 'without-gap-4.1' :
							r['container mx-auto grid grid-cols-6'] = true
							break
						case '10-col-5.1' :
							r['container mx-auto gap-v20 grid grid-cols-6'] = true
							break
						case '10-col-without-gap-6.1' :
							r['container mx-auto grid grid-cols-6'] = true
							break
						case '8-col-7.1' :
							r['container mx-auto gap-v20 grid grid-cols-6'] = true
							break
						case '8-col-without-gap-8.1' :
							r['container mx-auto grid grid-cols-6'] = true
							break
					}
					break
				case 's' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							r['grid grid-cols-2 gap-v20'] = true
							break
						case 'without-gap-2.1' :
							r['grid grid-cols-2'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['container mx-auto grid gap-v20 grid-cols-12'] = true
							break
						case 'without-gap-4.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '10-col-5.1' :
							r['container mx-auto gap-v20 grid grid-cols-12'] = true
							break
						case '10-col-without-gap-6.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '8-col-7.1' :
							r['container mx-auto gap-v20 grid grid-cols-12'] = true
							break
						case '8-col-without-gap-8.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
					}
					break
				case 'm' :
					switch (self.content.data.type) {
						case 'with-gap-1.1' :
							// если есть медиа настройки то делаем то то
							// если нет -> r['grid grid-cols-2 gap-v20'] = true
							r['grid grid-cols-2 gap-v20'] = true
							break
						case 'without-gap-2.1' :
							r['grid grid-cols-2'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['container mx-auto grid gap-v20 grid-cols-12'] = true
							break
						case 'without-gap-4.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '10-col-5.1' :
							r['container mx-auto gap-v20 grid grid-cols-12'] = true
							break
						case '10-col-without-gap-6.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '8-col-7.1' :
							r['container mx-auto gap-v20 grid grid-cols-12'] = true
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
							r['grid grid-cols-2 gap-v20'] = true
							break
						case 'without-gap-2.1' :
							r['grid grid-cols-2'] = true
							break
						case 'col-12-with-gap-3.1' :
							r['container mx-auto grid gap-v20 grid-cols-12'] = true
							break
						case 'without-gap-4.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '10-col-5.1' :
							r['container mx-auto gap-v20 grid grid-cols-12'] = true
							break
						case '10-col-without-gap-6.1' :
							r['container mx-auto grid grid-cols-12'] = true
							break
						case '8-col-7.1' :
							r['container mx-auto gap-v20 grid grid-cols-12'] = true
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
							r['col-span-4'] = true
							break
						case '10-col-without-gap-6.1' :
							r['col-span-4'] = true
							break
						case '8-col-7.1' :
							r['col-span-4'] = true
							break
						case '8-col-without-gap-8.1' :
							r['col-span-4 '] = true
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
				case 's' :
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
