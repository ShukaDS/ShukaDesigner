<template>
	<div class="w-full">
		<template v-for="(item, key) in items.slice(0, 2)">
			<div class="w-full">
				<BaseContentDefault :content="item"></BaseContentDefault>
			</div>
			<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption :content="captions[key]"></BaseContentCaption>
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
