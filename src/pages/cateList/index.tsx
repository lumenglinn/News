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
                          return <View><View className="pro-wrap" key={`cate_pro_${index}`}>
                            <View className="pro-item dis-flex" onClick={this.handleToDetail.bind(this, item.id)}>
                              <View className="item-info">
                                <View className="item-title">{item.name}{item.name}{item.name}{item.name}</View>
                                {/* <View className="item-desc">{item.description}</View> */}
                              </View>
                              <Image
                                className='item-img'
                                src={item.mainUrl}
                              />
                            </View>
                          </View>
                            <View className="pro-wrap" key={`cate_pro_${index}`}>
                              <View className="pro-item" onClick={this.handleToDetail.bind(this, item.id)}>
                                <View className="item-info">
                                  <View className="item-title">{item.name}{item.name}{item.name}{item.name}</View>
                                  {/* <View className="item-desc">{item.description}</View> */}
                                </View>
                              </View>
                              <View className="pro-item" onClick={this.handleToDetail.bind(this, item.id)}>
                                <View className="item-info">
                                  <View className="item-title">{item.name}{item.name}{item.name}{item.name}</View>
                                  {/* <View className="item-desc">{item.description}</View> */}
                                </View>
                                <View className="imgs dis-flex">
                                  <Image
                                    className='item-img'
                                    src='https://p3.pstatp.com/list/pgc-image/ac34c5fbd3a849edb48131152ebe5591'
                                  />
                                  <Image
                                    className='item-img'
                                    src='https://p3.pstatp.com/list/pgc-image/ac34c5fbd3a849edb48131152ebe5591'
                                  />
                                  <Image
                                    className='item-img'
                                    src='https://p3.pstatp.com/list/pgc-image/ac34c5fbd3a849edb48131152ebe5591'
                                  />
                                </View>
                              </View>
                            </View>
                          </View>
                        })
                      }
                    </View>
                    <AtDivider content='已经到底啦～' />
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



// {
//   !!records[cateItem.id] && records[cateItem.id].map((item, index) => {
//     return <View className="pro-wrap" key={`cate_pro_${index}`}>
//       <View className="pro-item" onClick={this.handleToDetail.bind(this, item.id)}>
//         <View className="item-info">
//           <View className="item-title">{item.name}{item.name}{item.name}{item.name}</View>
//           {/* <View className="item-desc">{item.description}</View> */}
//         </View>
//         <Image
//           className='item-img'
//           src={item.mainUrl}
//         />
//       </View>
//     </View>
//   })
// }