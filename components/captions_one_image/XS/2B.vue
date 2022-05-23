<template>
	<div class="w-full">
		<div class="w-full">
			<div class="w-2/3"><!--просчитать-->
				<BaseContentDefault :content="items[0]"></BaseContentDefault>
			</div>
		</div>
		<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
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
