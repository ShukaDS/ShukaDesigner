<template>
	<div v-if="isActive('xs', '6A')" class="container mx-auto grid grid-cols-6 gap-x-5 -mb-5">
		<template v-for="(item, key) in items">
			<div class="col-span-6">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div v-if="isActive('s', '6A') || isActive('m', '6A') || isActive('l', '6A') || isActive('xl', '6A')"
			 class="container mx-auto grid grid-cols-2">
		<template v-for="(item, key) in items">
			<div>
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-6 grid grid-cols-6 gap-x-5 text-sm text-gray-500">
					<div class="col-span-4">
						<BaseContentCaption></BaseContentCaption>
					</div>
				</div>
			</template>
		</div>
	</div>
	<!--6E-->
	<div v-if="isActive('s', '6E')" class="container mx-auto grid grid-cols-12 gap-x-5 -mb-5">
		<template v-for="(item, key) in items">
			<div class="col-span-12">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="col-span-12 container mx-auto grid grid-cols-12 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<!--6F-->
	<div v-if="isActive('s', '6F')" class="container mx-auto grid grid-cols-12 gap-x-5 -mb-5">
		<template v-for="(item, key) in items">
			<div class="col-span-12">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="col-span-12 container mx-auto grid grid-cols-12 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 col-start-5 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<!--6G-->
	<div v-if="isActive('s', '6G')" class="container mx-auto grid grid-cols-12">
		<template v-for="(item, key) in items">
			<div class="col-span-12">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-12 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--6H-->
	<div v-if="isActive('s', '6G')" class="container mx-auto grid grid-cols-12">
		<template v-for="(item, key) in items">
			<div class="col-span-12">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-12 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 col-start-5 text-sm text-gray-500 text-center">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '6A'
}
</script>
