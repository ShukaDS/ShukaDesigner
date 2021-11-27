import { computed, onMounted, onUnmounted, readonly, ref } from 'vue'

let mediaType = ref(0)
let windowWidth = ref(1)
let containerWidth = ref(2)
let oneColumnWidth = ref(3)

export default () => {

	onMounted(() => {

		if(typeof window !== 'undefined'){
			const windowWidthRef = ref(window.innerWidth)
			const onWidthChange = () => windowWidthRef.value = window.innerWidth

			window.addEventListener('resize', onWidthChange)

			const mediaTypeCom = computed(() => {
				if (windowWidthRef.value < 376) return 'xs'
				if (windowWidthRef.value > 375 && windowWidthRef.value < 769) return 'sm'
				if (windowWidthRef.value > 768 && windowWidthRef.value < 1025) return 'md'
				if (windowWidthRef.value > 1024 && windowWidthRef.value < 1281) return 'lg'
				if (windowWidthRef.value > 1280) return 'xl'
			})

			const containerWidthCom = computed(() => {
				if (windowWidthRef.value < 376) {
					return 400
				}
				if (windowWidthRef.value > 375 && windowWidthRef.value < 769) {
					return 600
				}
				if (windowWidthRef.value > 768 && windowWidthRef.value < 1025) {
					return 800
				}
				if (windowWidthRef.value > 1024 && windowWidthRef.value < 1281) {
					return 1100
				}
				if (windowWidthRef.value > 1280) {
					return 1280
				}
			})

			windowWidth.value = computed(() => windowWidthRef.value)
			mediaType.value = computed(() => mediaTypeCom)
			containerWidth.value = computed(() => containerWidthCom)
			oneColumnWidth.value = computed(() => (parseInt(containerWidthCom) - (11 * 20)) / 12)

		} else {
			windowWidth.value = 1000
			mediaType.value = 'md'
			containerWidth.value = 1000
			oneColumnWidth.value = 1000
		}

	});

	// onUnmounted(() => window.removeEventListener('resize', onWidthChange))

	return {
		mediaType: readonly(mediaType),
		windowWidth: readonly(windowWidth),
		containerWidth: readonly(containerWidth),
		oneColumnWidth: readonly(oneColumnWidth),
	}
}
