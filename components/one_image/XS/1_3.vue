<template>
	<div class="w-full overflow-hidden flex justify-center">
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
