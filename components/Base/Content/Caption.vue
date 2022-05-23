<template>
	<span v-html="content"></span>
	<!--	<pre>{{ content }}</pre>-->
</template>

<script>
// <!--    Tadanori Yokoo, <a class="text-black cursor-pointer font-semibold">→ The City and Design</a>, The Wonders of Life on Earth, Isamu Kurita, 1966-->
import { defineComponent } from 'vue'

export default defineComponent({
	props: {
		content: Object
	}
})
</script>
