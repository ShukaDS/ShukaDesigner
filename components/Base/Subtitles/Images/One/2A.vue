<template>
	<div v-if="isActive('xs', '2A')" class="w-full">
		<div class="w-full">
			<div class="w-2/3"><!--просчитать-->
				<BaseContentDefault></BaseContentDefault>
			</div>
		</div>
		<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '1B') || isActive('m', '1B') || isActive('l', '1B') || isActive('xl', '1B')"
			 class="grid grid-cols-2 gap-x-5">
		<template>
			<div class="w-full">
				<div class="w-full">
					<BaseContentDefault></BaseContentDefault>
				</div>
			</div>
			<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
</template>

<script>
import useGlobalMedia from '../../../../../composables/useGlobalMedia'
import BaseImagesTwo from '../../../Images/Two/BaseImagesTwo'

export default {
	name: '2A',
	components: { BaseImagesTwo },
	layout: false,
	setup () {
		const { windowWidth, mediaType } = useGlobalMedia()
		return { windowWidth, mediaType }
	}
}
</script>
