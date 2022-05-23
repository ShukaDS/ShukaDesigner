<template>
	<div class="container mx-auto grid grid-cols-12 gap-x-5">
		<template v-for="(item, key) in items.slice(0, 3)">
			<div class="col-span-4">
				<BaseContentDefault :content="item"></BaseContentDefault>
			</div>
		</template>

		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in captions.slice(0, 3)">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption :content="item"></BaseContentCaption>
				</div>
			</template>
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
