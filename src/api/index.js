//所有api接口统一管理
import requests from './request';

import mockRequests from './mock';

//三级联动接口
// /api/product / getBaseCategoryList  get 无参数

export const reqCategoryList = () => requests({ url: 'product/getBaseCategoryList', methods: 'get' });

//获取banner接口
export const reqGetBannerList = () => mockRequests({ url: '/banner'});

//获取floor数据
export const reqFloorList = () => mockRequests({ url: '/floor'});
