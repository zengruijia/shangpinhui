//所有api接口统一管理
import requests from './request';

import mockRequests from './mock';

//三级联动接口
// /api/product / getBaseCategoryList  get 无参数

export const reqCategoryList = () => requests({ url: 'product/getBaseCategoryList', methods: 'get' });

//获取banner接口
export const reqGetBannerList = () => mockRequests({ url: '/banner' });

//获取floor数据
export const reqFloorList = () => mockRequests({ url: '/floor' });

//获取搜索模块数据 地址/api/list  请求方式POST
// 参数 {
//   "category3Id": "61",
//   "categoryName": "手机",
//   "keyword": "小米",
//   "order": "1:desc",
//   "pageNo": 1,
//   "pageSize": 10,
//   "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
// }
export const reqGetSearchInfo = params => requests({ url: '/list', method: 'post', data: params });

//获取产品详情信息接口 url:/api/item/{skuId} 请求方式get
export const reqGoodsInfo = skuId => requests({ url: `/item/${skuId}`, method: 'get' });

//将产品添加到购物车中（或更新某一个产品数据）:/api/cart/addToCart/{ skuId }/{ skuNum }  post
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' });

//获取购物车数据
export const reqGetShopCarList = () => requests({ url: '/cart/cartList', method: 'get' });

//删除购物车产品接口
export const reqDeleteCartById = skuId => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });

//修改购物车商品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`,method:'get'})
