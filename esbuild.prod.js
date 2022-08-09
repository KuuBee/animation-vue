const esbuild = require('esbuild')
const { readdir, stat } = require('fs/promises');

const filePathList = [];
async function getFilePath(src) {
  const files = await readdir(src)
  const fn = async function* (files) {
    for (const file of files) {
      const path = `${src}/${file}`
      const stats = await stat(path)
      if (stats.isFile()) {
        yield path;
      } else if (stats.isDirectory()) {
        await getFilePath(path)
      }
    }
  }
  for await (path of fn(files)) {
    filePathList.push(path);
  }
  return filePathList
}
getFilePath('./lib').then((filePathList) => {
  esbuild.build({
    tsconfig: "./tsconfig.json",
    entryPoints: filePathList,
    outdir: 'dist',
    format: 'esm',
  })
}).then(() => {
  console.log('打包完成');
}).catch(() => process.exit(1));