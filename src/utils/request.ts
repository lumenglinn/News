import Taro from '@tarojs/taro';
 
export default function(options) {
  return Taro.request({...options,
    success:(res) => {
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