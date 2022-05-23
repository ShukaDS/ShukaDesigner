<template>
	<div v-if="isActive('xs', '3C')" class="w-full grid -mt-5">
		<template v-for="(item, key) in items">
			<div class="w-full mt-5">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '3C') || isActive('m', 'default') || isActive('l', 'default') || isActive('xl', 'default')"
			 class="grid grid-cols-2 gap-x-5">
		<template v-for="(item, key) in items">
			<div>
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '3C'
}
</script>
