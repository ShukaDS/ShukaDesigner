<template>
	<div class="container mx-auto grid grid-cols-6 gap-x-5" v-if="mediaType==='xs'">
		<template>
			<div class="col-span-6">
				<template images>
					<BaseContentDefault></BaseContentDefault>
				</template>
			</div>
			<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="mediaType==='s'">
		<template>
			<div class="col-span-4">
				<template images>
					<BaseContentDefault></BaseContentDefault>
				</template>
			</div>
		</template>
		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template texts>
				<div class="col-span-4 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="['xl', 'l', 'm'].includes(mediaType)">
		<template>
			<div class="col-span-4">
				<template images>
					<BaseContentDefault></BaseContentDefault>
				</template>
			</div>
		</template>

		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template texts>
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
