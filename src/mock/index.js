import Mock from 'mockjs'
import { apibase } from '@/utils/constants'

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
});

export const success = (data) => {
    return {
        code: 20000,
        data,
    };
}

let configArray = [];

// 使用webpack的require.context()遍历所有mock文件
const files = require.context('.', true, /\.js$/);
files.keys().forEach((key) => {
    if (key === './index.js') return;
    configArray = configArray.concat(files(key).default);
});

// 注册所有的mock服务
configArray.forEach((item) => {
    for (let [path, target] of Object.entries(item)) {
        let protocol = path.split('!');
        let urlReg = "^" + apibase + protocol[1].slice(1);
        console.log('reg mock ', protocol[0], urlReg);
        Mock.mock(new RegExp(urlReg), protocol[0], target);
    }
});