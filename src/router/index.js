import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap, asyncRouterMap } from './routes'

Vue.use(Router)

export default new Router({
  // mode: 'history', //后端支持可开
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export {
  constantRouterMap,
  asyncRouterMap
}