import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import Banner from './banner'
import NavList from './navList'
import './index.scss'

export default class Index extends Component {

  state = {
    searchValue: ''
  }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onChange(value) {
    this.setState({
      searchValue: value
    })
  }

  toPage(url) {
    Taro.redirectTo({
      url
    })
  }

  render() {
    const { searchValue } = this.state;
    return (
      <View className='index-page'>
        <AtSearchBar
          className='home-banner'
          value={searchValue}
          onChange={this.onChange.bind(this)}
        />
        <Banner />
        <NavList />
        {/* <View className='at-row'>
          <View className='at-col'>网易自营品牌</View>
          <View className='at-col'>48小时快速退款</View>
          <View className='at-col'>30天无忧退款</View>
        </View> */}

      
        <View onClick={this.toPage.bind(this, '/pages/detail/index')}>
          <Image
              className='adv-img'
              src="https://yanxuan.nosdn.127.net/62d709816f0b516da52254ab08deaadf.gif"
            />
        </View>
      </View>
    )
  }
}
