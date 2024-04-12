import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'

export default defineConfig({
	plugins: [
		babel({
			babelConfig: {
				presets: [['pota/babel-preset']],
			},
		}),
	],
	server: {
		port: 1339,
		open: '/',
	},
	build: {
		target: 'esnext',
	},
	optimizeDeps: {
		disabled: true,
	},
})
