/*
 * @Descripttion: 
 * @Date: 2019-09-16 22:42:36
 * @LastEditTime: 2019-09-16 23:47:00
 */
import request from '../utils/request'

export async function createOrder(param) {
  return request({
      url: `${apiPrefix}/api/order/create`,
      method: 'POST',
      data: param || {}
  });
}