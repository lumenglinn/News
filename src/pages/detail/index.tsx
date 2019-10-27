import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View } from '@tarojs/components'
// import Banner from './banner'
// import ProductInfo from './productInfo'
import Introduce from './introduce'
// import Footer from './footer'
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
    const { id } = this.$router.params;
    const { dispatch } = this.props;
    dispatch({
      type: 'detail/getProductDetail',
      payload: {
        id: '57d6ed17ea704a0884c090772af64cc7'
      }
    });
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { proDetail } = this.props;
    let { bannerUrl, detail='' } = proDetail;

    console.log(detail, 'detail')
    detail = detail.replace(
      /\<img/gi,
      '<img style="display:block; width:98%; margin:0 auto" '
    );
 
    return (
      <View className='detail-page'>
        {/* <Banner data={bannerUrl}/>
        <ProductInfo data={proDetail}/> */}
        <Introduce data={detail}/>
        {/* <Footer /> */}
      </View>
    )
  }
}
