<template>
	<div class="flex justify-between relative">
		<div class="w-32 flex flex-col relative left-4"><!-- просчет right на js-->
			<div class="mb-2">
				<BaseContentDefault :content="items[0]"></BaseContentDefault>
			</div>
			<p class="text-gray-500 text-sm">
				<BaseContentCaption :content="captions[0]"></BaseContentCaption>
			</p>
		</div>
		<div class="w-1/2"><!-- просчет ширины на js-->
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
