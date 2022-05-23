<template>
	<div class="container mx-auto grid gap-5 grid-cols-6">
		<div class="col-span-6">
			<BaseContentDefault :content="items[0]"></BaseContentDefault>
		</div>
		<div class="col-span-6">
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
