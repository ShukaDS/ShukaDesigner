<template>
	<div class="mx-auto relative flex flex-col items-center justify-center">

		<div v-for="item in page.items" key="items" class="w-full relative grid grid-rows-1">

			<app-row
							:background-color="item.backgroundColor"
							:margin-top="item.marginTop"
							:margin-bottom="item.marginBottom"
							:padding-top="item.paddingTop"
							:padding-bottom="item.paddingBottom"
							:content="item.content"
			/>

		</div>

	</div>
</template>

<script>
export default {
	
	setup () {
		const { data, pending, error, refresh } = await useAsyncData(
			'mountains',
			() => $fetch('https://api.nuxtjs.dev/mountains')
		)


		return {
			enabledTechData,
			windowWidth,
			mediaType,
			containerWidth,
			oneColumnWidth,
			oneColumnWidthWithoutGap,
			pages,
			selectedPage
		}

	},
	data () {
		return {}
	},
	computed: {
		page () {
			let self = this
			let page = {
				meta: {},
				items: []
			}
			if (self.selectedPage.key === 'texts') {
				page.meta.title = 'Тексты'
				page.items = jsonTexts
			}
			if (self.selectedPage.key === 'one_images') {
				page.meta.title = '1 изображение'
				page.items = jsonBaseImagesOne
			}
			if (self.selectedPage.key === 'two_images') {
				page.meta.title = '2 изображения'
				page.items = jsonBaseImagesTwo
			}
			if (self.selectedPage.key === 'three_images') {
				page.meta.title = '3 изображения'
				page.items = jsonBaseImagesThree
			}
			if (self.selectedPage.key === 'marginalia') {
				page.meta.title = 'Маргиналия'
				page.items = jsonBaseMarginalia
			}
			if (self.selectedPage.key === 'marginalia_plus') {
				page.meta.title = 'Маргиналия + Блоки'
				page.items = jsonBaseMarginaliaPlus
			}
			if (self.selectedPage.key === 'signatures') {
				page.meta.title = 'Подписи'
				page.items = jsonBaseSignatures
			}
			if (self.selectedPage.key === 'row_bg') {
				page.meta.title = 'Фоны'
				page.items = jsonBaseRowBg
			}
			if (self.selectedPage.key === 'row_margins') {
				page.meta.title = 'Управление отступами'
				page.items = jsonBaseRowMargins
			}
			if (self.selectedPage.key === 'case1520') {
				page.meta.title = 'Кейс 1520'
				page.items = jsonCase1520
			}
			return page
		},
		classesParams () {
			return {
				'text-lg': true,
				'text-white': true,
				'last:mr-0 m-1': true,
			}
		},
		classesRowMenu () {
			return {
				'py-1 px-2 absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2': true,
				'rounded-lg': true,
				'shadow-2xl': true,
				'bg-purple-500': true
			}
		},
		classesMenuItemActive(){
			return {
				'bg-violet-500 text-white': 'text-gray-900',
				'group flex rounded-md items-center w-full px-2 py-2 text-sm': true,
				'rounded-l-lg': true,
			}
		}
	}
}
</script>
