<template>
	<div class="grid grid-cols-2 gap-x-5 -mb-5">
		<template v-for="(item, key) in items.slice(0, 2)">
			<div class="col-span-2">
				<BaseContentDefault :content="item"></BaseContentDefault>
			</div>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 col-start-5 text-sm text-gray-500 text-center">
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
