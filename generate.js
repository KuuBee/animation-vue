const fs = require('fs')
const animateList = require('./animate-list.json')


function generateDirectivesFiles() {
  for (const { defalutName, directiveName } of animateList) {
    const content = `import type { Plugin } from "vue";

import { baseObjectDirective } from "../common/base-object-directive";

export const ${defalutName} = baseObjectDirective("${defalutName}");
export const ${defalutName}Directive: Plugin = {
  install(app) {
    app.directive("${directiveName}", ${defalutName});
  }
};`
    try {
      fs.writeFileSync(`./lib/directives/${directiveName}.ts`, content)
    } catch (error) {
      console.log('文件写入失败');
    }
  }
}
function generateMainTS() {
  const content = `import type { Plugin } from "vue";
import { GlobalAnimateConfig, AnimateConfig } from "./common/config";
// 导入指令
${animateList.map(({ defalutName, directiveName }) => {
    return `import { ${defalutName}Directive } from "./directives/${directiveName}";\n`
  }).join('')}
export const vueAnimateCss = (config?: GlobalAnimateConfig): Plugin => ({
  install(app) {
    config?.initConfig();
    // 注册指令
${animateList.map(({ defalutName }) => {
    return `    app.use(${defalutName}Directive);\n`
  }).join('')}
  }
});

export {
  GlobalAnimateConfig,
  AnimateConfig,
${animateList.map(({ defalutName, directiveName }) => {
    return `  ${defalutName}Directive,\n`
  }).join('')}}\n`
  fs.writeFileSync(`./lib/main.ts`, content)
}
generateDirectivesFiles();
generateMainTS();