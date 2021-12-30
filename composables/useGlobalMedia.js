import { computed, onMounted, onUnmounted, readonly, ref } from 'vue'

let mediaType = ref(0)
let windowWidth = ref(1)
let containerWidth = ref(2)
let oneColumnWidth = ref(3)
let oneColumnWidthWithoutGap = ref(4)

export default () => {

	onMounted(() => {

		if(typeof window !== 'undefined'){
			const windowWidthRef = ref(document.body.clientWidth)
			const onWidthChange = () => windowWidthRef.value = document.body.clientWidth

			window.addEventListener('resize', onWidthChange)

			const mediaTypeCom = computed(() => {
				if (windowWidthRef.value < 767) return 'xs'
				if (windowWidthRef.value >= 767 && windowWidthRef.value <= 960) return 's'
				if (windowWidthRef.value >= 961 && windowWidthRef.value <= 1279) return 'm'
				if (windowWidthRef.value >= 1280 && windowWidthRef.value <= 1920) return 'l'
				if (windowWidthRef.value > 1920) return 'xl'
			})

			const containerWidthCom = computed(() => {
				if (windowWidthRef.value < 767) return windowWidthRef.value - 48
				if (windowWidthRef.value >= 767 && windowWidthRef.value <= 960) return windowWidthRef.value - 64
				if (windowWidthRef.value >= 961 && windowWidthRef.value <= 1279) return windowWidthRef.value - 96
				if (windowWidthRef.value >= 1280 && windowWidthRef.value <= 1920) return windowWidthRef.value - 160
				if (windowWidthRef.value > 1920) return windowWidthRef.value - 160
			})

			windowWidth.value = computed(() => windowWidthRef.value)
			mediaType.value = computed(() => mediaTypeCom)
			containerWidth.value = computed(() => containerWidthCom)
			oneColumnWidth.value = computed(() => {
				let col = 12
				let gap = 11
				if(mediaTypeCom.value === 'xs'){
					col = 6
					gap = 5
				}
				return (containerWidthCom.value - (gap * 20)) / col
			})

			oneColumnWidthWithoutGap.value = computed(() => {
				// return Math.round((containerWidthCom.value - (11 * 20)) / 12)
				let col = 12
				if(mediaTypeCom.value === 'xs'){
					col = 6
				}
				return containerWidthCom.value / col
			})


		} else {
			windowWidth.value = 1000
			mediaType.value = 'md'
			containerWidth.value = 1000
			oneColumnWidth.value = 1000
			oneColumnWidthWithoutGap.value = 1000
		}

	});

	// onUnmounted(() => window.removeEventListener('resize', onWidthChange))

	return {
		mediaType: readonly(mediaType),
		windowWidth: readonly(windowWidth),
		containerWidth: readonly(containerWidth),
		oneColumnWidth: readonly(oneColumnWidth),
		oneColumnWidthWithoutGap: readonly(oneColumnWidthWithoutGap),
	}
}
