<template>
	<div v-if="isActive('xs', '5A')" class="container mx-auto grid grid-cols-6 gap-x-5 -mb-5">
		<template v-for="(item, key) in items">
			<div class="col-span-6">
				<div class="w-full">
					<BaseContentDefault></BaseContentDefault>
				</div>
			</div>
			<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div v-if="isActive('s', '5A') || isActive('m', '5A') || isActive('l', '5A') || isActive('xl', '5A')"
			 class="container mx-auto grid grid-cols-12 gap-x-5">
		<template v-for="(item, key) in items">
			<div class="col-span-6">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-6 grid grid-cols-6 gap-x-5 text-sm text-gray-500">
					<div class="col-span-4">
						<BaseContentCaption></BaseContentCaption>
					</div>
				</div>
			</template>
		</div>
	</div>
	<!--5E-->
	<div v-if="isActive('s', '5E')" class="container mx-auto grid grid-cols-12 gap-x-5 -mb-5">
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
	<!--5F-->
	<div v-if="isActive('s', '5F')" class="container mx-auto grid grid-cols-12 gap-x-5 -mb-5">
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
	<!--5G-->
	<div v-if="isActive('s', '5G')" class="container mx-auto grid grid-cols-12 -mt-5">
		<template v-for="(item, key) in items">
			<div class="col-span-12 mt-5">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-12 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--5H-->
	<div v-if="isActive('s', '5H')" class="container mx-auto grid grid-cols-12 -mt-5">
		<template v-for="(item, key) in items">
			<div class="col-span-12 mt-5">
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
	name: '5A'
}
</script>
