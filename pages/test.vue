<template>
	<div>

		<pre>{{ data[0].title }}</pre>

	</div>
</template>

<script setup>
const { data, pending, error, refresh } = await useAsyncData(
	'mountains',
	() => $fetch('https://api.nuxtjs.dev/mountains')
)

</script>
