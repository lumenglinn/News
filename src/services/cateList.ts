/*
 * @Descripttion: 
 * @Date: 2019-09-08 10:59:54
 */

import request from '../utils/request'

/**
 * @function: 获取分类类目
 * @param {type} 
 * @return: 
 */
export function getCateList() {
  return request({
      url: `${apiPrefix}/api/category/list?pageNo=1&pageSize=100`
  });
}

/**
 * @function: 获取某分类下的列表
 * @param {type} 
 * @return: 
 */
// export function getProductList(param) {
//   return request({
//       url: `${apiPrefix}/api/item/list`,
//       data
//   });
// }
