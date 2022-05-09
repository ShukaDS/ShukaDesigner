<template>
	<div>

		<pre>{{ data }}</pre>

		<AppRow

		/>

<!--		<div v-for="item in data" key="items" class="w-full relative grid grid-rows-1">-->

<!--				{{ item }}-->

<!--		</div>-->


	</div>
</template>

<script setup>
const { data, pending, error, refresh } = await useAsyncData(
	'mountains',
	() => $fetch('https://haton.ru/custom/t1/captions.json')
)

</script>
