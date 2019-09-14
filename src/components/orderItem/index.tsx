import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class OrderItem extends Component {
  static defaultProps = {
  }

  render() {
    // const { data } = this.props;
    return (
      <View className="order-detail">
        <View className="shop-name">妖精的口袋</View>
        <View className="goods-list">
          <View className="goods-item">
            <Image
              className='goods-img'
              src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
            />
            <View className="goods-info">
              <View className="goods-name">2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款</View>
              <View className="goods-price">¥9988</View>
              <View className="goods-quantity">x1</View>
            </View>
          </View>
        </View>
        <View className="goods-item" >
          <Image
            className='goods-img'
            src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
          />
          <View className="goods-info">
            <View className="goods-name">2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款</View>
            <View className="goods-price">¥9988</View>
            <View className="goods-quantity">x1</View>
          </View>
        </View>
      </View>
    )

    // return (
    //   <View className="order-detail">
    //       <View className="shop-name">妖精的口袋</View>
    //       <View className="goods-list">
    //         <View className="goods-item" >
    //           <Image
    //             className='goods-img'
    //             src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
    //           />
    //           <View className="goods-info">
    //             <View className="goods-name">2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款</View>
    //             <View className="goods-price">¥9988</View>
    //             <View className="goods-quantity">x1</View>
    //           </View>
    //         </View>
    //       </View>
    //       <View className="goods-item" >
    //         <Image
    //           className='goods-img'
    //           src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
    //         />
    //         <View className="goods-info">
    //           <View className="goods-name">2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款</View>
    //           <View className="goods-price">¥9988</View>
    //           <View className="goods-quantity">x1</View>
    //         </View>
    //       </View>
    //     </View>
    // )
  }
}