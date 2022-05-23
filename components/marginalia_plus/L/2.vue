<template>
	<div class="container mx-auto grid grid-cols-12 gap-5">
		<div class="col-span-2 flex flex-col">
			<div class="mb-2">
				<BaseContentDefault :content="items[0]"></BaseContentDefault>
			</div>
			<p class="text-gray-500 text-sm">
				<BaseContentCaption :content="captions[0]"></BaseContentCaption>
			</p>
		</div>
		<div class="col-span-6 col-start-7">
			<BaseContentDefault :content="items[1]"></BaseContentDefault>
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
