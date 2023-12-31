import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Thoth Tech',
			logo: {
				dark: './src/assets/logo-dark-theme.png',
				light: './src/assets/logo-light-theme.png'
			},
			social: {
				github: 'https://github.com/thoth-tech',
			},
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'Products', link: '/home/products/'},
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
