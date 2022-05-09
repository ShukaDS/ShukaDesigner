<template>

	<div v-if="isActive('xs', 'default')" class="container mx-auto grid grid-cols-6 gap-x-5">
		<template v-for="(item, key) in items">
			<div class="col-span-6">
				<BaseContentDefault></BaseContentDefault>
			</div>
			<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</div>
		</template>

	</div>

	<div v-if="isActive('s', 'default')" class="container mx-auto grid grid-cols-12 gap-x-5">
		<template v-for="(item, key) in items">
			<div class="col-span-4">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>

		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>

	<div v-if="isActive('m', 'default')" class="container mx-auto grid grid-cols-12 gap-x-5">
		<template v-for="(item, key) in items">
			<div class="col-span-4">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>
		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>

	<div v-if="isActive('l', 'default') || isActive('xl', 'default')" class="container mx-auto grid grid-cols-12 gap-x-5">

		<template v-for="(item, key) in items">
			<div class="col-span-4">
				<BaseContentDefault></BaseContentDefault>
			</div>
		</template>

		<div class="col-span-12 grid grid-cols-12 gap-x-5 mt-2">
			<template v-for="(item, key) in items">
				<div class="col-span-4 text-sm text-gray-500">
					<BaseContentCaption></BaseContentCaption>
				</div>
			</template>
		</div>
	</div>

	<!--7E-->
	<div v-if="isActive('xs', '7E')"
			 class="container mx-auto grid grid-flow-col gap-x-5 overflow-y-auto">
		<template v-for="(item, key) in items">
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
	<div v-if="isActive('s', '7E')" class="container mx-auto grid grid-cols-12 -mb-5">
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 mt-2 mb-5">
			<BaseContentCaption></BaseContentCaption>
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 mt-2 mb-5">
			<BaseContentCaption></BaseContentCaption>
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 mt-2">
			<BaseContentCaption></BaseContentCaption>
		</div>
	</div>
	<!--7F-->
	<div v-if="isActive('xs', '7F')"
			 class="container mx-auto grid grid-flow-col gap-x-5  overflow-y-auto">
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '7F')" class="container mx-auto grid grid-cols-12">
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 text-center mt-2 mb-5">
			<BaseContentCaption></BaseContentCaption>
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 text-center mt-2 mb-5">
			<BaseContentCaption></BaseContentCaption>
		</div>
		<div class="col-span-4 col-start-4">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-4 col-start-4 text-sm text-gray-500 text-center mt-2">
			<BaseContentCaption></BaseContentCaption>
		</div>
	</div>
	<!--7G-->
	<div v-if="isActive('xs', '7G')" class="container mx-auto">
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
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '7G')" class="container mx-auto grid grid-cols-12">
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
			<BaseContentCaption></BaseContentCaption>
		</div>
	</div>
	<!--7H-->
	<div v-if="isActive('xs', '7H')" class="container mx-auto">
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
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '7H')" class="container mx-auto grid grid-cols-12">
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
			<BaseContentCaption></BaseContentCaption>
		</div>
	</div>
	<!--7I-->
	<div v-if="isActive('xs', '7I')" class="container mx-auto grid grid-cols-6 gap-x-5">
		<div class="col-span-4 col-start-2">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
			<div class="col-span-4 col-start-2 text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
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
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--7J-->
	<div v-if="isActive('xs', '7J')" class="container mx-auto grid grid-cols-6 gap-x-5">
		<div class="col-span-4 col-start-2">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-6 grid grid-cols-6 gap-x-5 mt-2 mb-5">
			<div class="col-span-4 col-start-2 text-center text-sm text-gray-500">
				<BaseContentCaption></BaseContentCaption>
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
				<BaseContentCaption></BaseContentCaption>
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
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '7J')" class="container mx-auto grid grid-cols-12 gap-x-5">
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
				<BaseContentCaption></BaseContentCaption>
			</div>
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				<BaseContentCaption></BaseContentCaption>
			</div>
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--7K-->
	<div v-if="isActive('xs', '7K')" class="container mx-auto grid grid-cols-6 gap-x-5">
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
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '7K')" class="container mx-auto grid grid-cols-12 gap-x-5">
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
				<BaseContentCaption></BaseContentCaption>
			</div>
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				<BaseContentCaption></BaseContentCaption>
			</div>
			<div class="col-span-4 text-sm text-gray-500 mt-2">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--7L-->
	<div v-if="isActive('xs', '7L')" class="container mx-auto grid grid-flow-col gap-x-5  overflow-y-auto">
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 text-sm mt-2 text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 text-sm mt-2 text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 text-sm mt-2 text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '7L')" class="container mx-auto grid grid-cols-12 gap-x-5">
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
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--7M-->
	<div v-if="isActive('s', '7M')" class="container mx-auto grid grid-flow-col gap-x-5  overflow-y-auto">
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
		<div class="w-96 mb-5 grid grid-col-6 gap-x-5"><!--просчитать-->
			<div class="col-span-6">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
			<div class="col-span-4 col-start-2 text-center text-sm mt-2 text-gray-500">
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<div v-if="isActive('s', '7M')" class="container mx-auto grid grid-cols-12 gap-x-5">
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
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--7N-->
	<div v-if="isActive('xs', '7N')" class="container mx-auto">
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
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
	<!--7O-->
	<div v-if="isActive('xs', '7O')" class="container mx-auto">
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
				<BaseContentCaption></BaseContentCaption>
			</div>
		</div>
	</div>
</template>

<script>
import useGlobalMedia from '../../../../../composables/useGlobalMedia'

export default {
	name: '7A',
	layout: false,
	props: {
		content: {
			type: Object,
			required: true
		}
	},
	computed: {
		isActive () {
			const self = this
			return (media, type) => {
				if (self.mediaType === media && type === 'default') {
					return true
				}
			}
		},
		items () {
			return this.content.data.items
		}
	},
	setup () {
		const { windowWidth, mediaType } = useGlobalMedia()
		return { windowWidth, mediaType }
	}
}
</script>
