<template>
	<div class="container mx-auto grid gap-v20 grid-cols-12">
		<div class="col-span-6 col-start-4">
						<BaseContentDefault :content="items[0]"></BaseContentDefault>
		</div>
		<div class="col-span-6 col-start-4">
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
