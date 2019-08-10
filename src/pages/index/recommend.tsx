import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import defaultAvatar from '@assets/default-avatar.png'
import './index.scss'

export default class Recommend extends Component {
  static defaultProps = {
    list: []
  }

  handleClick = (id) => {
    Taro.navigateTo({
      url: `/pages/item/item?itemId=${id}`
    })
  }

  render () {
    // const { list } = this.props
    return (
      <View className='recommend'>
        <View className='recommend-title'>为你推荐</View>
        <View className='recommend-list'>
          <View className='item'>
            <Image
              className='item-img'
              src="https://yanxuan-item.nosdn.127.net/f848602138275d9745bc1c129004f9da.png"
            />
            <View>
              <Text>日本制造 AKOYA海水珍珠红宝石项链 </Text> <Text className='price'>¥55</Text>
            </View>
          </View>
          <View className='item'>
            <Image
              className='item-img'
              src="https://yanxuan-item.nosdn.127.net/f848602138275d9745bc1c129004f9da.png"
            />
            <View>
              <Text>日本制造 AKOYA海水珍珠红宝石项链 </Text> <Text className='price'>¥55</Text>
            </View>
          </View>
          <View className='item'>
            <Image
              className='item-img'
              src="https://yanxuan-item.nosdn.127.net/f848602138275d9745bc1c129004f9da.png"
            />
            <View>
              <Text>日本制造 AKOYA海水珍珠红宝石项链 </Text> <Text className='price'>¥55</Text>
            </View>
          </View>
          <View className='item'>
            <Image
              className='item-img'
              src="https://yanxuan-item.nosdn.127.net/f848602138275d9745bc1c129004f9da.png"
            />
            <View>
              <Text>日本制造 AKOYA海水珍珠红宝石项链 </Text> <Text className='price'>¥55</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}