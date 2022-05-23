<template>
	<div class="container mx-auto grid grid-cols-6 gap-x-5">
		<div class="col-span-6">
			<template v-for="(item, key) in items.slice(0, 1)">
				<BaseContentDefault :content="item"></BaseContentDefault>
			</template>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5">
			<div class="col-span-4 col-start-2 text-sm text-gray-500 mt-2 text-center">
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
