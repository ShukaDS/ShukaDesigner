<template>
	<div v-if="isActive('xs', '4A')" class="w-full -mb-5">
		<template v-for="(item, key) in items">
			<div class="w-full">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div v-if="isActive('s', '4A') || isActive('m', '4A') || isActive('l', '4A') || isActive('xl', '4A')"
			 class="grid grid-cols-2">
		<template v-for="(item, key) in items">
			<div>
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-6 text-sm grid grid-cols-6 gap-x-5 text-gray-500">
					<div class="col-span-4">
						<BaseContentCaption></BaseContentCaption>
					</div>
				</div>
			</template>
		</div>
	</div>

	<!--4E-->
	<div v-if="isActive('s', '4E')" class="grid grid-cols-2 gap-x-5 -mb-5">
		<template v-for="(item, key) in items">
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<!--4F-->
	<div v-if="isActive('s', '4F')" class="grid grid-cols-2 gap-x-5 -mb-5">
		<template v-for="(item, key) in items">
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 col-start-5 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<!--4G-->
	<div v-if="isActive('s', '4G')" class="grid grid-cols-2">
		<template v-for="(item, key) in items">
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--4H-->
	<div v-if="isActive('s', '4G')" class="grid grid-cols-2">
		<template v-for="(item, key) in items">
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 col-start-5 text-sm text-gray-500 text-center">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--4E-->
	<!--4E-->

</template>

<script>
export default {
	name: '4A'
}
</script>
