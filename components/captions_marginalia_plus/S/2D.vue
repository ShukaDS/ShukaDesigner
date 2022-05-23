<template>
	<div class="container mx-auto grid grid-cols-12 gap-5">
		<div class="col-span-3 container mx-autoflex flex-col">
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
