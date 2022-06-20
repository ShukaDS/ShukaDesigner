<template>
	<div>

		<FirstScreen
						:cover-title="meta.cover_title"
						:cover-type="meta.cover_type"
						:cover-media="meta.cover"
						:cover-ratio="meta.cover_ratio" :cover-dark="meta.cover_dark"
		></FirstScreen>

		<div v-for="item in items" class="w-full relative grid grid-rows-1">

			<BaseRowqwe
							:background-color="item.bg"
							:margin-top="item.mt"
							:margin-bottom="item.mb"
							:padding-top="item.pt"
							:padding-bottom="item.pb"
							:content="item.contents" :label="item.label"
							:data="item.data"
			></BaseRowqwe>

		</div>

		<section class="mt-24 mb-24 gerbera-shuka text-sm md:text-lg text-black">
			<div class="container mx-auto grid md:grid-cols-2 gap-x-5">

				<!--
				<div class="mb-16 md:mt-0">
					<div class="flex flex-col">
						<div class="uppercase mb-4 font-bold">Sber</div>
						<div class="grid grid-cols-2 gap-x-5 py-4 border-t border-t-[#949494]">
							<div>Anastasia Butrym</div>
							<div class="text-[#6e6e6e]">Design direction</div>
						</div>
					</div>
					<div class="flex flex-col mt-16 md:mt-[74px]">
						<div class="uppercase mb-4 font-bold">LANDOR &amp; FITCH</div>
						<div class="grid grid-cols-2 gap-x-5 py-4 border-t border-t-[#949494]">
							<div>Nicolas Zeus</div>
							<div class="text-[#6e6e6e]">Design direction</div>
						</div>
					</div>
				</div>
				-->

				<div></div>
				<div>
					<div class="flex flex-col">
						<div class="uppercase mb-4 font-bold">SHUKA</div>

						<template v-for="item in credits.inside">
							<div class="grid grid-cols-2 gap-x-5 py-4 border-t border-t-[#949494]" v-if="item.id !== null">
								<a v-if="teamMembers[item.id]" href="{{ teamMembers[item.id].link }}">{{ teamMembers[item.id].name }}</a>
								<div class="text-[#6e6e6e]">{{item.position}}</div>
							</div>
						</template>

					</div>

					<!--
					<div class="flex flex-col mt-16 md:mt-[74px]">
						<div class="grid grid-cols-2 gap-x-5 py-4 border-t border-t-[#949494]">
							<div class="uppercase">
								<a href="#">Superdesigners</a>
							</div>
							<div class="text-[#6e6e6e]">
								2D, 3D Illustrations &amp; Animation
							</div>
						</div>
						<div class="grid grid-cols-2 gap-x-5 py-4 border-t border-t-[#949494]">
							<div class="uppercase">
								<a href="#">Superdesigners</a>
							</div>
							<div class="text-[#6e6e6e]">
								2D, 3D Illustrations &amp; Animation
							</div>
						</div>
						<div class="grid grid-cols-2 gap-x-5 py-4 border-t border-t-[#949494]">
							<div class="uppercase">
								<a href="#">Superdesigners</a>
							</div>
							<div class="text-[#6e6e6e]">
								2D, 3D Illustrations &amp; Animation
							</div>
						</div>
					</div>
					-->

				</div>
			</div>
		</section>

	</div>
</template>

<script>
import { ref } from 'vue'
import { useFetch } from '@vueuse/core'
import useGlobalMedia from '../../composables/useGlobalMedia'
import FirstScreen from '../../components/Base/Content/FirstScreen'

export default {
	components: { FirstScreen },
	async setup () {
		const items = ref([])
		const meta = ref([])
		const credits = ref(null)
		const teamMembers = ref(null)
		const route = useRoute()
		const response = await fetch(`https://z.shuka.design/api/work/${route.params.id}`)
		const data = await response.json()
		console.log(data)
		items.value = data.items
		meta.value = data.meta
		credits.value = data.credits
		teamMembers.value = data.teamMembers
		console.log(items)
		const { windowWidth, mediaType } = useGlobalMedia()
		return {
			items, meta, windowWidth, mediaType, credits, teamMembers
		}
	}
}
</script>

<style>
.gertrude {
    font-family: "Gertrude", sans-serif;
}

@media (min-width: 768px) {
    .md\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

</style>
