import Mock from 'mockjs'
import { success } from './index'

const ShopList = {
    "total": 7834,
    'rows|10': [{
        'id|+1': 1,
        'name|+1': ['蛋奶小方', '胡萝卜奶酪棒', '全麦面包', '椰蓉蛋糕', '草莓慕斯', '蔓越莓面包', '香草蛋糕'],
        'category|+1': ['零食', '日用品'],
        desc: '荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店 @integer(0, 75)',
        shopId: '@integer(0, 75)'
    }]
};

export default {
    'post!/shop/list': () => success(Mock.mock(ShopList)),
    'post!/shop/update': () => success('success')
}
