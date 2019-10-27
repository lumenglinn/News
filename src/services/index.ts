/*
 * @Descripttion: 
 * @Date: 2019-08-05 00:14:41
 */
import request from '../utils/request'

export async function getHomeSetting() {
  return request({
      url: `${apiPrefix}/api/setting/getHomeSettingList`
  });
}

export async function getList(param) {
  return request({
      url: `${apiPrefix}/api/article/list`,
      data: param || {}
  });
}
