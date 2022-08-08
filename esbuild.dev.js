const esbuild = require('esbuild')

esbuild.build({
  tsconfig: "./tsconfig.json",
  entryPoints: [
    './lib/main.ts',
    './lib/directives/bounce.ts',
    './lib/directives/flash.ts',
    './lib/common/base-object-directive.ts',
    './lib/common/config.ts',
  ],
  outdir: 'dist',
  format: 'esm',
  watch: true,
})
  .then(() => {
    console.log('dev 监听中。。。');
  }).catch(() => process.exit(1));