import qs from 'qs'
import { success } from './index'

const userMap = {
  admin: {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  user: {
    roles: ['user'],
    token: 'user',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal User'
  }
}

export default {
  'post!/user/login': config => {
    const { username } = qs.parse(config.url.split('?')[1])
    return success(userMap[username])
  },
  'get!/user/info': config => {
    const { token } = qs.parse(config.url.split('?')[1])
    if (userMap[token]) {
      return success(userMap[token])
    } else {
      return success(false)
    }
  },
  'post!/user/logout': () => success('success')
}
