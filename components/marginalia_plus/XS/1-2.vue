<template>
	<div class="container mx-auto grid grid-cols-6">
		<div class="col-span-6 mb-v64">
				<BaseContentDefault :content="items[0]"></BaseContentDefault>
		</div>
		<div class="col-span-4 col-start-2 flex flex-col">
				<BaseContentDefault :content="items[1]"></BaseContentDefault>
			<p class="text-gray-500 text-sm">
				<BaseContentCaption :content="captions[0]"></BaseContentCaption>
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
