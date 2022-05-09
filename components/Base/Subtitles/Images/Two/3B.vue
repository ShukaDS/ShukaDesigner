<template>
	<div class="w-full" v-if="mediaType==='xs'">
		<template image1>
			<BaseContentDefault></BaseContentDefault>
			<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
		<template image2>
			<BaseContentDefault></BaseContentDefault>
			<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2">
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div class="grid grid-cols-2 gap-x-5" v-if="mediaType==='s'">
		<template images>
			<div>
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template texts>
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-x-5" v-if="mediaType==='m'">
		<template images>
			<div>
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template texts>
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>
	<div class="w-full" v-if="['xl', 'l'].includes(mediaType)">
		<div class="w-full">
			<div class="grid grid-cols-2 gap-x-5">
				<template>
					<BaseContentDefault></BaseContentDefault>
				</template>
			</div>
		</div>
		<div class="container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template texts>
				<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
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
