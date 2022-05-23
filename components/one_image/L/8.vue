<template>
	<div class="grid grid-cols-2 gap-5">
		<BaseContentDefault :content="items[0]"></BaseContentDefault>
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
