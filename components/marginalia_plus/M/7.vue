<template>
	<div class="container mx-auto grid grid-cols-12 gap-v20">
		<div class="col-span-6">
			<div class="text-base text-gray-500 grid gap-v20">
				<BaseContentCaption :content="captions[0]"></BaseContentCaption>
			</div>
		</div>
		<div class="col-span-2 col-start-11 flex flex-col">
			<div class="mb-2">
				<BaseContentDefault :content="items[0]"></BaseContentDefault>
			</div>
			<p class="text-gray-500 text-sm">
				<BaseContentCaption :content="captions[1]"></BaseContentCaption>
			</p>
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
