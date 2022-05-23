<template>
	<div class="flex justify-end">
		<div class="w-3/4"><!-- просчет ширины на js-->
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
