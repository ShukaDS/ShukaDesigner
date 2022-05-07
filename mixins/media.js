import { computed, onMounted, onUnmounted, ref } from 'vue'

const globalMedia = {
	data() {
		return {
			mediaType123: null,
			foo: 'abc'
		}
	},
	computed: {
		mediaType123(){

			return 123

		}
	},
	methods: {

	},
	setup(){

		if(typeof window !== 'undefined'){
			let windowWidth = ref(window.innerWidth)
			const onWidthChange = () => windowWidth.value = window.innerWidth
			onMounted(() => window.addEventListener('resize', onWidthChange))
			onUnmounted(() => window.removeEventListener('resize', onWidthChange))
			const mediaType = computed(() => {
				if (windowWidth.value < 376) return 'sm'
				if (windowWidth.value > 769 && windowWidth.value < 1025) return 'md'
				if (windowWidth.value > 1024 && windowWidth.value < 1281) return 'lg'
				if (windowWidth.value > 1280) return 'xl'
			})
			const width = computed(() => windowWidth.value)

			return { width, mediaType }

		} else {

			const mediaType =  'md'
			const widthWindow =  '1000'
			return { widthWindow, mediaType }

		}

	},
	mounted () {




	}
}

export default globalMedia
