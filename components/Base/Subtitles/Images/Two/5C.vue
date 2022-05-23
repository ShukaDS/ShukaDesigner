<template>
	<div v-if="isActive('xs', '5C')" class="container mx-auto grid grid-cols-6 gap-x-5 -mt-5">
		<template v-for="(item, key) in items">
			<div class="col-span-6 mt-5">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '5C') || isActive('m', '5C') || isActive('l', '5C') || isActive('xl', '5C')"
			 class="container mx-auto grid grid-cols-12 gap-x-5">
		<template v-for="(item, key) in items">
			<div class="col-span-6">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '5C'
}
</script>
