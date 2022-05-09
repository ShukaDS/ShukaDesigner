<template>
	<div class="w-full" v-if="mediaType==='xs'">
		<template image1>
			<BaseContentDefault></BaseContentDefault>
			<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
		<template image2>
			<BaseContentDefault></BaseContentDefault>
			<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div class="grid grid-cols-2 gap-x-5" v-if="['s', 'm'].includes(mediaType)">
		<template images>
			<BaseContentDefault></BaseContentDefault>
		</template>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template text1>
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
			<template text2>
				<div class="col-span-4 col-start-7 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>
	<div class="w-full" v-if="['xl', 'l'].includes(mediaType)">
		<div class="w-full">
			<div class="grid grid-cols-2 gap-x-5">
				<template images>
					<BaseContentDefault></BaseContentDefault>
				</template>
			</div>
		</div>
		<div class="container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<template text1>
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
			<template text2>
				<div class="col-span-4 col-start-7 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>

	<!--3E-->
	<div class="grid grid-cols-2 gap-x-5" v-if="mediaType==='s'">
		<template image1>
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<template text1>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
		<template image2>
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<template text2>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<!--3F-->
	<div class="grid grid-cols-2 gap-x-5" v-if="mediaType==='s'">
		<template image1>
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<template text1>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
		<template image2>
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<template text2>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
				<div class="col-span-4 text-sm text-gray-500 text-center">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<!--3G-->
	<div class="grid grid-cols-2 gap-x-5" v-if="mediaType==='s'">
		<template image1>
			<div class="col-span-2 mb-5">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<template image1>
			<div class="col-span-2">
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
	<div class="grid grid-cols-2 gap-x-5" v-if="mediaType==='s'">
		<template image1>
			<div class="col-span-2 mb-5">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<template image2>
			<div class="col-span-2">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>

		<div class="col-span-2 container mx-auto grid grid-cols-12 mt-2">
			<div class="col-span-4 col-start-5 text-sm text-gray-500 text-center">
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
