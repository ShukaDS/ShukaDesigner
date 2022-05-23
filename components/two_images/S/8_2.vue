<template>
	<div class="container mx-auto gap-5 grid grid-cols-12">
		<div class="col-span-8 col-start-3 flex flex-col">
			<BaseContentDefault :content="items[0]"></BaseContentDefault>
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
