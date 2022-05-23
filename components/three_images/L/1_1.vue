<template>
	<div class="container mx-auto grid gap-v20 grid-cols-12">
		<div class="col-span-4">
			<div class="w-full">
				<div class="relative pb-[100%]">
					<div class="absolute top-0 left-0 w-full h-full">
						<BaseContentDefault :content="items[0]"></BaseContentDefault>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-4">
			<div class="w-full">
				<div class="relative pb-[100%]">
					<div class="absolute top-0 left-0 w-full h-full">
						<BaseContentDefault :content="items[1]"></BaseContentDefault>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-4">
			<div class="w-full">
				<div class="relative pb-[100%]">
					<div class="absolute top-0 left-0 w-full h-full">
						<BaseContentDefault :content="items[2]"></BaseContentDefault>
					</div>
				</div>
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
