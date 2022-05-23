<template>
	<div v-if="isActive('xs', '3A')" class="w-full -mb-5">
		<template v-for="(item, key) in items">
			<BaseContentDefault></BaseContentDefault>
			<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div v-if="isActive('s', '3A') || isActive('m', 'default') || isActive('l', 'default') || isActive('xl', 'default')"
			 class="grid grid-cols-2 gap-x-5">
		<template v-for="(item, key) in items">
			<BaseContentDefault></BaseContentDefault>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-6 grid grid-cols-6 gap-x-5 text-sm text-gray-500">
					<div class="col-span-4">
						<BaseContentCaption></BaseContentCaption>
					</div>
				</div>
			</template>
			<!--			<template text1>-->
			<!--				<div class="col-span-4 text-sm text-gray-500">-->
			<!--					<BaseContentCaption></BaseContentCaption>-->
			<!--				</div>-->
			<!--			</template>-->
			<!--			<template text2>-->
			<!--				<div class="col-span-4 col-start-7 text-sm text-gray-500">-->
			<!--					<BaseContentCaption></BaseContentCaption>-->
			<!--				</div>-->
			<!--			</template>-->
		</div>
	</div>

	<!--3E-->
	<div v-if="isActive('s', '3E')" class="grid grid-cols-2 gap-x-5 -mb-5">
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
	<!--3F-->
	<div v-if="isActive('s', '3F')" class="grid grid-cols-2 gap-x-5 -mb-5">
		<template v-for="(item, key) in items">
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<!--3G-->
	<div v-if="isActive('s', '3G')" class="grid grid-cols-2 gap-x-5 -mt-5">
		<template v-for="(item, key) in items">
			<div class="col-span-2 mt-5">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--3H-->
	<div v-if="isActive('s', '3H')" class="grid grid-cols-2 gap-x-5 -mt-5">
		<template v-for="(item, key) in items">
			<div class="col-span-2 mt-5">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 mt-2">
			<div class="col-span-4 text-sm text-gray-500 text-center">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '3A'
}
</script>
