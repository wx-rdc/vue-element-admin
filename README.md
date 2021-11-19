## Vue Element Admin

[![Vue](https://img.shields.io/badge/vue-2.6.10-brightgreen.svg)](https://github.com/vuejs/vue)
[![ElementUI](https://img.shields.io/badge/element--ui-2.7.0-brightgreen.svg)](https://github.com/ElemeFE/element)
[![Build Status](https://app.travis-ci.com/wx-rdc/vue-element-admin.svg?branch=master)](https://app.travis-ci.com/wx-rdc/vue-element-admin)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/wx-rdc/vue-element-admin/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/wx-rdc/vue-element-admin.svg)](https://github.com/wx-rdc/vue-element-admin/releases)

### 开发起步

**开发环境**

项目是基于 `vue 2` 开发的
```js
"vue": "^2.6.10",
"vue-count-to": "^1.0.13",
"vue-i18n": "^8.26.7",
"vue-router": "^3.0.7",
"vue-transition.css": "^1.0.2",
"vuex": "^3.1.1",
```

使用 `Element UI 2`作为界面组件
```js
"element-ui": "^2.10.1",
```

使用 `Nodejs` 作为开发服务，请确保开发环境版本如下所示：
```
node v12.20.1
npm 6.14.10
yarn 1.22.5
```

**核心组件**

```js
// 网络请求库
"axios": "^0.18.1",

// 系统剪贴板
"clipboard": "^2.0.8",

// 加密库
"crypto-js": "^4.1.1",

// a storage lib which support sessionStorage and localStorage with the same api
"good-storage": "^1.1.0",

// A simple, lightweight JavaScript API for handling cookies
"js-cookie": "^3.0.1",

// 时间函数库
"moment": "^2.29.1",

// 格式化css显示
"normalize.css": "^8.0.1",

// 进度条
"nprogress": "^0.2.0",

// A querystring parsing and stringifying library with some added security.
"qs": "^6.7.0",

// 全屏组件
"screenfull": "5.2.0",
```

**第三方组件**

项目示例的第三方组件，如果实际项目中不需要，可以删除对应组件。

```js
// ECharts 图表库
"echarts": "^4.2.1",

// 日历组件 `FullCalendar v5`
"@fullcalendar/core": "^5.10.1",
"@fullcalendar/daygrid": "^5.10.1",
"@fullcalendar/interaction": "^5.10.1",
"@fullcalendar/timegrid": "^5.10.1",
"@fullcalendar/vue": "^5.10.1",
"date-fns": "^2.25.0",

// 日历组件 `FullCalendar v3`
"vue-full-calendar": "^2.8.1-0",

// 富文本编辑器Tinymce
"@tinymce/tinymce-vue": "3.2.8",
"tinymce": "^5.10.1",

// 富文本编辑器quill
"vue-quill-editor": "^3.0.6",
"quill": "^1.3.7",

// 电子表格格式的解析器和编写器
"xlsx": "^0.17.3",
"file-saver": "^2.0.5",
```

**风格指南**

永远不要把 v-if 和 v-for 同时用在同一个元素上，具体参考[Vue Style Guide](https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7%E5%BF%85%E8%A6%81)。

**vue页面如何引入svg图标**

通过svg的use指令可以复用svg，具体方法参考[vue页面如何引入svg图标](https://www.cnblogs.com/luoxuemei/p/12154835.html)。

**使用CSS给SVG添加样式**

这个文章和vue关系不大，先放在这里做个参考[使用CSS给SVG添加样式](https://www.w3cplus.com/svg/styling-svg-use-content-css.html)。

**router-view中key的作用**

不同的key选择策略将导致在组件复用和新页面渲染之前取得一个平衡，必须了解。[router-view中key的作用](https://blog.csdn.net/weixin_33795743/article/details/93266413)。

**easy-mock**

Easy Mock 是一个可视化，并且能快速生成模拟数据的持久化服务。安装说明参考 easy-mock 开源项目 [gitee](https://gitee.com/mirrors/Easy-Mock) 或者 [github](https://github.com/easy-mock/easy-mock)。

**vue的index.html**

缺省情况下index.html需要放在public目录下

**keep-alive**

keep-alive是Vue提供的一个抽象组件，用来对组件进行缓存，从而节省性能，由于是一个抽象组件，所以在v页面渲染完毕后不会被渲染成一个DOM元素。当组件在keep-alive内被切换时组件的activated、deactivated这两个生命周期钩子函数会被执行。

被包裹在keep-alive中的组件的状态将会被保留，例如我们将某个列表类组件内容滑动到第100条位置，那么我们在切换到一个组件后再次切换回到该组件，该组件的位置状态依旧会保持在第100条列表处。

**vue-i18n**

Vue I18n 是 Vue.js 的国际化插件。它可以轻松地将一些本地化功能集成到你的 Vue.js 应用程序中。[i18n 文档](https://kazupon.github.io/vue-i18n/zh/started.html)

