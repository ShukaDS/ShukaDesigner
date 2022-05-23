<template>
	<div class="container mx-auto grid grid-cols-6 gap-x-5">
		<template v-for="(item, key) in items.slice(0, 3)">
			<div class="col-span-6 mb-5">
				<BaseContentDefault :content="item"></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 -mt-3">
			<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
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
