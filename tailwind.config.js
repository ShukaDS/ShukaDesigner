const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
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
		extend: {
			fontFamily: {
				sans: ['"Gerbera"', ...defaultTheme.fontFamily.sans]
			},
			spacing: {
				'72': '72px',
				'144': '144px',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '6rem',
				},
			},
		},
		screens: {
			'sm': '375px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
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
	],
};
