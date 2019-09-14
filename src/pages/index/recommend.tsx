import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
// import defaultAvatar from '@assets/default-avatar.png'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    list: []
  }

  handleClick(id){
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    })
  }

  render () {
    const { data } = this.props;
    return (
      <View className='recommend'>
        <View className='recommend-title'>为你推荐</View>
        <View className='recommend-list'>
          {
            data && data.map((item, i) => {
              return <View className='item' key={`recomm${i}`} onClick={this.handleClick.bind(this, item.id)}>
              <Image
                className='item-img'
                src={item.mainUrl}
              />
              <View>
                <View className="item-name">{item.name}  </View>
                <View className="item-desc">{item.description} <Text className='item-price'>  ¥{item.price}</Text></View>
                {/* <RichText nodes={item.detail} /> */}
              </View>
            </View>
            })
          }
          <View className="no-more">没有更多宝贝了～</View>
        </View>
      </View>
    )
  }
}