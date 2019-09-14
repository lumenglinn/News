import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Image } from '@tarojs/components'
import { AtButton, AtIcon, AtInputNumber } from 'taro-ui'
import './index.scss'

@connect(({ cart }) => ({
  ...cart,
}))
export default class Cart extends Component {

  state = {
    value: 1
  }

  config: Config = {
    navigationBarTitleText: '我的订单'
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'cart/getCartList',
      payload: {}
    });
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleInputChange() {

  }

  render() {
    const { cartList: { records } } = this.props;

    return (
      <View className='orderlist-page'>
        {/* 无商品 */}
        {/* <View className="cart-null">
          <Image
            className='default-img'
            src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
          />
          <View className="tips">订单空空如也，去逛逛吧～</View>
          <AtButton type='primary' className="btn-shopping">去购物</AtButton>
        </View> */}

        <View className="order-list">
          {/* {
            records.map((item, i) => {
              console.log(item, 22)
              return <View className="order-item" key={`cart_${i}`}>
              <AtIcon value="check-circle" className="check" size='24' color='#b4282d'></AtIcon>
              <Image
                className='order-img'
                src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
              />
              <View className="order-info">
                <View className="order-name">{item.skuName}</View>
                <View className="order-desc">2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款</View>
                <View className="order-price">¥{item.price}</View>
                <AtInputNumber
                  min={0}
                  max={10}
                  step={1}
                  type="number"
                  className="input-number"
                  value={item.quantity}
                  onChange={this.handleInputChange.bind(this)}
                />
              </View>
            </View>
            })
          } */}
        </View>

        <View className="order-item">
          <View className="shop-name">妖精的口袋</View>
          <View className="order-detail">
            <View className="order-info">
              <Image
                className='order-img'
                src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
              />

              <View className="order-name">2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定</View>
            </View>
            <View className="order-price">共2件商品 合计：¥18.00</View>
          </View>
          <View className="order-operate">
            <View className="btn-operate">再来一单</View>
            <View className="btn-operate">投诉</View>
          </View>
        </View>

        <View className="order-item">
          <View className="shop-name">妖精的口袋</View>
          <View className="order-detail">
            <View className="order-info">
              <Image
                className='order-img'
                src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
              />
              <Image
                className='order-img'
                src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
              />
              {/* <View className="order-name">2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定</View> */}
            </View>
            <View className="order-price">共2件商品 合计：¥18.00</View>
          </View>
          <View className="order-operate">
            <View className="btn-operate">再来一单</View>
            <View className="btn-operate">投诉</View>
          </View>
        </View>
      </View>
    )
  }
}
