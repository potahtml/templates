import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default [
  {
    input: './src/index.jsx',
    plugins: [
      resolve({}),
      babel({
        babelHelpers: 'bundled',
        presets: [['pota/babel-preset']],
      }),
      terser(),
    ],
    output: [
      {
        format: 'es',
        sourcemap: true,
        sourcemapExcludeSources: false,
        file: './dist/index.js',
      },
    ],
  },
]
