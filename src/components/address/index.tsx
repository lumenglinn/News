import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class Address extends Component {
  static defaultProps = {
  }

  render () {
    // const { data } = this.props;
    return (
        <View className="address-wrap">
        <View className="user-name">卢梦琳 18825182319</View>
        <View className="address">广东广州市白云区太和镇广州白云区永平街集贤东四巷18号蜂巢箱</View>
      </View>
    )
  }
}