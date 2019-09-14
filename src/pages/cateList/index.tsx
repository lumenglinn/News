import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Image, ScrollView } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtDivider, AtIcon } from 'taro-ui'
import './index.scss'

@connect(({ cateList }) => ({
  ...cateList,
}))
export default class CateList extends Component {

  state = {
    current: 0,
    pageNoObj: {},
    mycart: {}  // 购物车状态
  }

  config: Config = {
    navigationBarTitleText: '分类'
  }

  componentWillMount() {
    this.getCateTypes();
    // 必须是在用户已经授权的情况下调用
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res)
    //     var userInfo = res.userInfo
    //     var nickName = userInfo.nickName
    //     var avatarUrl = userInfo.avatarUrl
    //     var gender = userInfo.gender //性别 0：未知、1：男、2：女
    //     var province = userInfo.province
    //     var city = userInfo.city
    //     var country = userInfo.country
    //   }
    // })

    // Taro.chooseAddress().then((res) => {
    //   console.log(res, 'weixin address')
    // })
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getCateTypes() {
    const { dispatch } = this.props;
    dispatch({
      type: 'cateList/getCateList',
      payload: {}
    });
  }

  handleTabClick(index) {
    const self = this;
    this.setState({
      current: index
    }, () => {
      self.getProductList(index);
    })
  }

  getProductList() {
    const { cateTypes, records, dispatch } = this.props;
    const { pageNoObj, current } = this.state;
    const categoryId = cateTypes[current].id;
    const pageNo = pageNoObj[categoryId] || 1;
    if (!records[categoryId]) {
      // 请求第一页接口
      dispatch({
        type: 'cateList/getProductList',
        payload: {
          categoryId,
          pageNo: 1
        }
      });
    } else if (records[categoryId].length < records[`${categoryId}_total`]) {
      // 翻页
      dispatch({
        type: 'cateList/getProductList',
        payload: {
          categoryId,
          pageNo: pageNo + 1
        }
      });
      this.setState({
        pageNoObj: {
          ...pageNoObj,
          [categoryId]: pageNo + 1
        }
      })
    }
  }

  addCart(skuId) {
    const { dispatch } = this.props;
    dispatch({
      type: 'cateList/addCart',
      payload: {
        skuId,
        quantity: 1
      }
    });
  }

  getCartList() {
    const { dispatch } = this.props;
    dispatch({
      type: 'cateList/getCartList',
      payload: {}
    });
  }

  getAddress() {
    wx.getSetting({
      success(res) {
        console.log("vres.authSetting['scope.address']：", res.authSetting['scope.address'])
        if (res.authSetting['scope.address']) {
          console.log("111")
          wx.chooseAddress({
            success(res) {
              console.log(res.userName)
              console.log(res.postalCode)
              console.log(res.provinceName)
              console.log(res.cityName)
              console.log(res.countyName)
              console.log(res.detailInfo)
              console.log(res.nationalCode)
              console.log(res.telNumber)
            }
          })
          // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问

        } else {
          if (res.authSetting['scope.address'] == false) {
            console.log("222")
            wx.openSetting({
              success(res) {
                console.log(res.authSetting)

              }
            })
          } else {
            console.log("eee")
            wx.chooseAddress({
              success(res) {
                console.log(res.userName)
                console.log(res.postalCode)
                console.log(res.provinceName)
                console.log(res.cityName)
                console.log(res.countyName)
                console.log(res.detailInfo)
                console.log(res.nationalCode)
                console.log(res.telNumber)
              }
            })
          }
        }
      }
    })
  }

  handleToDetail(id) {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    })
  }

  render() {
    const { cateTypes = [], records } = this.props;
    let tabList = [];
    cateTypes.forEach(ele => {
      tabList.push({ title: ele.name })
    });

    return (
      <View className='cateList'>
        <AtTabs
          current={this.state.current}
          scroll
          height='100%'
          tabDirection='vertical'
          tabList={tabList}
          onClick={this.handleTabClick.bind(this)}>
          {
            !!cateTypes && cateTypes.map((cateItem, i) => {
              return <AtTabsPane tabDirection='vertical' current={this.state.current} index={i} key={`cate_${i}`}>
                <View style='font-size:18px;text-align:center;height:100%;'>
                  <ScrollView
                    scrollY
                    scrollWithAnimation
                    lowerThreshold={50}
                    style={`height: 667px;`}
                    onScrollToLower={this.getProductList}
                  >
                    <View className="product-list">
                      {
                        !!records[cateItem.id] && records[cateItem.id].map((item, index) => {
                          return <View className="pro-wrap" key={`cate_pro_${index}`}>
                            <View className="pro-item" onClick={this.handleToDetail.bind(this, item.id)}>
                              <Image
                                className='item-img'
                                src={item.mainUrl}
                              />
                              <View className="item-info">
                                <View className="item-title">{item.name}</View>
                                <View className="item-desc">{item.description}</View>
                                <View className="item-price">
                                  <Text>¥{item.price}</Text><Text className="market-price">¥{item.marketPrice}</Text>
                                </View>
                              </View>
                            </View>
                            <AtIcon value='shopping-cart' onClick={this.addCart.bind(this, item.skuId)} className="add-cart" size='18' color='#902024'></AtIcon>
                          </View>
                        })
                      }
                    </View>
                    <AtDivider content='已经到底啦，看看其他宝贝吧～' />
                    <View onClick={this.getAddress}>获取地址</View>
                  </ScrollView>
                </View>
              </AtTabsPane>
            })
          }
        </AtTabs>
      </View>
    )
  }
}
