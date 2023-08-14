/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			backgroundImage: {
				'rolling-grass': 'url("/assets/grass.png")'
			},
			backgroundPosition: {
				'rolling-grass': 'bottom center'
			},
			backgroundSize: {
				'rolling-grass': 'cover cover'
			},
			fontFamily: {
				sans: [
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif'
				]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
