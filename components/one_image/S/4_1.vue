<template>
	<div class="container mx-auto grid grid-cols-12 gap-5">
		<div class="col-span-8 col-start-3">
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
