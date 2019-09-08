/*
 * @Descripttion: 
 * @Date: 2019-08-11 15:41:31
 */
import request from '../utils/request'

export async function getProductDetail(param) {
  return request({
      url: `${apiPrefix}/api/item/get?id=${param.id}`
  });
}



