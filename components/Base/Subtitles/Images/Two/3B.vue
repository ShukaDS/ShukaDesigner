<template>
	<div v-if="isActive('xs', '3B')" class="w-full -mb-5">
		<template v-for="(item, key) in items">
			<BaseContentDefault></BaseContentDefault>
			<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div v-if="isActive('s', '3B') || isActive('m', 'default') || isActive('l', 'default') || isActive('xl', 'default')" class="grid grid-cols-2 gap-x-5">
		<template v-for="(item, key) in items">
			<div>
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-6 grid grid-cols-6 text-sm text-gray-500 text-center">
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
	name: '3B'
}
</script>
