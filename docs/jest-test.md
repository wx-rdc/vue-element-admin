### Jest Unit Test

原项目中有自动引入固定前缀的组件的插件，需要用到 webpack 的 require.context 函数对文件做检索，然后 babel-jest 是没有的，所以需要引用一个三方的插件来提供这个功能

安装 babel-plugin-require-context-hook

```
npm install babel-plugin-require-context-hook 
```

在测试文件夹内创建文件 tests/unit/lib/register-context.js

```js
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();
```

在 jest.config.js 中配置 jest 预配置，使可以使用 require.context

```yml
setupFiles: ['<rootdir>/tests/unit/lib/register-context.js']
```

在 babel.config.js 中配置 test 环境插件 require-context-hook

```yml
env: {
    test: {
        plugins: ['require-context-hook']
    }
}
```

**其他的一些设置**

因为项目中有引用 element-ui 和 vue-awesome，需要被 babel 解析，排除掉这两个包，在 jest.config.js 中配置

```js
transformIgnorePatterns: [
    'node_modules/(?!(element-ui|vue-awesome)/)'
 ],
```

因为很多测试组件的时候需要引入很多文件或包，所以就提出来 js 文件，类似 vue 的 main.js ，做入口的统一处理，

```js
// 为了方便 单元测试
// eslint-disable-next-line import/extensions
import element from '@/plugins/element'
import baseComponent from '@/plugins/base-component'
import registeSvgIcon from '@/plugins/registe-svg-icon'
import API from '@/request/api'
import axios from '@/request'
import utils from '@/utils'
jest.mock('axios')
export default (Vue) =&gt; {
  element(Vue)
  baseComponent(Vue)
  registeSvgIcon(Vue)
  Vue.prototype.$API = API
  Vue.prototype.axios = axios
  Vue.prototype.$util = utils
}
```

测试文件 tests/unit/hello.spec.js

```js
import { shallowMount, createLocalVue } from '@vue/test-utils'
import './lib/before-test'
```