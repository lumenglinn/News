import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Addresss from '../../components/address/index'
import OrderItem from '../../components/orderItem/index'
import './index.scss'

@connect(({ cart }) => ({
  ...cart,
}))
export default class OrderConfirm extends Component {

  state = {
    value: 1
  }

  config: Config = {
    navigationBarTitleText: '订单确认',
  }

  componentWillMount() {
    // const { dispatch } = this.props;
    // dispatch({
    //   type: 'cart/getCartList',
    //   payload: {}
    // });
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleInputChange() {

  }

  render() {
    // const { cartList: { records } } = this.props;
    return (
      <View className='orderConfirm-page'>
        <Addresss />
        <OrderItem />
        <View className="order-summary">
          <View className="summary-item">
            <View className="item-left">商品合计</View>
            <View className="item-right">¥9988</View>
          </View>
          <View className="summary-item">
            <View className="item-left">运费</View>
            <View className="item-right">¥9988</View>
          </View>
          <View className="summary-item">
            <View className="item-left">活动优惠</View>
            <View className="item-right">¥9988</View>
          </View>
        </View>
        <View className="total-wrap">
          <View className="total-price">实付金额：¥89</View>
          <AtButton type='primary'>去付款</AtButton>
        </View>
      </View>
    )
  }
}
