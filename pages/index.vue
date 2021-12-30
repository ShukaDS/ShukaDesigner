<template>
	<div class="mx-auto relative flex flex-col items-center justify-center">

		<div class="bg-[#decbe1] bg-[#ffe9c9] bg-[#F5F5F5] bg-[#e0f4ed]"></div>

		<div class="w-full relative grid grid-rows-1 bg-[#e5e5e5] py-10">

			<div class="container">

				<div :class="{'grid gap-5':true, 'grid-flow-col grid-cols-12': mediaType !== 'xs', 'grid-cols-1': mediaType === 'xs'}">

					<div class="col-span-6">
						<h1 class="bg-[#B09773] text-white inline-block px-4 py-2 rounded-lg">{{ page.meta.title }}</h1>
						<h2 class="bg-[#B09773] opacity-60 ml-2 text-white inline-block px-4 py-2 rounded-lg" v-if="mediaType && mediaType !== 'xs'">
							<span class="uppercase">{{ mediaType }}</span> Screen</h2>
						<h2 class="bg-[#B09773] opacity-60 ml-2 text-white inline-block px-4 py-2 rounded-lg" v-if="windowWidth && mediaType !== 'xs'">
							{{ windowWidth }}</h2>
					</div>

					<div class="grid grid-flow-col gap-5 col-span-6 grid-cols-12">
						<div class="z-50 relative col-span-6">
							<Listbox v-model="selectedPage">
								<div class="relative mt-1">
									<ListboxButton
													class="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-purple-300 focus-visible:ring-offset-2 focus-visible:border-purple-500 sm:text-sm">
										<span class="block truncate">{{ selectedPage.name }}</span>
										<span class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true"/>
          </span>
									</ListboxButton>

									<transition
													leave-active-class="transition duration-100 ease-in"
													leave-from-class="opacity-100"
													leave-to-class="opacity-0"
									>
										<ListboxOptions
														class="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
										>
											<ListboxOption
															v-slot="{ active, selected }"
															v-for="page in pages"
															:key="page.key"
															:value="page"
															as="template"
											>
												<li :class="[
                  active ? 'text-purple-900 bg-purple-100' : 'text-gray-900',
                  'cursor-default select-none relative py-2 pl-10 pr-4',
                ]">
                <span :class="[
                    selected ? 'font-medium' : 'font-normal',
                    'block truncate',
                  ]"
								>{{ page.name }}</span>
													<span v-if="selected"
																class="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                  <CheckIcon class="w-5 h-5" aria-hidden="true"/>
                </span>
												</li>
											</ListboxOption>
										</ListboxOptions>
									</transition>
								</div>
							</Listbox>
						</div>
						<div class="flex justify-end col-span-6 pl-4">
							<SwitchGroup>
								<div class="flex items-center">
									<SwitchLabel class="mr-4"  v-if="windowWidth && mediaType !== 'xs'">Тех. данные</SwitchLabel>
									<Switch
													v-model="enabledTechData"
													:class='enabledTechData ? "bg-purple-600" : "bg-purple-400"'
													class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
									>
        <span
								:class='enabledTechData ? "translate-x-6" : "translate-x-1"'
								class="inline-block w-4 h-4 transition-transform transform bg-white rounded-full"
				/>
									</Switch>
								</div>
							</SwitchGroup>
						</div>
					</div>

				</div>

			</div>

		</div>

		<div v-for="item in page.items" key="items" class="w-full relative grid grid-rows-1">

			<div :class="classesRowMenu" v-if="enabledTechData" style="z-index: 999999999999999999999999">

				<div :class="classesParams" v-if="item.content.data.figma">

					<a :href="item.content.data.figma.link" target="_blank"
						 :title="item.content.data.figma.key"
						 class="absolute -right-16 top-0 block bg-white rounded-full w-10 h-10">

						<svg class="w-full" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
							<circle cx="512" cy="512" r="512" style="fill:#f24e1e"/>
							<path d="M512 512c0-47.1 38.2-85.3 85.3-85.3s85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3S512 559.1 512 512zM341.3 682.7c0-47.1 38.2-85.3 85.3-85.3H512v85.3c0 47.1-38.2 85.3-85.3 85.3s-85.4-38.2-85.4-85.3zM512 256v170.7h85.3c47.1 0 85.3-38.2 85.3-85.3S644.5 256 597.3 256H512zm-170.7 85.3c0 47.1 38.2 85.3 85.3 85.3H512V256h-85.3c-47.2 0-85.4 38.2-85.4 85.3zm0 170.7c0 47.1 38.2 85.3 85.3 85.3H512V426.7h-85.3c-47.2 0-85.4 38.2-85.4 85.3z" style="fill:#fff"/>
						</svg>

					</a>

					<p class="inline-block">
						{{ item.content.data.figma.name }} - {{ item.content.data.figma.key }}
					</p>


				</div>

				<!--
				<div :class="classesParams" v-if="item.content.component">{{ item.content.component }}</div>
				<div :class="classesParams" v-if="item.backgroundColor">bg - {{ item.backgroundColor }}</div>
				<div :class="classesParams" v-if="item.paddingTop">pt - {{ item.paddingTop }}</div>
				<div :class="classesParams" v-if="item.paddingBottom">pb - {{ item.paddingBottom }}</div>
				<div :class="classesParams" v-if="item.marginTop">mt - {{ item.marginTop }}</div>
				<div :class="classesParams" v-if="item.marginBottom">mb - {{ item.marginBottom }}</div>
				-->
				<div :class="classesParams" v-if="item.content.data.type">Type: {{ item.content.data.type }}</div>
				<div :class="classesParams"
						 v-if="item.content.data.mediaTypes && Object.keys(item.content.data.mediaTypes).length > 0">Media:
					<pre>{{ item.content.data.mediaTypes }}</pre>
				</div>

				<!--
				<Menu as="div" class="relative inline-block text-left">
					<div>
						<MenuButton
										class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
						>
							Верхний отступ
							<ChevronDownIcon class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100" aria-hidden="true"/>
						</MenuButton>
					</div>

					<transition
									enter-active-class="transition duration-100 ease-out"
									enter-from-class="transform scale-95 opacity-0"
									enter-to-class="transform scale-100 opacity-100"
									leave-active-class="transition duration-75 ease-in"
									leave-from-class="transform scale-100 opacity-100"
									leave-to-class="transform scale-95 opacity-0"
					>
						<MenuItems
										class="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						>
							<div class="px-1 py-1">
								<MenuItem v-slot="{ active }">
									<button :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900','group flex rounded-md items-center w-full px-2 py-2 text-sm']">
										<ChevronDoubleUpIcon :active="active" class="w-5 h-5 mr-2 text-violet-400" aria-hidden="true"/>Большой
									</button>
								</MenuItem>
								<MenuItem v-slot="{ active }">
									<button :class="[active ? 'bg-violet-500 text-white' : 'text-gray-900','group flex rounded-md items-center w-full px-2 py-2 text-sm']">
										<ChevronUpIcon :active="active" class="w-5 h-5 mr-2 text-violet-400" aria-hidden="true"/>Маленький</button>
								</MenuItem>
							</div>
						</MenuItems>
					</transition>
				</Menu>
--->

			</div>

			<app-row
							:background-color="item.backgroundColor"
							:margin-top="item.marginTop"
							:margin-bottom="item.marginBottom"
							:padding-top="item.paddingTop"
							:padding-bottom="item.paddingBottom"
							:content="item.content"
			/>

		</div>

		<div class="fixed bottom-2 right-2 z-50 opacity-50 hover:opacity-100" v-show="enabledTechData">
			{{ windowWidth }} |
			<span class="uppercase">{{ mediaType }}</span>
		</div>

		<div class="fixed bottom-2 left-2 z-50 opacity-50 hover:opacity-100" v-show="enabledTechData">
			<!-- one-col-gap: {{ oneColumnWidth }}px |-->
			one-col: {{ oneColumnWidthWithoutGap }}px |
			cont-w: {{ containerWidth }}px
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
} from '../node_modules/@heroicons/vue/solid/index'

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
		Listbox,
		ListboxLabel,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
		CheckIcon,
		SelectorIcon,
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
