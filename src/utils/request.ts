/*
 * @Descripttion: 
 * @Date: 2019-08-05 00:21:38
 * @LastEditTime: 2019-09-14 09:18:47
 */
import Taro from '@tarojs/taro';
import { getAccessToken } from '../services/global'
 
export default function request(options) {
  options.header = {
    ...options.header,
    sessionId: Taro.getStorageSync('sessionId')
  }
  return Taro.request({...options,
    success:(res) => {
      if (res.data.code === 401) {
        wx.login({
          success(res) {
            if (res.code) {
              getAccessToken(res.code);
            } else {
              console.log('登录失败！' + res.errMsg)
            }
            Taro.eventCenter.on('login', (options)=>request(options));
          }
        })
      }
      options.success && options.success(res.data)
      return res.data
    }
  })
}


// export default function(options) {
//   return Taro.request(options).then((res) => {
//     const { statusCode, data } = res;
//     if (statusCode >= 200 && statusCode < 300) {
//       return data;
//     } else {
//       throw new Error(`网络请求错误，状态码${statusCode}`);
//     }
//   })
// }