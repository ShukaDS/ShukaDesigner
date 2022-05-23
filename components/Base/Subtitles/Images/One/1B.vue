<template>
	<div v-if="isActive('xs', '1B')" class="container mx-auto grid grid-cols-6 gap-x-5">
		<div class="col-span-6">
			<template v-for="(item, key) in items">
				<BaseContentDefault></BaseContentDefault>
			</template>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5">
			<div class="col-span-4 col-start-2 text-sm text-gray-500 mt-2 text-center">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '1B') || isActive('m', '1B') || isActive('l', '1B') || isActive('xl', '1B')"
			 class="container mx-auto grid grid-cols-12 gap-x-5">
		<template v-for="(item, key) in items">
			<div class="col-span-6">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="col-span-12 grid grid-cols-12 gap-x-5">
				<div class="col-span-4 col-start-2 text-sm text-gray-500 mt-2 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: '1B'
}
</script>
