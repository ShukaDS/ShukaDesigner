<template>

	<section :class="classesWrap">

		<div class="container mx-auto">

			<!--			<pre class="text-green-800">{{ globalTypeNowL }}</pre>-->
<!--			<pre>{{ selectedGlobalTypes }}</pre>-->
<!--			<pre>{{ state.item }}</pre>-->
			<!--			<pre>{{ globalTypes }}</pre>-->
			<!--			<pre>{{ state.item }}</pre>-->

			<div class="w-full px-2 py-16 sm:px-0">

				<TabGroup>

					<TabList class="flex space-x-1 rounded-xl bg-zinc-900/40 p-1">
						<Tab
										v-for="step in steps"
										as="template"
										:key="step"
										v-slot="{ selectedStep }"
						>
							<button
											:class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-zinc-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-400 focus:outline-none focus:ring-2',
              selectedStep
                ? 'bg-white shadow'
                : 'text-zinc-100 hover:bg-white/[0.12] hover:text-white',
            ]"
							>
								{{ step.name }}
							</button>
						</Tab>
					</TabList>

					<TabPanels class="mt-2">
						<TabPanel :class="['rounded-xl bg-white px-4 py-16', 'bg-white/70']">
							<div class="w-full">
								<div class="mx-auto w-full max-w-md">
									<RadioGroup v-model="selectedGlobalTypes">
										<div class="space-y-2">
											<RadioGroupOption
															as="template"
															v-for="type in globalTypes"
															:key="type.code"
															:value="type"
															v-slot="{ active, checked }">
												<div
																:class="[
                active
                  ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-zinc-300'
                  : '',
                checked ? 'bg-zinc-900 bg-opacity-75 text-white ' : 'bg-white ',
              ]"
																class="relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none"
												>
													<div class="flex w-full items-center justify-between">
														<div class="flex items-center">
															<div class="text-sm">
																<RadioGroupLabel
																				as="p"
																				:class="checked ? 'text-white' : 'text-gray-900'"
																				class="font-medium"
																>
																	{{ type.name }}
																</RadioGroupLabel>
																<RadioGroupDescription
																				as="span"
																				:class="checked ? 'text-zinc-100' : 'text-gray-500'"
																				class="inline"
																>
																	<!--													<span> {{ type.ram }}/{{ type.cpus }}</span>-->
																	<!--													<span aria-hidden="true"> &middot; </span>-->
																	<!--													<span>{{ type.disk }}</span>-->
																</RadioGroupDescription>
															</div>
														</div>
														<div v-show="checked" class="shrink-0 text-white">
															<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none">
																<circle
																				cx="12"
																				cy="12"
																				r="12"
																				fill="#fff"
																				fill-opacity="0.2"
																/>
																<path
																				d="M7 13l3 3 7-7"
																				stroke="#fff"
																				stroke-width="1.5"
																				stroke-linecap="round"
																				stroke-linejoin="round"
																/>
															</svg>
														</div>
													</div>
												</div>
											</RadioGroupOption>
										</div>
									</RadioGroup>

									<button @click="save"
													class="justify-center w-full mt-12 bg-[#B09773] bg-opacity-80 hover:bg-opacity-100 text-white relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none">
										Далее
									</button>

								</div>
							</div>
						</TabPanel>

						<TabPanel :class="['rounded-xl bg-white px-4 py-16', 'bg-white/70']">
							<div class="grid grid-cols-4 gap-6">
								<card v-for="item in globalTypeNowL" :item="item"></card>
							</div>
						</TabPanel>

						<TabPanel :class="['rounded-xl bg-white px-4 py-16', 'bg-white/70']">
							<div class="grid grid-cols-4 gap-6">
								<card v-for="item in globalTypeNowM" :item="item"></card>
							</div>
						</TabPanel>

						<TabPanel :class="['rounded-xl bg-white px-4 py-16', 'bg-white/70']">
							<div class="grid grid-cols-4 gap-6">
								<card v-for="item in globalTypeNowS" :item="item"></card>
							</div>
						</TabPanel>

						<TabPanel :class="['rounded-xl bg-white px-4 py-16', 'bg-white/70']">
							<div class="grid grid-cols-4 gap-6">
								<card v-for="item in globalTypeNowXS" :item="item"></card>
							</div>
						</TabPanel>

						<TabPanel :class="['rounded-xl bg-white px-4 py-16', 'bg-white/70']">
							<div class="grid grid-cols-4 gap-6">

								<div>
									item
								</div>

							</div>
						</TabPanel>

						<TabPanel :class="['rounded-xl bg-white px-4 py-16', 'bg-white/70']">
							<div class="w-full px-4 py-16">
								финиш
							</div>
						</TabPanel>


					</TabPanels>

				</TabGroup>

			</div>

		</div>

	</section>

