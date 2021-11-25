import { computed, onMounted, onUnmounted, ref } from 'vue'

export default function () {

	if(typeof window !== 'undefined'){
		let windowWidth = ref(window.innerWidth)
		const onWidthChange = () => windowWidth.value = window.innerWidth
		onMounted(() => window.addEventListener('resize', onWidthChange))
		onUnmounted(() => window.removeEventListener('resize', onWidthChange))
		const type = computed(() => {
			if (windowWidth.value < 376) return 'sm'
			if (windowWidth.value > 769 && windowWidth.value < 1025) return 'md'
			if (windowWidth.value > 1024 && windowWidth.value < 1281) return 'lg'
			if (windowWidth.value > 1280) return 'xl'
		})
		const width = computed(() => windowWidth.value)
		return { width, type }
	} else {
		let  width = 1000
		let  type = 'xs'
		setTimeout(function (){
			width = 22000
			type = '22xs'
		}, 4000)
		return { width, type }
	}

}
