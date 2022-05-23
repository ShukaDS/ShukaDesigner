<template>
	<div class="container mx-auto grid grid-cols-12 gap-5">
		<div class="col-span-2 container mx-autoflex flex-col">
			<div>
				<BaseContentDefault :content="items[0]"></BaseContentDefault>
				<p class="text-gray-500 text-sm mt-2">
					<a class="text-black cursor-pointer font-semibold">
						<BaseContentCaption :content="captions[0]"></BaseContentCaption>
					</a>
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
