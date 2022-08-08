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
})
  .then(() => {
    console.log('打包完成');
  }).catch(() => process.exit(1));