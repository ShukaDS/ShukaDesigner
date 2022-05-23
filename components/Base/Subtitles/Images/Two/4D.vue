<template>
	<div v-if="isActive('xs', '4D')" class="w-full">
		<template v-for="(item, key) in items">
			<div class="w-full">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '4D') || isActive('m', '4D') || isActive('l', '4D') || isActive('xl', '4D')"
			 class="grid grid-cols-2">
		<template v-for="(item, key) in items">
			<div>
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 col-start-5 text-sm text-gray-500 text-center">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '4D'
}
</script>
