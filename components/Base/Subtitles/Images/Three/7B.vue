<template>
	<div v-if="isActive('xs', '7B')" class="container mx-auto grid grid-cols-6 gap-x-5 -mb-5">
		<template v-for="(item, key) in items">
			<div class="col-span-6">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div v-if="isActive('s', '7B') || isActive('m', '7B') || isActive('l', '7B') || isActive('xl', '7B')"
			 class="container mx-auto grid grid-cols-12 gap-x-5">
		<template v-for="(item, key) in items">
			<div class="col-span-4">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-4 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: '7B'
}
</script>
