import Taro from '@tarojs/taro'


export async function getProductDetail(param) {
  return Taro.request({
      url: `http://120.79.22.119:8091/api/item/queryById?id=${param.id}`
  });
}



