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
    navigationBarTitleText: '购物车'
  }

  componentWillMount() {
    this.getCartList();
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleInputChange() {

  }

  getCartList = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'cart/getCartList',
      payload: {}
    });
  }
  
  handleToOrder(id) {
    Taro.navigateTo({
      url: `/pages/orderConfirm/index`
    })
  }

  render() {
    const { cartList: { records } } = this.props;
    const hasRecord = records.length > 0;

    return (
      <View className='cart-page'>
        {/* 无商品 */}
        {
          !hasRecord && <View className="cart-null">
            <Image
              className='default-img'
              src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
            />
            <View className="tips">购物车空空如也，去逛逛吧～</View>
            <AtButton type='primary' className="btn-shopping">去购物</AtButton>
          </View>
        }
        {
          hasRecord && <View className="goods-list">
            {
              records && records.map((item, i) => {
                return <View className="goods-item" key={`cart_${i}`}>
                  <AtIcon value="check-circle" className="check" size='24' color='#b4282d'></AtIcon>
                  <Image
                    className='goods-img'
                    src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
                  />
                  <View className="goods-info">
                    <View className="goods-name">{item.skuName}</View>
                    <View className="goods-desc">2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款2019年限定款</View>
                    <View className="goods-price">¥{item.price}</View>
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
            }
          </View>
        }

        <View className="total-wrap">
          <AtIcon value="check-circle" className="check" size='24' color='#b4282d'></AtIcon>
          <View className="total-number">已选(2)</View>
          <View className="total-price">
            <View className="price">合计：¥89</View>
            <View>已优惠 ¥89</View>
          </View>
          <AtButton type='primary' onClick={this.handleToOrder}>下单</AtButton>
        </View>
      </View>
    )
  }
}
