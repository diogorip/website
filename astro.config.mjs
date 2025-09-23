import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import deno from '@deno/astro-adapter'

// https://astro.build/config
export default defineConfig({
	site: 'https://luvsick.gg',

	output: 'server',
	adapter: deno(),

	vite: {
		plugins: [tailwindcss()]
	}
})
