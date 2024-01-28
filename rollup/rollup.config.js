import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

const outputOptions = {
  format: 'es',
  sourcemap: false,
}

const plugins = [
  resolve({}),
  babel({
    babelHelpers: 'bundled',
    // may change lib to solid, oby, flimsy
    presets: [['pota/babel-preset', { lib: 'solid' }]],
  }),
  terser(),
]

export default [
  {
    input: './src/index.jsx',
    plugins,
    output: [
      {
        ...outputOptions,
        file: './dist/index.js',
      },
    ],
  },
]
