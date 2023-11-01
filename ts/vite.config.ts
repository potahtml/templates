import { defineConfig } from 'vite'
import babel from 'vite-plugin-babel'

export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        presets: [['pota/babel-preset', { lib: 'solid' }]],
      },
    }),
  ],
  server: {
    port: 1337,
    open: '/',
  },
  build: {
    target: 'esnext',
  },
  optimizeDeps: {
    disabled: true,
  },
})
