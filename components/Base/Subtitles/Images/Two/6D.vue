<template>
	<div v-if="isActive('xs', '6D')" class="container mx-auto grid grid-cols-6 gap-x-5">
		<template v-for="(item, key) in items">
			<div class="col-span-6">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>


	<div v-if="isActive('s', '6D') || isActive('m', '6D') || isActive('l', '6D') || isActive('xl', '6D')"
			 class="container mx-auto grid grid-cols-2">
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
	name: '6D'
}
</script>
