<template>
	<div class="flex justify-between flex-col relative">
		<div style="width: 432px; margin-left: 24px;">
			<BaseContentDefault :content="items[0]"></BaseContentDefault>
		</div>
		<div class="flex flex-col relative mt-v64" style="width: 285.333px; left: 95.3333px;">
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