</template>

<script>
import useGlobalMedia from '../../composables/useGlobalMedia'
import {
	Listbox,
	ListboxButton,
	ListboxLabel, ListboxOption,
	ListboxOptions,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems, Switch, SwitchGroup, SwitchLabel,
	RadioGroup,
	RadioGroupLabel,
	RadioGroupDescription,
	RadioGroupOption,
	TabGroup,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Popover, PopoverButton, PopoverPanel
} from '@headlessui/vue'
import {
	ArchiveIcon, CheckIcon, ChevronDoubleUpIcon,
	ChevronDownIcon,
	ChevronUpIcon,
	DuplicateIcon,
	PencilIcon, SelectorIcon,
	TrashIcon,
	ViewListIcon,
	PlusCircleIcon
} from '@heroicons/vue/outline/index'
import { ref, reactive, onMounted, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import Card from './Card'

export default {
	layout: false,
	components: {
		Card,
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
		PlusCircleIcon,
		Listbox,
		ListboxLabel,
		ListboxButton,
		ListboxOptions,
		ListboxOption,
		Switch, SwitchGroup, SwitchLabel,
		RadioGroup,
		RadioGroupLabel,
		RadioGroupDescription,
		RadioGroupOption,
		TabGroup,
		TabList,
		Tab,
		TabPanels,
		TabPanel,
		Popover, PopoverButton, PopoverPanel
	},
	async setup (props, context) {
		const { windowWidth, mediaType } = useGlobalMedia()
		const state = reactive({
			item: props.item,
			globalTypes: 'one_images'
		})
		const globalTypes = ref([])
		const steps = ref({
			step1: {
				name: 'Тип блока'
			},
			step2: {
				name: 'xl/l'
			},
			step3: {
				name: 'm'
			},
			step4: {
				name: 's'
			},
			step5: {
				name: 'xs'
			},
			step6: {
				name: 'Наполнение'
			},
			step7: {
				name: 'Финиш'
			}
		})
		const selectedStep = ref(steps[0])
		const selectedType = ref(null)

		const selectedGlobalTypes = ref(null)

		onMounted(async () => {
			console.log(123)
			const response = await fetch('https://z.shuka.design/api/types')
			globalTypes.value = await response.json()
			selectedGlobalTypes.value  = globalTypes.value[0]

			console.log(response)
			// state.globalTypes = await response.json();
		})

		const globalTypeNow = computed(() => {
			const result = globalTypes.value.filter(word => word.key === selectedGlobalTypes.value['key'])
			if (result.length > 0) {
				return result[0]
			} else {
				return []
			}
		})
		const globalTypeNowL = computed(() => {
			const result = globalTypes.value.filter(word => word.key === selectedGlobalTypes.value['key'])
			if (result.length > 0) {
				return result[0].items.L
			} else {
				return []
			}
		})
		const globalTypeNowM = computed(() => {
			const result = globalTypes.value.filter(word => word.key === selectedGlobalTypes.value['key'])
			if (result.length > 0) {
				return result[0].items.M
			} else {
				return []
			}
		})
		const globalTypeNowS = computed(() => {
			const result = globalTypes.value.filter(word => word.key === selectedGlobalTypes.value['key'])
			if (result.length > 0) {
				return result[0].items.S
			} else {
				return []
			}
		})
		const globalTypeNowXS = computed(() => {
			const result = globalTypes.value.filter(word => word.key === selectedGlobalTypes.value['key'])
			if (result.length > 0) {
				return result[0].items.XS
			} else {
				return []
			}
		})
		// const illustrations = require.context(
		// 	'@/assets/images/',
		// 	true,
		// 	/^.*\.jpg$/
		// )
		// console.log(illustrations.keys())

		return {
			state,
			windowWidth, mediaType,
			selectedStep,
			selectedType,
			globalTypes,
			globalTypeNow,
			globalTypeNowL,
			globalTypeNowS,
			globalTypeNowM,
			globalTypeNowXS,
			selectedGlobalTypes,
			// steps
			steps,
		}
	},
	props: {
		type: {
			type: Object,
			required: false
		},
		item: {
			type: Object
		}
	},
	computed: {
		classesWrap () {
			let self = this
			let result
			result = {
				'w-full': true,
				'pt-v96': true,
				'pb-v96': true,
				'bg-gradient-to-r from-zinc-100 to-zinc-200': true
			}
			return result
		}
	},
	methods: {
		save () {
			let self = this
			console.log(self.state.item)
			console.log(self.state.items)
		}
	}
}
</script>
