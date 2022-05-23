<template>
	<div class="container mx-auto grid grid-cols-12 -mb-5">
		<template v-for="(item, key) in items.slice(0, 3)">
			<div class="col-span-4 col-start-5">
				<BaseContentDefault :content="item"></BaseContentDefault>
			</div>
			<div class="col-span-4 col-start-5 text-sm text-gray-500 mt-2 text-center mb-5">
				<BaseContentCaption :content="captions[key]"></BaseContentCaption>
			</div>
		</template>
	</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		items: Object,
		captions: Object
	}
})
</script>
