<template>
	<div class="flex justify-between relative">
		<div class="" style="width: 908px;">
			<div class="w-full">
				<BaseContentDefault :content="items[0]"></BaseContentDefault>
			</div>
		</div>
		<div class="flex flex-col relative" style="width: 170.667px; right: 80px;">
			<div class="mb-2">
				<BaseContentDefault :content="items[1]"></BaseContentDefault>
			</div>
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
