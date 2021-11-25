<template>
	<div class="container">

		<div class="grid grid-cols-12 gap-5 justify-center">
			<img v-for="image in content.data.images" :src="image.src" :alt="image.alt" class="col-span-4 bg-green-300">
		</div>

	</div>

</template>

<script>
export default {
	layout: false,props: {
		content: {
			type: Object,
			required: true
		},
	}
}
</script>
