import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Image, ScrollView } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'
import Banner from './banner'
import NavList from './navList'
import Recommend from './recommend'
import './index.scss'

@connect(({ index }) => ({
  ...index,
}))
export default class Index extends Component {

  state = {
    searchValue: '',
    pageNo: 1
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

  componentDidMount() {
    this.getList();
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onChange(value) {
    this.setState({
      searchValue: value
    })
  }

  getList() {
    const { dispatch, list, records } = this.props;
    let { pageNo } = this.state;
    // 没有更多数据
    if (records.length >= list.total) {
      return;
    }
    dispatch({
      type: 'index/getList',
      payload: {
        pageNo
      }
    });
    this.setState({
      pageNo: pageNo + 1
    })
  }

  toPage(url) {
    Taro.redirectTo({
      url
    })
  }

  render() {
    const { searchValue } = this.state;
    const { records, bannerList, navList, adList=[] } = this.props;
    return (
      <View className='index-page'>

        {/* <View className='at-row'>
          <View className='at-col'>网易自营品牌</View>
          <View className='at-col'>48小时快速退款</View>
          <View className='at-col'>30天无忧退款</View>
        </View> */}

        <ScrollView
          scrollY
          scrollWithAnimation
          lowerThreshold={50}
          style={`height: 667px;`}
          onScrollToLower={this.getList}
        >
          <AtSearchBar
            className='home-banner'
            value={searchValue}
            onChange={this.onChange.bind(this)}
          />
          <Banner bannerList={bannerList}/>
          <NavList navList={navList}/>
          {
            !!adList[0] && <View onClick={this.toPage.bind(this, `/pages/detail/index?id=${adList[0].id}`)}>
            <Image
              className='adv-img'
              src={adList[0].picUrl}
            />
          </View>
          }
          <Recommend data={records} />
        </ScrollView>
      </View>
    )
  }
}
