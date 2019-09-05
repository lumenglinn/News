import Taro from '@tarojs/taro'


export async function getProductDetail(param) {
  return Taro.request({
      url: `https://api.51maimaimai.xyz/api/item/queryById?id=${param.id}`
  });
}



