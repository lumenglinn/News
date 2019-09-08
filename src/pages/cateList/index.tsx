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
    pageNoObj: {}
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

  handleClick(index) {
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
          onClick={this.handleClick.bind(this)}>
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
                          return <View className="pro-item" key={`cate_pro_${index}`}>
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
                              <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                            </View>
                          </View>
                        })
                      }
                    </View>
                    <AtDivider content='已经到底啦，看看其他宝贝吧～' />
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
