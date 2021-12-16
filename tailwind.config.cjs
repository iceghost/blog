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
						h1: {
							color: colors.zinc['600'],
							textTransform: 'uppercase',
							letterSpacing: '2px',
							// fontFamily: 'Calistoga',
						},
						h2: {
							color: colors.zinc['600'],
							textTransform: 'uppercase',
							letterSpacing: '1px',
							// fontFamily: 'Calistoga',
						},
						strong: {
							color: colors.teal['600']
						}
					}
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
