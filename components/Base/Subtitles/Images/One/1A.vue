<template>
	<div class="container mx-auto grid grid-cols-6 gap-x-5" v-if="mediaType==='xs'">
		<div class="col-span-6">
			<template images>
				<BaseContentDefault></BaseContentDefault>
			</template>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5">
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="mediaType==='s'">
		<div class="col-span-6">
			<template images>
				<BaseContentDefault></BaseContentDefault>
			</template>
		</div>
		<div class="col-span-12 grid grid-cols-12 gap-x-5">
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="mediaType==='m'">
		<div class="col-span-6">
			<template images>
				<BaseContentDefault></BaseContentDefault>
			</template>
		</div>
		<div class="col-span-12 grid grid-cols-12 gap-x-5">
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="['xl', 'l'].includes(mediaType)">
		<div class="col-span-6">
			<template images>
				<BaseContentDefault></BaseContentDefault>
			</template>
		</div>
		<div class="col-span-12 grid grid-cols-12 gap-x-5">
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '1A'
}
</script>
