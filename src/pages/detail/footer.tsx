import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
// import { ButtonItem } from '@components'
// import jump from '@utils/jump'
import homeIcon from '../../assets/detail/home.png'
import serviceIcon from '../../assets/detail/service.png'
import cartIcon from '../../assets/detail/cart.png'
import './index.scss'

const NAV_LIST = [{
    key: 'home',
    img: homeIcon,
    url: '/pages/home/home'
}, {
    key: 'service',
    img: serviceIcon
}, {
    key: 'cart',
    img: cartIcon,
    url: '/pages/cart/cart'
}]

export default class Footer extends Component {
    static defaultProps = {
        onAdd: () => { }
    }

    handleNav = (item) => {
        Taro.showToast({
            title: '敬请期待',
            icon: 'none'
        })
        if (item.key === 'service') {
        } else {
            //   jump({ url: item.url, method: 'switchTab' })
        }
    }

    handleBuy = () => {
        Taro.showToast({
            title: '暂时只支持加入购物车',
            icon: 'none'
        })
    }

    render() {
        return (
            <View className='detail-footer'>
                {NAV_LIST.map(item => (
                    <View
                        key={item.key}
                        className='nav-icon'
                        onClick={this.handleNav.bind(this, item)}
                    >
                        <Image
                            className='nav-icon-img'
                            src={item.img}
                        />
                    </View>
                ))}
                <View className='nav-cart'>加入购物车</View>
                <View className='nav-buy' onClick={this.handleBuy}>立即购买</View>
                
            </View>
        )
    }
}