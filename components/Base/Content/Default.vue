<template>

	<!--	<pre>{{ content }}</pre>-->


	<!--<div class="w-full">
        <img src="https://cs6.livemaster.ru/storage/7a/7a/c19fe7d3ccd19d823a39673e4bjn.png" class="w-full" alt="">
      </div>-->

	<div v-if="content.type === 'image'" class="w-full">
		<img :src="content.link" class="w-full" alt="">
<!--		<img src="https://mainold.website.yandexcloud.net/media/armageddon/newFormat/12.webp" class="w-full" alt="">-->
	</div>

	<!--<div class="relative pb-[100%]">
  <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/xTY0SlyVfCQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>-->

	<div v-if="content.type === 'vimeo'" class="relative pb-[100%]">
		<iframe class="absolute top-0 left-0 w-full h-full" :src="content.link"
						allow="autoplay; fullscreen; picture-in-picture" webkitallowfullscreen mozallowfullscreen
						allowfullscreen></iframe>
	</div>

	<!--<div class="relative pb-[100%]">
<iframe class="absolute top-0 left-0 w-full h-full" loading="lazy" title="1" src="https://player.vimeo.com/video/612734414?quality=1080p&amp;20badge=0&amp;autopause=0&amp;background=1&amp;player_id=0&amp;app_id=58479" allow="autoplay; fullscreen" allowfullscreen="" data-ready="true"></iframe>
</div>-->

	<!--<img :src="image.src" :alt="image.alt" class="w-full">-->
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		content: Object
	},
	mounted () {
		console.log('content', this.content)
	}
})
</script>
