import Mock from 'mockjs'
import { success } from './index'

const ArticleList = {
    "total": 7834,
    'rows|10': [{
        'id|+1': 1,
        'title': '@ctitle(10,20)',
        'author': '@cname',
        pageviews: '@integer(0, 75)',
        timestamp: '@datetime()'
    }]
};

export default {
    'get!/article/list': () => success(Mock.mock(ArticleList)),
}
