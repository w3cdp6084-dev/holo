// svelte.config.cjs
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    typescript: {
      tsconfigFile: './tsconfig.json',
    },
    sass: true,
    scss: {
      prependData: `@import 'src/styles/main.scss';`
    },
  }),
};
