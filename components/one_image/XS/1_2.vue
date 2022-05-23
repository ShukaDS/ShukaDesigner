<template>
	<div class="w-full overflow-hidden flex justify-center">
		<div style="width: 928px;" class="max-w-none">
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
