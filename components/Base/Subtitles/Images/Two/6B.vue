<template>
	<div v-if="isActive('xs', '6B')" class="container mx-auto grid grid-cols-6 gap-x-5 -mb-5">
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
	<div v-if="isActive('s', '6B') || isActive('m', '6B') || isActive('l', '6B') || isActive('xl', '6B')"
			 class="container mx-auto grid grid-cols-2">
		<template v-for="(item, key) in items">
			<div>
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-6 grid grid-cols-6 gap-x-5 text-sm text-gray-500 text-center">
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
	name: '6B'
}
</script>
