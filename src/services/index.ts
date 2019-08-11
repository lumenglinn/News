import Taro from '@tarojs/taro'


export async function getList(url) {
  return Taro.request({
      url: 'http://120.79.22.119:8091/api/item/list'
  });
}



