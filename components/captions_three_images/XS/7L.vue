<template>
	<div class="mx-auto grid grid-flow-col gap-x-5 overflow-y-auto" ref="galleryRef">
		<div class="mb-5 grid grid-col-6 gap-x-5 carousel"><!--просчитать-->
			<div v-for="(item, key, index) in items.slice(0, 3)"
					 class="absolute left-0 mr-5"
					 :style="{
			width: oneColumnWidthWithoutGap * 4 + 'px',
			paddingLeft: index === 0 ? `${oneColumnWidth}px` : '1px'
		}"
			>
				<div class="w-full">
					<BaseContentDefault :content="item"></BaseContentDefault>
				</div>
				<div class="w-full text-sm mt-2 text-gray-500">
					<BaseContentCaption :content="index + captions[key]"></BaseContentCaption>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { defineProps, onMounted, ref } from 'vue'
import Flickity from 'flickity'
import useGlobalMedia from '../../../composables/useGlobalMedia'

const props = defineProps(['items', 'captions'])
const { oneColumnWidthWithoutGap, oneColumnWidth } = useGlobalMedia()
const galleryRef = ref(null)
onMounted(() => {
	let el = galleryRef.value.querySelector(`.carousel`)
	let fff = new Flickity(el, {
		freeScroll: true,
		contain: true,
		prevNextButtons: false,
		pageDots: false,
		cellAlign: 'left'
	})
	console.log(fff)
})
</script>
<style>
.carousel-cell {
    position: absolute;
    left: 0;
    margin-right: 10px;
}

.flickity-enabled {
    position: relative;
}

.flickity-enabled:focus {
    outline: none;
}

.flickity-viewport {
    overflow: hidden;
    position: relative;
    height: 100%;
}

.flickity-slider {
    position: absolute;
    width: 100%;
    height: 100%;
}

/* draggable */

.flickity-enabled.is-draggable {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
    cursor: move;
    cursor: -webkit-grab;
    cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
    cursor: -webkit-grabbing;
    cursor: grabbing;
}

/* ---- flickity-button ---- */

.flickity-button {
    position: absolute;
    background: hsla(0, 0%, 100%, 0.75);
    border: none;
    color: #333;
}

.flickity-button:hover {
    background: white;
    cursor: pointer;
}

.flickity-button:focus {
    outline: none;
    box-shadow: 0 0 0 5px #19F;
}

.flickity-button:active {
    opacity: 0.6;
}

.flickity-button:disabled {
    opacity: 0.3;
    cursor: auto;
    /* prevent disabled button from capturing pointer up event. #716 */
    pointer-events: none;
}

.flickity-button-icon {
    fill: currentColor;
}

/* ---- previous/next buttons ---- */

.flickity-prev-next-button {
    top: 50%;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    /* vertically center */
    transform: translateY(-50%);
}

.flickity-prev-next-button.previous {
    left: 10px;
}

.flickity-prev-next-button.next {
    right: 10px;
}

/* right to left */
.flickity-rtl .flickity-prev-next-button.previous {
    left: auto;
    right: 10px;
}

.flickity-rtl .flickity-prev-next-button.next {
    right: auto;
    left: 10px;
}

.flickity-prev-next-button .flickity-button-icon {
    position: absolute;
    left: 20%;
    top: 20%;
    width: 60%;
    height: 60%;
}

/* ---- page dots ---- */

.flickity-page-dots {
    position: absolute;
    width: 100%;
    bottom: -25px;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    line-height: 1;
}

.flickity-rtl .flickity-page-dots {
    direction: rtl;
}

.flickity-page-dots .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 8px;
    background: #333;
    border-radius: 50%;
    opacity: 0.25;
    cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
    opacity: 1;
}
</style>

