<template>
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
</template>

<script>
export default {
	name: '7G'
}
</script>
