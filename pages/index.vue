<template>
	<div class="mx-auto relative flex flex-col items-center justify-center">

		<div class="w-full px-4 py-16">

			<app-row
							v-for="item in rows.items" key="items"

							:background-color="item.backgroundColor"
							:margin-top="item.marginTop"
							:margin-bottom="item.marginBottom"
							:padding-top="item.paddingTop"
							:padding-bottom="item.paddingBottom"
			>

				<template v-slot:main>

				</template>




			</app-row>



		</div>

	</div>
</template>

<script>
import { ArrowNarrowRightIcon } from '@heroicons/vue/outline'
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import AppRow from '../components/base/row/BaseRow'
import {
	RadioGroup,
	RadioGroupLabel,
	RadioGroupDescription,
	RadioGroupOption
} from '@headlessui/vue'

export default {
	components: {
		AppRow
	},

	setup () {
		const router = useRouter()

		let rows = {

			meta: {},
			items: [
				{
					backgroundColor: 'red',
					marginTop: 'regular',
					marginBottom: 'regular',
					paddingTop: 'regular',
					paddingBottom: 'regular',
					content: {
						// component: 'BaseImagesThree'
						component: 'base-images-three'
					}
				},
				{
					backgroundColor: 'green',
					marginTop: 'regular',
					marginBottom: 'regular',
					paddingTop: 'regular',
					paddingBottom: 'regular',
					content: 'content 2'
				}
			]

		}



		return { rows }
	}
}
</script>
