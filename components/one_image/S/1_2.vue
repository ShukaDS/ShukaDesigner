<template>
	<div class="w-full overflow-hidden flex justify-center">
		<div class="max-w-none shrink-0" style="width: 928px;">
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
