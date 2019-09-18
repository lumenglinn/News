import Taro from '@tarojs/taro'
import { View, ScrollView, Image } from '@tarojs/components'

import './index.scss'

export default function List() {

    function handleClick(id) {
        Taro.navigateTo({
            url: `/pages/detail/index?id=${id}`
        })
    }

    const { records = [], getOrderList } = this.props;
    return (
        <ScrollView
            scrollY
            scrollWithAnimation
            lowerThreshold={50}
            style={`height: 667px;`}
            onScrollToLower={getOrderList}
        >
            <View className="order-list">
                {
                    records.map((item, i) => {
                        return <View className="order-item" key={`order_${i}`}>
                            <View className="shop-name">妖精的口袋</View>
                            <View className="order-detail">
                                <View className="order-info">
                                    <Image
                                        className='order-img'
                                        src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
                                    />

                                    <View className="order-name">2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定</View>
                                </View>
                                <View className="order-price">共2件商品 合计：¥18.00</View>
                            </View>
                            <View className="order-operate">
                                <View className="btn-operate">再来一单</View>
                                <View className="btn-operate">投诉</View>
                            </View>
                        </View>
                    })
                }
            </View>
            <View className="order-item">
                <View className="shop-name">妖精的口袋</View>
                <View className="order-detail">
                    <View className="order-info">
                        <Image
                            className='order-img'
                            src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
                        />
                        <Image
                            className='order-img'
                            src="https://yanxuan-item.nosdn.127.net/2d6f95aa82362622a73cd8b234e4747a.png"
                        />
                        {/* <View className="order-name">2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定2019年限定款2019年限定款2019年限定</View> */}
                    </View>
                    <View className="order-price">共2件商品 合计：¥18.00</View>
                </View>
                <View className="order-operate">
                    <View className="btn-operate">再来一单</View>
                    <View className="btn-operate">投诉</View>
                </View>
            </View>
        </ScrollView>
    );
}
