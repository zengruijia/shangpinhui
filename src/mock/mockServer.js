//引入mockjs模块
import Mock from 'mockjs'
//把JSON数据格式引入进来
import banner from './banner.json'
import floor from './floor.json'

//两个参数1.参数请求地址 2.请求数据
Mock.mock("/mock/banner",{code:200,data:banner})
Mock.mock('/mock/floor', { code: 200, data: floor });