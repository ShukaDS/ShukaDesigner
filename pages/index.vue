<template>
	<div class="mx-auto relative flex flex-col items-center justify-center">

		<div class="fixed bottom-2 right-2 z-50 opacity-50 hover:opacity-100">
			{{ windowWidth }} |
			{{ mediaType }}
		</div>

		<div class="fixed bottom-2 left-2 z-50 opacity-50 hover:opacity-100">
			one-col: {{ oneColumnWidth.toFixed(2) }}px |
			cont-w: {{ containerWidth }}px
		</div>

		<div v-for="item in rows.items" key="items" class="w-full relative grid grid-rows-1">

			<div :class="classesRowMenu">

				<div :class="classesParams" v-if="item.content.data.figma">
					<a :href="item.content.data.figma.link" target="_blank">{{ item.content.data.figma.name }} - {{ item.content.data.figma.key }}</a>
				</div>
				<div :class="classesParams" v-if="item.content.component">{{ item.content.component }}</div>
				<div :class="classesParams" v-if="item.backgroundColor">bg - {{ item.backgroundColor }}</div>
				<div :class="classesParams" v-if="item.paddingTop">pt - {{ item.paddingTop }}</div>
				<div :class="classesParams" v-if="item.paddingBottom">pb - {{ item.paddingBottom }}</div>
				<div :class="classesParams" v-if="item.marginTop">mt - {{ item.marginTop }}</div>
				<div :class="classesParams" v-if="item.marginBottom">mb - {{ item.marginBottom }}</div>
				<div :class="classesParams" v-if="item.content.data.mediaTypes">media - <pre>{{ item.content.data.mediaTypes }}</pre></div>
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

	</div>
</template>

<script>
import AppRow from '../components/base/row/BaseRow'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import {
	ArchiveIcon,
	ChevronDoubleUpIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	DuplicateIcon,
	PencilIcon,
	TrashIcon,
	ViewListIcon
} from '@heroicons/vue/solid'
import useGlobalMedia from '../composables/useGlobalMedia'

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
	},
	setup () {
		const router = useRouter()
		const { windowWidth, mediaType, containerWidth, oneColumnWidth } = useGlobalMedia()
		let rows = {
			meta: {},
			items: [
				/*
				{
					backgroundColor: 'purple',
					marginTop: 'regular',
					marginBottom: 'regular',
					paddingTop: 'regular',
					paddingBottom: 'regular',
					content: {
						// component: 'BaseImagesThree'
						component: 'base-images-one',
						data: {
							image:
								{
									src: 'https://shuka.design/works_img/2021/10/1634302768Cian 1000x1000.png',
									alt: 'Sber'
								}
						}
					}
				},



				*/

				{
					marginTop: 'regular',
					marginBottom: 'regular',
					content: {
						component: 'base-images-three',
						data: {
							images: [
								{
									src: 'https://haton.ru/custom/dis/s-brown1.jpg',
									alt: 'Sber'
								},
								{
									src: 'https://haton.ru/custom/dis/s-brown2.jpg',
									alt: 'Cian'
								},
								{
									src: 'https://haton.ru/custom/dis/s-brown3.jpg',
									alt: 'Mainpage'
								}
							]
						}
					}
				},

				{
					marginBottom: 'large',
					content: {
						component: 'base-images-three',
						data: {
							images: [
								{
									src: 'https://haton.ru/custom/dis/s-purple1.jpg',
									alt: 'Sber'
								},
								{
									src: 'https://haton.ru/custom/dis/s-purple2.jpg',
									alt: 'Cian'
								}
							]
						}
					}
				},

				{
					marginBottom: 'large',
					content: {
						component: 'base-images-three',
						data: {
							mediaTypes: {
								xs: 'mini-1.3A'
							},
							images: [
								{
									src: 'https://haton.ru/custom/dis/s-brown1.jpg',
									alt: 'Sber'
								}
							]
						}
					}
				},


				/*
				2 Изображения
				 */

				{
					marginBottom: 'regular',
					content: {
						component: 'base-images-two',
						data: {
							figma:{
								name: '2 изображения - Во всю ширину',
								key: '1.1',
								link: 'https://www.figma.com/file/SDAqMglAui4kjwGSuLTKwq/Shuka-%C2%B7-Cases?node-id=630%3A5150',
							},
							types: 'with-gap-1.1',
							mediaTypes: {},
							images: [
								{
									src: 'https://haton.ru/custom/dis/brown_horiz1.jpg',
									alt: 'Sber'
								},
								{
									src: 'https://haton.ru/custom/dis/brown_horiz2.jpg',
									alt: 'Cian'
								}
							]
						}
					}
				},
				{
					marginBottom: 'regular',
					content: {
						component: 'base-images-two',
						data: {
							figma:{
								name: '2 изображения - Во всю ширину без отступа',
								key: '2.1',
								link: 'https://www.figma.com/file/SDAqMglAui4kjwGSuLTKwq/Shuka-%C2%B7-Cases?node-id=630%3A5179',
							},
							type: 'without-gap-2.1',
							mediaTypes: {},
							images: [
								{
									src: 'https://haton.ru/custom/dis/brown_horiz1.jpg',
									alt: 'Sber'
								},
								{
									src: 'https://haton.ru/custom/dis/brown_horiz2.jpg',
									alt: 'Cian'
								}
							]
						}
					}
				},
				{
					marginBottom: 'regular',
					content: {
						component: 'base-images-two',
						data: {
							figma:{
								name: '2 изображения - 12 колонок',
								key: '3.1',
								link: 'https://www.figma.com/file/SDAqMglAui4kjwGSuLTKwq/Shuka-%C2%B7-Cases?node-id=630%3A5179',
							},
							type: 'col-12-with-gap-3.1',
							mediaTypes: {},
							images: [
								{
									src: 'https://haton.ru/custom/dis/purple_horiz1.jpg',
									alt: 'Sber'
								},
								{
									src: 'https://haton.ru/custom/dis/purple_horiz2.jpg',
									alt: 'Cian'
								}
							]
						}
					}
				},

			]
		}
		return { rows, windowWidth, mediaType, containerWidth, oneColumnWidth }
	},
	computed: {
		classesParams () {
			return {
				'text-xs': true,
				'text-white': true,
				'last:mr-0 m-1': true
			}
		},
		classesRowMenu(){
			return {
				'p-1 absolute -translate-y-1/2 top-1/2 right-0 w-96 bg-opacity-20 bg-gradient-to-r to-indigo-500 from-purple-500': true,
				'rounded-l-lg': true,
			}
		},
		classesMenuItemActive(){

			let result = {
				'bg-violet-500 text-white' : 'text-gray-900',
				'group flex rounded-md items-center w-full px-2 py-2 text-sm': true,
				'rounded-l-lg': true,

			}

			return result

		}
	}
}
</script>
