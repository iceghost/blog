const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			body: ['Athiti', 'sans-serif'],
			disp: ['Calistoga', 'serif']
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: colors.zinc['700'],
						h2: {
							color: colors.zinc['700'],
							textTransform: 'uppercase',
							letterSpacing: '2px'
						}
					}
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
