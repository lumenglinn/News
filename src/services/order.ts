/*
 * @Descripttion: 
 * @Date: 2019-09-16 22:42:36
 * @LastEditTime: 2019-09-16 23:58:33
 */
import request from '../utils/request'

/**
 * @function: 创建订单
 * @param {type} 
 * @return: 
 */
export async function createOrder(param) {
  return request({
      url: `${apiPrefix}/api/order/create`,
      method: 'POST',
      data: param || {}
  });
}

/**
 * @function: 获取订单列表
 * @param {type} 
 * @return: 
 */
export async function getOrderList(param) {
  return request({
      url: `${apiPrefix}/api/order/list`,
      data: param || {}
  });
}