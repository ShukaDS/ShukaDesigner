<template>
	<BaseContentDefault :content="items[0]"></BaseContentDefault>
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
