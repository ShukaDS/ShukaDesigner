<template>
	<div class="container mx-auto grid grid-cols-6 gap-5">
		<div class="col-span-4 col-start-2">
			<BaseContentDefault :content="items[0]"></BaseContentDefault>
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
