<template>
	<div class="grid grid-cols-2 gap-x-5">
		<template>
			<BaseContentDefault :content="items[0]"></BaseContentDefault>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption :content="captions[0]"></BaseContentCaption>
				</div>
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
