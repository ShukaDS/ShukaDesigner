<template>
	<div class="w-full" v-if="mediaType==='xs'">
		<div class="w-full">
			<div class="w-2/3"><!--просчитать-->
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="container mx-auto grid grid-cols-6 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-x-5" v-if="mediaType==='s'">
		<div class="w-full">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-x-5" v-if="mediaType==='m'">
		<div>
			<img class="w-full"
					 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
		</div>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-x-5" v-if="['xl', 'l'].includes(mediaType)">
		<div class="w-full">
			<div class="w-full">
				<img class="w-full"
						 src="https://img03.rl0.ru/afisha/e1500x600i/daily.afisha.ru/uploads/images/7/a3/7a3d63af783f417c93499a559275817d.jpg">
			</div>
		</div>
		<div class="col-span-2 container mx-auto grid grid-cols-12 gap-x-5 mt-2">
			<div class="col-span-4 col-start-2 text-sm text-gray-500 text-center">
				Tadanori Yokoo exhibition poster at MoMA, 1972 by Japanese artist Tadanori Yokoo
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: '2B'
}
</script>
