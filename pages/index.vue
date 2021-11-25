<template>
	<div class="mx-auto relative flex flex-col items-center justify-center">


		<div v-for="item in rows.items" key="items" class="w-full relative">


			<div class="bg-purple-200 p-5 absolute top-1 left-1">
				<!--				<pre>{{ item.content.data }}</pre>-->

				<span class="text-xs  inline-block py-1 px-2  rounded-full text-white bg-red-500  last:mr-0 mr-1"
							v-if="item.content.component">
  			{{ item.content.component }}
			</span>

				<span class="text-xs  inline-block py-1 px-2  rounded-full text-gray-500 bg-gray-200  last:mr-0 mr-1"
							v-if="item.backgroundColor">
  			bg - {{ item.backgroundColor }}
			</span>

				<span class="text-xs  inline-block py-1 px-2  rounded-full text-green-600 bg-green-200  last:mr-0 mr-1"
							v-if="item.paddingTop">
  			pt - {{ item.paddingTop }}
			</span>

				<span class="text-xs  inline-block py-1 px-2  rounded-full text-green-600 bg-green-200  last:mr-0 mr-1"
							v-if="item.paddingBottom">
  			pb - {{ item.paddingBottom }}
			</span>

				<span class="text-xs  inline-block py-1 px-2  rounded-full text-orange-600 bg-yellow-200  last:mr-0 mr-1"
							v-if="item.marginTop">
  			mt - {{ item.marginTop }}
			</span>

				<span class="text-xs  inline-block py-1 px-2  rounded-full text-orange-600 bg-yellow-200  last:mr-0 mr-1"
							v-if="item.marginBottom">
  			mb - {{ item.marginBottom }}
			</span>

				<span class="text-xs  inline-block py-1 px-2  rounded-full text-orange-600 bg-yellow-200  last:mr-0 mr-1"
							v-if="item.content.data.mediaTypes">
  			media - {{ item.content.data.mediaTypes }}
			</span>


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
				{
					backgroundColor: 'green',
					marginTop: 'regular',
					marginBottom: 'regular',
					paddingTop: 'regular',
					paddingBottom: 'regular',
					content: {
						component: 'base-images-two',
						data: {
							images: [
								{
									src: 'https://shuka.design/works_img/2021/10/1634302768Cian 1000x1000.png',
									alt: 'Sber'
								},
								{
									src: 'https://shuka.design/works_img/2021/10/1634302768Cian 1000x1000.png',
									alt: 'Cian'
								}
							]
						}
					}
				},
				{
					backgroundColor: 'green',
					marginTop: 'regular',
					marginBottom: 'regular',
					paddingTop: 'default',
					paddingBottom: 'default',
					content: {
						// component: 'BaseImagesThree'
						component: 'base-images-three',
						data: {
							images: [
								{
									src: 'https://shuka.design/works_img/2021/10/1634302768Cian 1000x1000.png',
									alt: 'Sber'
								},
								{
									src: 'https://shuka.design/works_img/2021/10/1634302768Cian 1000x1000.png',
									alt: 'Cian'
								},
								{
									src: 'https://shuka.design/works_img/2021/10/1634302768Cian 1000x1000.png',
									alt: 'Mainpage'
								}
							]
						}
					}
				},
				{
					backgroundColor: 'green',
					marginTop: 'large',
					marginBottom: 'large',
					paddingTop: 'large',
					paddingBottom: 'large',
					content: {
						// component: 'BaseImagesThree'
						component: 'base-images-three',
						data: {
							mediaTypes: {
								xs: 'mini-1.3A',
								sm: 'mini-1.2A'
							},
							images: [
								{
									src: 'https://shuka.design/works_img/2021/10/1634302768Cian 1000x1000.png',
									alt: 'Sber'
								},
								{
									src: 'https://shuka.design/works_img/2021/10/1634302768Cian 1000x1000.png',
									alt: 'Cian'
								}
							]
						}
					}
				},
				{
					backgroundColor: 'green',
					marginTop: 'large',
					marginBottom: 'large',
					paddingTop: 'large',
					paddingBottom: 'large',
					content: {
						// component: 'BaseImagesThree'
						component: 'base-images-three',
						data: {
							mediaTypes: {
								xs: 'mini-1.3A'
							},
							images: [
								{
									src: 'https://shuka.design/works_img/2021/10/1634302768Cian 1000x1000.png',
									alt: 'Sber'
								}
							]
						}
					}
				}
			]

		}
		return { rows }
	}
}
</script>
