<template>
	<div class="container mx-auto gap-5 grid grid-cols-6">
		<div class="col-span-4 col-start-2">
			<BaseContentDefault :content="items[0]"></BaseContentDefault>
		</div>
		<div class="col-span-4 col-start-2">
			<BaseContentDefault :content="items[1]"></BaseContentDefault>
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
