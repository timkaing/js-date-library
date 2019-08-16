import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/date-lib.js',
    plugins: [terser()],
    output: {
        file: 'umd/your-module.js',
        format: 'umd',
        name: 'yourModule',
        esModule: false
    }
  },
  {
    input: 'src/date-lib.js',
    output: {
      file: 'esm/index.js',
      format: 'esm'
    }
  }
];
