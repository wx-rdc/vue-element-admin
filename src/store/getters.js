const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  // visitedViews: state => state.app.visitedViews,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  isRouterAlive: state => state.tagsView.isRouterAlive,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  isLock: state => state.user.isLock,
  lockPasswd: state => state.user.lockPasswd,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  resource: state => state.user.resource,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  events: state => state.schedule.events,
  weekendsVisible: state => state.schedule.weekendsVisible
}
export default getters
