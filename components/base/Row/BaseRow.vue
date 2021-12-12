<template>

	<div :class="classesWrap">

		<keep-alive>
			<component :is="currentComponent" :content="content"></component>
		</keep-alive>

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
				'w-full': true,
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
				case 'regular' :
					result['pt-72'] = true
					break
				case 'large' :
					result['pt-144'] = true
			}
			switch (self.paddingBottom) {
				case 'regular' :
					result['pb-72'] = true
					break
				case 'large' :
					result['pb-144'] = true
			}
			return result
		},
		createMargin (result) {
			let self = this
			switch (self.marginTop) {
				case 'regular' :
					result['mt-72'] = true
					break
				case 'large' :
					result['mt-144'] = true
			}
			switch (self.marginBottom) {
				case 'regular' :
					result['mb-72'] = true
					break
				case 'large' :
					result['mb-144'] = true
			}
			return result
		},
		createBackground (result) {
			let self = this
			if (typeof self.backgroundColor !== 'undefined') {
				// result[`bg-${self.backgroundColor}-300`] = true
				result[`bg-gray-200`] = true
			}
			return result
		},
		create () {
			alert(3)
		}
	},

}
</script>
