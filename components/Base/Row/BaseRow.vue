<template>

	<section :class="classesWrap" :data-com="currentComponent">

		<keep-alive>
			<component :is="currentComponent" :content="content"></component>
		</keep-alive>

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
		content: {
			type: Object,
			required: false
		},
		/*
		regular
		large
		 */
		marginTop: {
			type: String,
			required: false,
			default: () => {
				return 'default'
			}
		},
		/*
		regular
		large
		 */
		marginBottom: {
			type: String,
			required: false,
			default: () => {
				return 'default'
			}
		},
		/*
		regular
		large
		 */
		paddingTop: {
			type: String,
			required: false,
			default: () => {
				return 'default'
			}
		},
		/*
		regular
		large
		 */
		paddingBottom: {
			type: String,
			required: false,
			default: () => {
				return 'default'
			}
		},
		/*
		regular
		large
		 */
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
		currentComponent () {
			return this.content.component
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
				result[`bg-[${self.backgroundColor}]`] = true
			}
			return result
		}
	}
}
</script>
