import Vue from 'vue'
import Layout from '@/layout/Layout'

const _import = (file) => require('@/views/' + file).default
const _import_with_name = (file, name) => {
  const component = _import(file)
  return Vue.extend({ ...component, name })
}

/**
 * router自定义配置项
 * hidden: true                   如果设置true则左侧路由菜单隐藏
 * name:'router-name'             <keep-alive>使用必须设置 (must set!!!)
 * meta : {
    role: true                   设置是否有权限
    title: 'title'                当前路由的中文名称
    noCache: true                 如果fasle，页面将不会被缓存(默认为false)
    icon: 'icon-file-text'        当前菜单的图标样式，使用阿里iconfont
  }
 **/

/*
 * 基础路映射
 */
const _401 = _import('errorPage/401')
const _403 = _import('errorPage/403')
const _404 = _import('errorPage/404')
const _500 = _import('errorPage/500')
const _login = _import('login')
const _lock = _import('lock')

/*
 * 业务页面
 */

// dashboard
const _dashboard = _import('dashboard')

// basic
const _tab = _import_with_name('basic/Tab', 'tab')
const _complexTable = _import_with_name('basic/ComplexTable', 'complextable')
const _ruleForm = _import_with_name('basic/RuleForm', 'ruleform')
const _tree = _import_with_name('basic/Tree', 'tree')

// charts
const _keyBoard = _import_with_name('charts/KeyBoard', 'keyboard')
const _lineMarker = _import_with_name('charts/LineMarker', 'linemarker')
const _mixChart = _import_with_name('charts/MixChart', 'mixchart')
const _basicCharts = _import_with_name('charts/BasicCharts', 'basiccharts')

// extends
const _backToTop = _import_with_name('extends/backToTop', 'backtotop')
const _splitPanel = _import_with_name('extends/SplitPanel', 'splitpanel')
const _mixin = _import_with_name('extends/mixin', 'mixin')

// vendor

// 日历组件v5和v3不能同时使用，只能选择其一
const _fullcalendar = _import_with_name('vendor/fullcalendar', 'fullcalendar')
// const _fullcalendar_alt = _import_with_name('vendor/fullcalendar_alt', 'fullcalendar_alt')

// TODO: 七牛图片上传组件
// const _qiniu = _import_with_name('vendor/qiniu', 'qiniu')
const _quillEditor = _import_with_name('vendor/quillEditor', 'quilleditor')

const _tinymceEditor = _import_with_name('vendor/tinymceEditor', 'tinymceeditor')
// const _richText = _import_with_name('vendor/RichText', 'richtext')  //same with tinymce

// miscellaneous
const _exportExcel = _import_with_name('miscellaneous/exportExcel', 'exportexcel')
const _svg_icon = _import_with_name('miscellaneous/svg-icon', 'svgicon')
const _i18n = _import_with_name('miscellaneous/i18n', 'i18n')

// helpdocs
const _helpDocs = _import_with_name('HelpDocs', 'helpdocs')

export const constantRouterMap = [

  { path: '/login', component: _login, hidden: true },

  // 锁屏
  { path: '/lock', component: _lock, hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    hidden: true,
    children: [
      { path: 'dashboard', name: 'dashboard', component: _dashboard, meta: { title: 'dashboard' } },
    ]
  },
];

export const asyncRouterMap = [

  {
    path: '/basic',
    component: Layout,
    name: 'basic',
    meta: { title: 'basic', icon: 'star' },
    children: [
      { path: 'tab', name: 'tab', component: _tab, meta: { title: 'tab', icon: 'tab' } },
      { path: 'complextable', name: 'complextable', component: _complexTable, meta: { title: 'complextable', icon: 'table' } },
      { path: 'ruleform', name: 'ruleform', component: _ruleForm, meta: { title: 'ruleform', icon: 'table' } },
      { path: 'tree', name: 'tree', component: _tree, meta: { title: 'tree', icon: 'table' } },
    ]
  },

  {
    path: '/charts',
    component: Layout,
    name: 'charts',
    meta: { title: 'charts', icon: 'chart', roles: ['admin'] },
    children: [
      { path: 'keyboard', name: 'keyboard', component: _keyBoard, meta: { title: 'keyboard', icon: 'tab' } },
      { path: 'linemarker', name: 'linemarker', component: _lineMarker, meta: { title: 'linemarker', icon: 'table' } },
      { path: 'mixchart', name: 'mixchart', component: _mixChart, meta: { title: 'mixchart', icon: 'table' } },
      { path: 'basiccharts', name: 'basiccharts', component: _basicCharts, meta: { title: 'basiccharts', icon: 'table' } },
    ]
  },

  {
    path: '/extends',
    component: Layout,
    name: 'extends',
    meta: { title: 'extends', icon: 'chart' },
    children: [
      { path: 'backtotop', name: 'backtotop', component: _backToTop, meta: { title: 'backtotop', icon: 'table' } },
      { path: 'splitpanel', name: 'splitpanel', component: _splitPanel, meta: { title: 'splitpanel', icon: 'table' } },
      { path: 'mixin', name: 'mixin', component: _mixin, meta: { title: 'mixin', icon: 'table' } },
    ]
  },

  {
    path: '/vendor',
    component: Layout,
    name: 'vendor',
    meta: { title: 'vendor', icon: 'chart' },
    children: [
      { path: 'fullcalendar', name: 'fullcalendar', component: _fullcalendar, meta: { title: 'fullcalendar', icon: 'tab' } },
      // { path: 'fullcalendar_alt', name: 'fullcalendar_alt', component: _fullcalendar_alt, meta: { title: 'fullcalendar_alt', icon: 'tab' } },
      // { path: 'qiniu', name: 'qiniu', component: _qiniu, meta: { title: 'qiniu', icon: 'table' } },
      { path: 'quilleditor', name: 'quilleditor', component: _quillEditor, meta: { title: 'quilleditor', icon: 'table' } },
      { path: 'tinymceeditor', name: 'tinymceeditor', component: _tinymceEditor, meta: { title: 'tinymceeditor', icon: 'table' } },
      // { path: 'richtext', name: 'richtext', component: _richText, meta: { title: 'richtext', icon: 'table' } },
    ]
  },

  {
    path: '/miscellaneous',
    component: Layout,
    name: 'miscellaneous',
    meta: { title: 'miscellaneous', icon: 'chart' },
    children: [
      { path: 'svgicon', name: 'svgicon', component: _svg_icon, meta: { title: 'svgicon', icon: 'table' } },
      { path: 'exportexcel', name: 'exportexcel', component: _exportExcel, meta: { title: 'exportexcel', icon: 'table' } },
      { path: 'i18n', name: 'i18n', component: _i18n, meta: { title: 'i18n', icon: 'table' } },
    ]
  },

  // 错误页面
  {
    path: '/',
    component: Layout,
    name: 'errorpage',
    meta: { title: 'errorpage', icon: '404' },
    redirect: 'noRedirect',// 表示面包屑不需要重定向
    children: [
      { path: '401', component: _401, meta: { title: 'page401' } },
      { path: '403', component: _403, meta: { title: 'page403' } },
      { path: '404', component: _404, meta: { title: 'page404' } },
      { path: '500', component: _500, meta: { title: 'page500' } },
    ]
  },

  {
    path: '/',
    component: Layout,
    redirect: 'helpdocs',
    children: [
      { path: 'helpdocs', name: 'helpdocs', component: _helpDocs, meta: { title: 'helpdocs', icon: '404' } },
    ]
  },

  { path: '*', redirect: '/404' }
];
