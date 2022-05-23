<template>
	<div class="container mx-auto">
		<template v-for="(item, key) in items.slice(0, 3)">
			<div class="grid grid-flow-col gap-x-5  overflow-y-auto"><!--просчитать-->
				<BaseContentDefault :content="item"></BaseContentDefault>
			</div>
		</template>
		<div class="grid grid-cols-6 gap-x-5 mt-2">
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
