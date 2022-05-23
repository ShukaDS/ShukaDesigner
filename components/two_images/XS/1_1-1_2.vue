<template>
	<div class="grid grid-flow-row gap-5">
		<BaseContentDefault :content="items[0]"></BaseContentDefault>
		<BaseContentDefault :content="items[1]"></BaseContentDefault>
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
