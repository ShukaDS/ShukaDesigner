<template>
	<div class="flex justify-between relative">
		<div class="flex flex-col relative" style="width: 170.667px; left: 80px;">
			<div class="mb-2">
				<BaseContentDefault :content="items[0]"></BaseContentDefault>
			</div>
			<p class="text-gray-500 text-sm">
				<BaseContentCaption :content="captions[0]"></BaseContentCaption>
		</div>
		<div class="" style="width: 908px;">
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
