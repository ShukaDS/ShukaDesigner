const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	corePlugins: {
		container: false
	},
	// purge: {
	// 	enabled: true,
	// 	// content: ['./src/**/*.html'],
	// 	safelist: [
	// 		'bg-red-300',
	// 		'bg-purple-300',
	// 		'text-center',
	// 		'hover:opacity-100',
	// 		// ...
	// 		'lg:text-right',
	// 	]
	// },
	content: {
		files: [
			"./components/**/*.{vue,js}",
			"./layouts/**/*.vue",
			"./pages/**/*.vue",
			"./app.vue",
			"./plugins/**/*.{js,ts}",
			"./nuxt.config.{js,ts}",
		],
	},
	theme: {
		fontSize: {
			'base': ['18px', { lineHeight: '26px', }],
			'l': ['20px', { lineHeight: '28px', }],
		},
		extend: {
			fontFamily: {
				sans: ['"Gerbera"', ...defaultTheme.fontFamily.sans]
			},
			spacing: {
				'v20': '20px',
				'v32': '32px',
				'v48': '48px',
				'v64': '64px',
				'v72': '72px',
				'v96': '96px',
				'v144': '144px',
			},
			container: false
		},
		screens: {
			'xs': '0px',
			's': '767px',
			'm': '961px',
			'l': '1280px',
			'xl': '1921px'
		}
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen xs': {
						paddingLeft: '24px',
						paddingRight: '24px',
					},
					'@screen s': {
						paddingLeft: '32px',
						paddingRight: '32px',
					},
					'@screen m': {
						paddingLeft: '48px',
						paddingRight: '48px',
					},
					'@screen l': {
						paddingLeft: '80px',
						paddingRight: '80px',
					},
					'@screen xl': {
						maxWidth: '1920px',
						paddingLeft: '80px',
						paddingRight: '80px',
					},
				}
			})
		}
	],
};

// 	xs: '24px',
// 	s: '32px',
// 	m: '48px',
// 	l: '80px',
// 	xl: '80px',
// },

// screens: {
// 	'sm': '100%',
// 	's': '100%',
// 	'm': 'calc(100% - 96px)',
// 	'l': '100%',
// 	'xl': '1921px',
