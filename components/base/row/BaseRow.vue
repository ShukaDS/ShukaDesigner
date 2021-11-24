<template>

	<div :class="classesWrap" :style="stylesWrap">

		<keep-alive>
			<component :is="currentComponent"></component>
		</keep-alive>

		<button @click="create">+</button>
	</div>

</template>

<script>
export default {
	layout: false,
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
				return 'regular'
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
				return 'regular'
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
				return 'regular'
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
				return 'regular'
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
				'w-full': true,
				'h-24': true
			}
			result = self.createMargin(result)
			result = self.createPadding(result)
			return result
		},
		stylesWrap () {
			return this.createBackground({})
		},
		currentComponent () {
			return this.content.component
		}
	},
	methods: {
		createPadding (result) {
			let self = this
			switch (self.paddingTop) {
				case 'regular' :
					result['pt-5'] = true
					break
				case 'large' :
					result['pt-10'] = true
			}
			switch (self.paddingBottom) {
				case 'regular' :
					result['pb-5'] = true
					break
				case 'large' :
					result['pb-10'] = true
			}
			return result
		},
		createMargin (result) {
			let self = this
			switch (self.marginTop) {
				case 'regular' :
					result['mt-5'] = true
					break
				case 'large' :
					result['mt-10'] = true
			}
			switch (self.marginBottom) {
				case 'regular' :
					result['mb-5'] = true
					break
				case 'large' :
					result['mb-10'] = true
			}
			return result
		},
		createBackground () {
			let self = this
			let result
			if (typeof self.backgroundColor !== 'undefined') {
				result['backgroundColor'] = self.backgroundColor
			}
			return result
		},
		create () {
			alert(3)
		}
	}
}
</script>
