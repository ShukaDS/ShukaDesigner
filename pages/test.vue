<template>
	<div>

		<pre>{{ data }}</pre>

	</div>
</template>

<script setup>
const { data, pending, error, refresh } = await useAsyncData(
	'mountains',
	() => $fetch('https://haton.ru/custom/t1/captions.json')
)

</script>
