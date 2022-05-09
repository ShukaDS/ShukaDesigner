<template>
	<div class="container mx-auto grid grid-cols-6 gap-x-5" v-if="mediaType==='xs'">
		<template>
			<div class="col-span-6">
				<template images>
					<BaseContentDefault></BaseContentDefault>
				</template>
			</div>
			<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="mediaType==='s'">
		<template>
			<div class="col-span-4">
				<template images>
					<BaseContentDefault></BaseContentDefault>
				</template>
			</div>
		</template>
		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template texts>
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="mediaType==='m'">
		<template>
			<div class="col-span-4">
				<template images>
					<BaseContentDefault></BaseContentDefault>
				</template>
			</div>
		</template>
		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template texts>
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="['xl', 'l'].includes(mediaType)">
		<template>
			<div class="col-span-4">
				<template images>
					<BaseContentDefault></BaseContentDefault>
				</template>
			</div>
		</template>

		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template texts>
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>

	<!--7E-->
	<div class="container mx-auto grid grid-flow-col gap-x-5 overflow-y-auto" v-if="mediaType==='xs'">
		<template images>
			<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
				<div class="col-span-6">
					<BaseContentDefault></BaseContentDefault>
				</div>
				<div class="col-span-4 text-sm mt-2 text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>
	</div>
	<div class="container mx-auto grid grid-cols-12 -mb-5" v-if="mediaType==='s'">
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 mt-2 mb-5">
			Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 mt-2 mb-5">
			Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 mt-2">
			Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
		</div>
	</div>
	<!--7F-->
	<div class="container mx-auto grid grid-flow-col gap-x-5  overflow-y-auto" v-if="mediaType==='xs'">
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12" v-if="mediaType==='s'">
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 text-center mt-2 mb-5">
			Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 text-center mt-2 mb-5">
			Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 text-center mt-2">
			Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
		</div>
	</div>
	<!--7G-->
	<div class="container mx-auto" v-if="mediaType==='xs'">
		<div class="grid grid-flow-col gap-x-5  overflow-y-auto	"><!--просчитать-->
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 text-sm text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12" v-if="mediaType==='s'">
		<div class="col-span-4 col-start-4 mb-5">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 mb-5">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 mt-2">
			Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
		</div>
	</div>
	<!--7H-->
	<div class="container mx-auto" v-if="mediaType==='xs'">
		<div class="grid grid-flow-col gap-x-5  overflow-y-auto	"><!--просчитать-->
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12" v-if="mediaType==='s'">
		<div class="col-span-4 col-start-4 mb-5">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 mb-5">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 text-center mt-2">
			Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
		</div>
	</div>
	<!--7I-->
	<div class="container mx-auto grid grid-cols-6 gap-x-5" v-if="mediaType==='xs'">
		<div class="col-span-4 col-start-2">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
			<div class="col-span-4 col-start-2 text-sm text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
		<div class="col-span-4 col-start-2">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
			<div class="col-span-4 col-start-2 text-sm text-gray-500">
				Tadanori Yokoo, <a class="text-black cursor-pointer font-semibold">→ The City and Design</a>, The Wonders of
				Life on Earth, Isamu Kurita, 1966
			</div>
		</div>
		<div class="col-span-4 col-start-2">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 ">
			<div class="col-span-4 col-start-2 text-sm text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<!--7J-->
	<div class="container mx-auto grid grid-cols-6 gap-x-5" v-if="mediaType==='xs'">
		<div class="col-span-4 col-start-2">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
			<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
		<div class="col-span-4 col-start-2">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
			<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
				Tadanori Yokoo, <a class="text-black cursor-pointer font-semibold">→ The City and Design</a>, The Wonders of
				Life on Earth, Isamu Kurita, 1966
			</div>
		</div>
		<div class="col-span-4 col-start-2">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 ">
			<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="mediaType==='s'">
		<!--Просчитать начало с 4 колонки на js-->
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-12  container mx-auto grid grid-cols-12 gap-x-5">
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<!--7K-->
	<div class="container mx-auto grid grid-cols-6 gap-x-5" v-if="mediaType==='xs'">
		<div class="col-span-4 col-start-2 mb-5">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-2 mb-5">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-2">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 ">
			<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="mediaType==='s'">
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-12  container mx-auto grid grid-cols-12 gap-x-5">
			<div class="col-span-4 text-sm text-gray-500 mt-2 text-center">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<!--7L-->
	<div class="container mx-auto grid grid-flow-col gap-x-5  overflow-y-auto" v-if="mediaType==='xs'">
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 text-sm mt-2 text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 text-sm mt-2 text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 text-sm mt-2 text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="mediaType==='s'">
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-12  container mx-auto grid grid-cols-12 gap-x-5">
			<div class="col-span-4 col-start-5 text-sm text-gray-500 mt-2 text-center">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<!--7M-->
	<div class="container mx-auto grid grid-flow-col gap-x-5  overflow-y-auto" v-if="mediaType==='xs'">
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="container mx-auto grid grid-cols-12 gap-x-5" v-if="mediaType==='s'">
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 ">
			<div class="w-full">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-12  container mx-auto grid grid-cols-12 gap-x-5">
			<div class="col-span-4 col-start-5 text-sm text-gray-500 mt-2 text-center">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<!--7N-->
	<div class="container mx-auto" v-if="mediaType==='xs'">
		<div class="grid grid-flow-col gap-x-5  overflow-y-auto	"><!--просчитать-->
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-sm text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<!--7O-->
	<div class="container mx-auto" v-if="mediaType==='xs'">
		<div class="grid grid-flow-col gap-x-5  overflow-y-auto	"><!--просчитать-->
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="w-96">
				<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '7A'
}
</script>
