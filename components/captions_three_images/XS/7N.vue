<template>
	<div class="container mx-auto">
		<div class="grid grid-flow-col gap-x-5 overflow-y-auto">
			<template v-for="(item, key) in items.slice(0, 3)">
				<div class="w-96"><!--просчитать-->
					<BaseContentDefault :content="item"></BaseContentDefault>
				</div>
			</template>
		</div>
		<div class="grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-sm text-gray-500">
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
