<template>

	<section :class="classesWrap" :style="styleWrap">

				<pre>{{ mediaType }}</pre>
		<!--		<pre class="text-orange-500">2{{ data }}</pre>-->
		<!--		<pre class="text-orange-500">2{{ data[mediaType] }}</pre>-->
				<pre class="text-red-500">{{ currentComponent }}</pre>
		<!--		<pre class="text-green-600">4{{ content }}</pre>-->

		<component :is="currentComponent" :items="content.items" :captions="content.captions"></component>
		<!--			<CaptionsTwoImagesXS4C :items="[1]" :captions="[1]"></CaptionsTwoImagesXS4C>-->

	</section>

</template>

<script>
import useGlobalMedia from '../../../composables/useGlobalMedia'

export default {
	layout: false,
	setup () {
		const { windowWidth, mediaType } = useGlobalMedia()
		return { windowWidth, mediaType }
	},
	props: {
		data: {
			type: Object
		},
		content: {
			type: Object
		},
		marginTop: {
			type: String,
			required: false,
			default: () => {
				return 'default'
			}
		},
		marginBottom: {
			type: String,
			required: false,
			default: () => {
				return 'default'
			}
		},
		paddingTop: {
			type: String,
			required: false,
			default: () => {
				return 'default'
			}
		},
		paddingBottom: {
			type: String,
			required: false,
			default: () => {
				return 'default'
			}
		},
		backgroundColor: {
			type: String,
			require: false
		}
	},
	computed: {
		classesWrap () {
			let self = this
			let result
			result = {
				'w-full': true
				// 'hover:outline-black	': true
			}
			result = self.createMargin(result)
			result = self.createPadding(result)
			result = self.createBackground(result)
			return result
		},
		styleWrap () {
			if (typeof this.backgroundColor !== 'undefined') {
				return {
					'background-color': this.backgroundColor
				}
			} else {
				return {}
			}
		},
		currentComponent () {
			let self = this
			const a = self.data[self.mediaType]
			if (typeof a !== 'undefined') {
				return self.data[self.mediaType].componentName
			} else {
				return 'default'
			}
		}
	},
	methods: {
		createPadding (result) {
			let self = this
			switch (self.paddingTop) {
				case 'small' :
					result['pt-v20'] = true
					break
				case 'medium' :
					switch (self.mediaType) {
						case 'xs' :
						case 's' :
						case 'm' :
							result['pt-v32'] = true
							break
						case 'l' :
						case 'xl' :
							result['pt-v48'] = true
					}
					break
				case 'large' :
					switch (self.mediaType) {
						case 'xs' :
							result['pt-v64'] = true
							break
						case 's' :
						case 'm' :
							result['pt-v48'] = true
							break
						case 'l' :
						case 'xl' :
							result['pt-v72'] = true
					}
					break
				case 'extra-large' :
					switch (self.mediaType) {
						case 'xs' :
							result['pt-v64'] = true
							break
						case 's' :
						case 'm' :
							result['pt-v96'] = true
							break
						case 'l' :
						case 'xl' :
							result['pt-v144'] = true
					}
			}
			switch (self.paddingBottom) {
				case 'small' :
					result['pb-v20'] = true
					break
				case 'medium' :
					switch (self.mediaType) {
						case 'xs' :
						case 's' :
						case 'm' :
							result['pb-v32'] = true
							break
						case 'l' :
						case 'xl' :
							result['pb-v48'] = true
					}
					break
				case 'large' :
					switch (self.mediaType) {
						case 'xs' :
							result['pb-v64'] = true
							break
						case 's' :
						case 'm' :
							result['pb-v48'] = true
							break
						case 'l' :
						case 'xl' :
							result['pb-v72'] = true
					}
					break
				case 'extra-large' :
					switch (self.mediaType) {
						case 'xs' :
							result['pb-v64'] = true
							break
						case 's' :
						case 'm' :
							result['pb-v96'] = true
							break
						case 'l' :
						case 'xl' :
							result['pb-v144'] = true
					}
			}
			return result
		},
		createMargin (result) {
			let self = this
			switch (self.marginTop) {
				case 'small' :
					result['mt-v20'] = true
					break
				case 'medium' :
					switch (self.mediaType) {
						case 'xs' :
						case 's' :
						case 'm' :
							result['mt-v32'] = true
							break
						case 'l' :
						case 'xl' :
							result['mt-v48'] = true
					}
					break
				case 'large' :
					switch (self.mediaType) {
						case 'xs' :
							result['mt-v64'] = true
							break
						case 's' :
						case 'm' :
							result['mt-v48'] = true
							break
						case 'l' :
						case 'xl' :
							result['mt-v72'] = true
					}
					break
				case 'extra-large' :
					switch (self.mediaType) {
						case 'xs' :
							result['mt-v64'] = true
							break
						case 's' :
						case 'm' :
							result['mt-v96'] = true
							break
						case 'l' :
						case 'xl' :
							result['mt-v144'] = true
					}
			}
			switch (self.marginBottom) {
				case 'small' :
					result['mb-v20'] = true
					break
				case 'medium' :
					switch (self.mediaType) {
						case 'xs' :
						case 's' :
						case 'm' :
							result['mb-v32'] = true
							break
						case 'l' :
						case 'xl' :
							result['mb-v48'] = true
					}
					break
				case 'large' :
					switch (self.mediaType) {
						case 'xs' :
							result['mb-v64'] = true
							break
						case 's' :
						case 'm' :
							result['mb-v48'] = true
							break
						case 'l' :
						case 'xl' :
							result['mb-v72'] = true
					}
					break
				case 'extra-large' :
					switch (self.mediaType) {
						case 'xs' :
							result['mb-v64'] = true
							break
						case 's' :
						case 'm' :
							result['mb-v96'] = true
							break
						case 'l' :
						case 'xl' :
							result['mb-v144'] = true
					}
			}
			return result
		},
		createBackground (result) {
			let self = this
			if (typeof self.backgroundColor !== 'undefined') {
				// result[`bg-[${self.backgroundColor}]`] = true
			}
			return result
		}
	}
}
</script>
