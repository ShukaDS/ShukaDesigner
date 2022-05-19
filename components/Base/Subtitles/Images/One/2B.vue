<template>
	<div v-if="isActive('xs', '2B')" class="w-full">
		<div class="w-full">
			<div class="w-2/3"><!--просчитать-->
				<BaseContentDefault></BaseContentDefault>
			</div>
		</div>
		<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '2B') || isActive('m', '2B') || isActive('l', '2B') || isActive('xl', '2B')" class="grid grid-cols-2 gap-x-5">
		<template>
			<div class="w-full">
				<div class="w-full">
					<BaseContentDefault></BaseContentDefault>
				</div>
			</div>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: '2B'
}
</script>
