/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md}'],
	theme: {
		extend: {
			backgroundImage: {
				'rolling-grass': 'url("/assets/grass.png")',
				'cloud-one': 'url("/assets/cloud-1.png")',
				'cloud-two': 'url("/assets/cloud-2.png")',
				'hill-one': 'url("/assets/hill-1.png")',
				'hill-two': 'url("/assets/hill-2.png")',
				'hill-three': 'url("/assets/hill-3.png")',
				'bush-one': 'url("/assets/bush-1.png")',
				'bush-two': 'url("/assets/bush-2.png")',
				'bush-three': 'url("/assets/bush-3.png")'
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
