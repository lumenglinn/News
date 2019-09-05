import Taro from '@tarojs/taro'


export async function getList(param) {
  return Taro.request({
      url: `https://api.51maimaimai.xyz/api/item/list?pageNo=${param.pageNo}`
  });
}



