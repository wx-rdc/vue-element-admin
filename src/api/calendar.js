import request from '@/utils/request'

export function getMonth(params) {
    return request({
        url: '/schedule/month',
        method: 'post',
        params
    })
}

export function getWeek(params) {
    return request({
        url: '/schedule/week',
        method: 'post',
        params
    })
}