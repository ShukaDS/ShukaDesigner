<template>
	<div class="container mx-auto grid grid-cols-12 gap-x-5">
		<template v-for="(item, key) in items.slice(0, 2)">
			<div class="col-span-6">
				<BaseContentDefault :content="item"></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 col-start-5 text-sm text-gray-500 text-center">
				<BaseContentCaption :content="captions[0]"></BaseContentCaption>
			</div>
		</div>
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
