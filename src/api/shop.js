import request from '@/utils/request'

export function getShopList(params) {
  return request({
    url: '/shop/list',
    method: 'post',
    data: params
  })
}

export function updateShop(data) {
  return request({
    url: '/shop/update',
    method: 'post',
    data
  })
}
