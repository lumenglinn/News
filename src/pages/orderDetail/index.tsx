import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Addresss from '../../components/address/index'
import OrderItem from '../../components/orderItem/index'
// import List from './list'
import './index.scss'

@connect(({ order }) => ({
  ...order,
}))
export default class Cart extends Component {

  state = {
    value: 1,
    pageNo: {
      0: 1,
      1: 1,
      2: 1,
      3: 1
    },
    current: 0,
  }

  config: Config = {
    navigationBarTitleText: '订单详情'
  }

  componentWillMount() {
    // this.getOrderList()
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }



  getOrderList = (tabIndex = 0) => {
    const { dispatch, list } = this.props;
    const { total, records } = list[tabIndex];
    let { pageNo } = this.state;
    // 没有更多数据
    if (records.length >= total) {
      return;
    }
    dispatch({
      type: 'order/getOrderList',
      payload: {
        pageNo: pageNo[tabIndex],
        tabIndex
      }
    });
    this.setState({
      pageNo: {
        ...pageNo,
        [tabIndex]: pageNo[tabIndex] + 1
      }
    })
  }

  render() {
    // const { list } = this.props;


    return (
      <View className='orderDetail-page'>
        <Addresss />
        <OrderItem />
        <View className="info-box">
          <View className="info-item">
            <Text className="info-name">订单编号: </Text>9028397482647
          </View>
          <View className="info-item">
            <Text className="info-name">订单编号: </Text>9028397482647
          </View>
          <View className="info-item">
            <Text className="info-name">订单编号: </Text>9028397482647
          </View>
          <View className="info-item">
            <Text className="info-name">订单编号: </Text>9028397482647
          </View>
        </View>

        <View className="info-box">
          <View className="info-item">
            <Text className="info-name">订单编号: </Text>9028397482647
          </View>
          <View className="info-item">
            <Text className="info-name">订单编号: </Text>9028397482647
          </View>
          <View className="info-item">
            <Text className="info-name">订单编号: </Text>9028397482647
          </View>
          <View className="info-item">
            <Text className="info-name">订单编号: </Text>9028397482647
          </View>

        </View>
        <View className="real-pay"><Text className="info-name">实付：</Text>¥100</View>
        <View className="fix-bottom">
          <View className="btn-operate">再来一单</View>
          <View className="btn-operate">投诉</View>
        </View>
      </View>
    )
  }
}
