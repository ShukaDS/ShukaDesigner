<template>
	<div class="flex gap-5 overflow-hidden">
		<div class="flex flex-col">
			<div><!-- просчет ширины и начала на js-->
				<BaseContentDefault :content="items[0]"></BaseContentDefault>
				<p class="text-gray-500 text-sm mt-2">
					<BaseContentCaption :content="captions[0]"></BaseContentCaption>
				</p>
			</div>
		</div>
		<div class="flex flex-col">
			<div><!-- просчет ширины и начала на js-->
				<BaseContentDefault :content="items[1]"></BaseContentDefault>
				<p class="text-gray-500 text-sm mt-2">
					<BaseContentCaption :content="captions[1]"></BaseContentCaption>
				</p>
			</div>
		</div>
		<div class="flex flex-col">
			<div><!-- просчет ширины и начала на js-->
				<BaseContentDefault :content="items[2]"></BaseContentDefault>
				<p class="text-gray-500 text-sm mt-2">
					<BaseContentCaption :content="captions[2]"></BaseContentCaption>
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
