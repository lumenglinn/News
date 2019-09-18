import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Image } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
import List from './list'
import './index.scss'

@connect(({ order }) => ({
  ...order,
}))
export default class Cart extends Component {

  state = {
    value: 1,
    pageNo: {
      0: 1,
      1: 1,
      2: 1,
      3: 1
    },
    current: 0,
  }

  config: Config = {
    navigationBarTitleText: '我的订单'
  }

  componentWillMount() {
    this.getOrderList()
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  handleTabClick = (tabIndex) => {
    const { list } = this.props;
    if (list[tabIndex].records.length <= 0) {
      this.getOrderList(tabIndex);
    }
    this.setState({
      current: tabIndex
    })
  }

  getOrderList = (tabIndex = 0) => {
    const { dispatch, list } = this.props;
    const { total, records } = list[tabIndex];
    let { pageNo } = this.state;
    // 没有更多数据
    if (records.length >= total) {
      return;
    }
    dispatch({
      type: 'order/getOrderList',
      payload: {
        pageNo: pageNo[tabIndex],
        tabIndex
      }
    });
    this.setState({
      pageNo: {
        ...pageNo,
        [tabIndex]: pageNo[tabIndex] + 1
      }
    })
  }

  render() {
    const { list } = this.props;
    const tab0Records = list['0'].records;
    const tab1Records = list['1'].records;
    const tab2Records = list['2'].records;
    const tab3Records = list['3'].records;
    console.log(tab2Records.length <= 0)

    const tabList = [{ title: '全部' }, { title: '待付款' }, { title: '待发货' }, { title: '已发货' }];
    const nullRecords = <View className="null-item">
      <View className="order-null">
        <Image
          className='default-img'
          src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noOrder-44ae79274d.png"
        />
        <View className="tips">您还没有相关的订单～</View>
        {/* <AtButton type='primary' className="btn-shopping">去购物</AtButton> */}
      </View>
    </View>
    return (
      <View className='orderlist-page'>
        <AtTabs current={this.state.current} tabList={tabList} onClick={this.handleTabClick}>
          <AtTabsPane current={this.state.current} index={0} >
            {
              tab0Records.length <= 0 && nullRecords
            }
            {
              tab0Records.length > 0 && <List records={tab0Records} getOrderList={this.getOrderList.bind(this, 0)} />
            }
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            {
              tab1Records.length <= 0 && nullRecords
            }
            {
              tab1Records.length > 0 && <List records={tab1Records} getOrderList={this.getOrderList.bind(this, 1)} />
            }
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            {
              tab2Records.length <= 0 && nullRecords
            }
            {
              tab2Records.length > 0 && <List records={tab2Records} getOrderList={this.getOrderList.bind(this, 2)} />
            }
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={3}>
            {
              tab3Records.length <= 0 && nullRecords
            }
            {
              tab3Records.length > 0 && <List records={tab3Records} getOrderList={this.getOrderList.bind(this, 3)} />
            }
          </AtTabsPane>
        </AtTabs>
      </View>
    )


    // return (
    //   <View className='orderlist-page'>

    //     {/* 无商品 */}
    //     {/* <View className="cart-null">
    //       <Image
    //         className='default-img'
    //         src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png"
    //       />
    //       <View className="tips">订单空空如也，去逛逛吧～</View>
    //       <AtButton type='primary' className="btn-shopping">去购物</AtButton>
    //     </View> */}
    //     <ScrollView
    //       scrollY
    //       scrollWithAnimation
    //       lowerThreshold={50}
    //       style={`height: 667px;`}
    //       onScrollToLower={this.getOrderList}
    //     >
    //       <View className="order-list">
    //         {
    //           records.map((item, i) => {
    //             return <View className="order-item" key={`order_${i}`}>
    //               <View className="shop-name">妖精的口袋</View>
    //               <View className="order-detail">
    //                 <View className="order-info">
    //                   <Image
    //                     className='order-img'
    //                     src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
    //                   />

    //                   <View className="order-name">2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定</View>
    //                 </View>
    //                 <View className="order-price">共2件商品 合计：¥18.00</View>
    //               </View>
    //               <View className="order-operate">
    //                 <View className="btn-operate">再来一单</View>
    //                 <View className="btn-operate">投诉</View>
    //               </View>
    //             </View>
    //           })
    //         }
    //       </View>



    //       <View className="order-item">
    //         <View className="shop-name">妖精的口袋</View>
    //         <View className="order-detail">
    //           <View className="order-info">
    //             <Image
    //               className='order-img'
    //               src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
    //             />
    //             <Image
    //               className='order-img'
    //               src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
    //             />
    //             {/* <View className="order-name">2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定</View> */}
    //           </View>
    //           <View className="order-price">共2件商品 合计：¥18.00</View>
    //         </View>
    //         <View className="order-operate">
    //           <View className="btn-operate">再来一单</View>
    //           <View className="btn-operate">投诉</View>
    //         </View>
    //       </View>
    //     </ScrollView>
    //   </View>
    // )
  }
}
