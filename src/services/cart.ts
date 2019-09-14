/*
 * @Descripttion: 购物车-请求
 * @Date: 2019-09-08 10:59:54
 */

import request from '../utils/request'

/**
 * @function: 获取购物车列表
 * @param {type} 
 * @return: 
 */
export function getCartList(param) {
  return request({
      url: `${apiPrefix}/api/cart/list`,
      data: {
        pageNo: 1,
        pageSize: 100
      }
  });
}

/**
 * @function: 添加购物车
 * @param {type} 
 * @return: 
 */
export function addCart(param) {
  return request({
      url: `${apiPrefix}/api/cart/add`,
      method: 'POST',
      data: param
  });
}