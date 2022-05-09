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
import AppRow from '../components/Base/Row/BaseRow'
import {
	Listbox,
	ListboxButton,
	ListboxLabel,
	ListboxOption,
	ListboxOptions,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Switch,
	SwitchGroup,
	SwitchLabel
} from '@headlessui/vue'

import {
	ArchiveIcon,
	CheckIcon,
	ChevronDoubleUpIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	DuplicateIcon,
	PencilIcon,
	SelectorIcon,
	TrashIcon,
	ViewListIcon
} from '@heroicons/vue/solid/index'

import useGlobalMedia from '../composables/useGlobalMedia'
import jsonTexts from '../assets/pages/texts.json'
import jsonBaseImagesOne from '../assets/pages/one_images.json'
import jsonBaseImagesTwo from '../assets/pages/two_images.json'
import jsonBaseImagesThree from '../assets/pages/three_images.json'
import jsonBaseMarginalia from '../assets/pages/marginalia.json'
import jsonBaseMarginaliaPlus from '../assets/pages/marginalia_plus.json'
import jsonBaseSignatures from '../assets/pages/signatures.json'
import jsonBaseRowBg from '../assets/pages/row_bg.json'
import jsonBaseRowMargins from '../assets/pages/row_margins.json'
import jsonCase1520 from '../assets/pages/case1520.json'
import { ref } from 'vue'

export default {
	components: {
		AppRow,
		Menu,
		MenuButton,
		MenuItems,
		MenuItem,


		ChevronDownIcon,
		ArchiveIcon,
		DuplicateIcon,
		ViewListIcon,
		PencilIcon,
		TrashIcon,
		ChevronUpIcon,
		ChevronDoubleUpIcon,
		CheckIcon,
		SelectorIcon,


		Listbox,
		ListboxLabel,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
		Switch, SwitchGroup, SwitchLabel
	},
	setup () {
		const router = useRouter()
		const { windowWidth, mediaType, containerWidth, oneColumnWidth, oneColumnWidthWithoutGap } = useGlobalMedia()

		const pages = [
			{ key: 'texts', name: 'Тексты' },
			{ key: 'one_images', name: '1 изображение' },
			{ key: 'two_images', name: '2 изображения' },
			{ key: 'three_images', name: '3 изображения' },
			{ key: 'marginalia', name: 'Маргиналия' },
			{ key: 'marginalia_plus', name: 'Маргиналия + Блоки' },
			// { key: 'signatures', name: 'Подписи' },
			{ key: 'row_bg', name: 'Фоны' },
			{ key: 'row_margins', name: 'Управление отступами' },
			{ key: 'case1520', name: 'Кейс 1520' }
		]

		const selectedPage = ref(pages[0])
		const enabledTechData = ref(false)

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
