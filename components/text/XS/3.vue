<template>
	<div class="container mx-auto grid grid-cols-6 gap-5">
		<div class="col-span-6">
			<div>
				<p class="text-base text-gray-500">
					<BaseContentCaption :content="captions[0]"></BaseContentCaption>
				</p>
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
