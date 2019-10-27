import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, ScrollView } from '@tarojs/components'
import ListItem from './listItem'
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

  render() {
    const { records } = this.props;
    const hasRecord = records.length > 0;
    return (
      <View className='index-page'>
        <ScrollView
          scrollY
          scrollWithAnimation
          lowerThreshold={50}
          style={`height: 667px;`}
          onScrollToLower={this.getList}
        >
          <View className='recommend-list'>
            {
               hasRecord && records.map((item, i) => {
                return <View className="item-wrap" key={`recomm${i}`}>
                  <ListItem data={item}  />
                </View>
              })
            }
            {
              !hasRecord && <View className="no-more">没有更多了～</View>
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}
