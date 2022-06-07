<template>
	<div class="container mx-auto grid grid-cols-12 gap-5">
		<div class="col-span-5">
			<div>
				<p class="text-l text-gray-500">
					{{ captions[0] }}
				</p>
			</div>
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
