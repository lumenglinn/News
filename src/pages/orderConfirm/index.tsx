import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Addresss from '../../components/address/index'
import OrderItem from '../../components/orderItem/index'
import './index.scss'

@connect(({ cart, order }) => ({
  ...cart,
  ...order
}))
export default class OrderConfirm extends Component {

  state = {
    value: 1,
    address: {}
  }

  config: Config = {
    navigationBarTitleText: '订单确认',
  }

  componentWillMount() {
    this.getAddress();
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
  getAddress() {
    const self = this;
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.address']) {
          wx.chooseAddress({
            success(res) {
              console.log(res, 'address')
              self.setState({
                address: res
              })
            }
          })
        } else {
          if (res.authSetting['scope.address'] == false) {
            wx.openSetting({
              success(res) {
                console.log(res.authSetting)
              }
            })
          } else {
            wx.chooseAddress({
              success(res) {
                self.setState({
                  address: res
                })
              }
            })
          }
        }
      }
    })
  }

  handleOrder = () => {
    const { dispatch, cartList: { records } } = this.props;
    const { address: {userName, postalCode,provinceName ,cityName, countyName, detailInfo, nationalCode, telNumber} } = this.state;
    if (records.length <= 0) return;

    dispatch({
      type: 'order/createOrder',
      payload: {
        address: detailInfo,          // 地址
        city: cityName,               // 市
        consigneeName: userName,      // 收货人姓名
        consigneePhone: telNumber,    // 收货人电话       
        district: countyName,         // 区
        items: records,               // 
        province: provinceName,       // 省
        remark: "",                   // 用户备注
        // "userAddressId": "string", // 用户地址id
        zipcode: postalCode           // 邮编
      }
    });
  }

  render() {
    const { cartList: { records } } = this.props;

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
          <AtButton type='primary' onClick={this.handleOrder}>去付款</AtButton>
        </View>
      </View>
    )
  }
}
