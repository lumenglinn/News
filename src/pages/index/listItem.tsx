import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class ListItem extends Component {
  state = {
    list: [],
    webViewUrl: void (0)
  }

  handleClick(url) {
    this.setState({
      webViewUrl: url
    })
  }

  render() {
    const { webViewUrl } = this.state;
    const { data = {} } = this.props;
    const imgsArr = JSON.parse(data.covers || '[]');
    
    // 处理图片没有http，显示错误问题
    const newImgs = []
    for (let i = 0; i < imgsArr.length; i++) {
      if (imgsArr[i].indexOf('http') === -1) {
        newImgs.push(`http://${imgsArr[i]}`)
      } else {
        newImgs.push(imgsArr[i])
      }
    }

    let itemDom = null;
    if (imgsArr.length === 1) {
      itemDom = <View className='recomm-item dis-flex' onClick={this.handleClick.bind(this, data.url)}>
        <View className="item-info">
          <View className="item-name">{data.title}</View>
          <View className="item-resource">{data.source} {data.createTime}</View>
        </View>
        <Image
          className='item-img'
          src={newImgs[0]}
        />
      </View>
    } else if (imgsArr.length > 1) {
      itemDom = <View className='recomm-item' onClick={this.handleClick.bind(this, data.url)}>
        <View className="item-name">{data.title}</View>
        <View className="imgs-group">
          {
            imgsArr.map((imgItem, j) => {
              return <Image
                className='item-img'
                src={imgItem}
                key={`recomm_${j}`}
              />
            })
          }
        </View>
        <View className="item-resource">{data.source} {data.createTime}</View>
      </View>
    } else {
      itemDom = <View className='recomm-item' onClick={this.handleClick.bind(this, data.url)}>
        <View className="item-name">{data.title}</View>
        <View className="item-resource">{data.source} {data.createTime}</View>
      </View>
    }
    return <View>{itemDom}</View>
  }
}
