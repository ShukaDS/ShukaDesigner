<template>
	<div class="container mx-auto grid grid-flow-col gap-x-5  overflow-y-auto">
		<template v-for="(item, key) in items.slice(0, 3)">
			<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
				<div class="col-span-6">
					<BaseContentDefault :content="item"></BaseContentDefault>
				</div>
				<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
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
