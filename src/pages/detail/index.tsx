import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
import Banner from './banner'
import ProductInfo from './productInfo'
import Introduce from './introduce'
import Footer from './footer'
import './index.scss'

@connect(({ detail }) => ({
  ...detail,
}))
export default class Detail extends Component {
  config: Config = {
    navigationBarTitleText: '产品详情'
  }

  componentWillMount() { }

  componentDidMount() { 
    const { dispatch } = this.props;
    dispatch({type: 'detail/getProductDetail'});
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='detail-page'>
        <Banner />
        <ProductInfo />
        <Introduce />
        <Footer />
      </View>
    )
  }
}
