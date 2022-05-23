<template>
	<div v-if="isActive('xs', '4B')" class="w-full">
		<template v-for="(item, key) in items">
			<div class="w-full">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div v-if="isActive('s', '4B') || isActive('m', '4B') || isActive('l', '4B') || isActive('xl', '4B')"
			 class="grid grid-cols-2">
		<template v-for="(item, key) in items">
			<div>
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-6 text-sm text-gray-500 text-center">
					<div class="col-span-4 col-start-2">
						<BaseContentCaption></BaseContentCaption>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script>
export default {
	name: '4B'
}
</script>
