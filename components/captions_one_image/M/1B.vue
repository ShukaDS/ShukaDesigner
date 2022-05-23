<template>
	<div class="container mx-auto grid grid-cols-12 gap-x-5">
		<template v-for="(item, key) in items.slice(0, 1)">
			<div class="col-span-6">
				<BaseContentDefault :content="item"></BaseContentDefault>
			</div>
			<div class="col-span-12 grid grid-cols-12 gap-x-5">
				<div class="col-span-4 col-start-2 text-sm text-gray-500 mt-2 text-center">
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
