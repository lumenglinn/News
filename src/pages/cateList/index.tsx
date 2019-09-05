import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtDivider, AtIcon } from 'taro-ui'
import '../../assets/taro-ui.css'
import './index.scss'

export default class CateList extends Component {

  state = {
    current: 0
  }
  
  config: Config = {
    navigationBarTitleText: '分类'
  }

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  
  handleClick(index) {
    this.setState({
      current: index
    })
  }

  render() {
    return (
      <View className='cateList'>
        <AtTabs
          current={this.state.current}
          scroll
          height='100%'
          tabDirection='vertical'
          tabList={[
            { title: '优鲜菜场' },
            { title: '时令水果' },
            { title: '海鲜水产' },
            { title: '休闲零食' },
            { title: '酒水饮料' },
            { title: '烘培糕点' },
          ]}
          onClick={this.handleClick.bind(this)}>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
            <View style='font-size:18px;text-align:center;height:100%;'>
              <View className="product-list">
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>
                <View className="pro-item">
                  <Image
                    className='item-img'
                    src="https://img14.360buyimg.com/focus/s140x140_jfs/t19432/178/2607825443/22589/446a22a2/5b023705N12de0824.jpg"
                  />
                  <View className="item-info">
                    <View className="item-title">泰国金枕榴莲泰国金枕榴莲泰国金枕榴莲</View>
                    <View className="item-desc">泰国直采 正宗金枕头品种泰国直采 正宗金枕头品种正宗金枕头品种正宗金枕头品种</View>
                    <Text className="item-price">¥89</Text>
                    <AtIcon value='shopping-cart' className="add-cart" size='18' color='#902024'></AtIcon>
                  </View>
                </View>

              </View>
              <AtDivider content='已经到底啦，看看其他宝贝吧～' />
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
            <View style='font-size:18px;text-align:center;height:100%;'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
            <View style='font-size:18px;text-align:center;height:100%;'>标签页三的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
            <View style='font-size:18px;text-align:center;height:100%;'>标签页四的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
            <View style='font-size:18px;text-align:center;height:100%;'>标签页五的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
            <View style='font-size:18px;text-align:center;height:100%;'>标签页六的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}
