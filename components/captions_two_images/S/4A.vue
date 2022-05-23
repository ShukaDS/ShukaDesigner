<template>
	<div class="grid grid-cols-2">
		<template v-for="(item, key) in items.slice(0, 2)">
			<div>
				<BaseContentDefault :content="item"></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in captions.slice(0, 2)">
				<div class="col-span-6 text-sm grid grid-cols-6 gap-x-5 text-gray-500">
					<div class="col-span-4">
						<BaseContentCaption :content="item"></BaseContentCaption>
					</div>
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
