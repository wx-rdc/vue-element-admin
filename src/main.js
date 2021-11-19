import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import _ from 'lodash'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

import '@/assets/styles/index.scss' // global css

import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
import './icons' // icon
import './permission' // permission control

import './mock'

// 解决全屏情况下下拉框无法显示的问题
ElementUI.Select.props.popperAppendToBody.default = false

// Vue.use(ElementUI, { locale })
Vue.use(ElementUI, {
  locale,
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value),
})
// Vue.use(ElementUI)

Vue.prototype.$util = _
Vue.config.productionTip = false

// 生产环境屏蔽错误日志
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = function (err, vm) { }
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
