import Taro from '@tarojs/taro'


export async function getProductDetail(url) {
  return Taro.request({
      url: 'http://120.79.22.119:8091/api/item/queryById?id=54ebf788999588f191ad58bb4cebc605'
  });
}



