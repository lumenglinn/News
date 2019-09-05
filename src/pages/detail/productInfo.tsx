import { View } from '@tarojs/components'
import './index.scss'

export default function ProductInfo() {
    const { data={} } = this.props;
    const { name, description, price } = data;
    return (
        <View className='detail-product'>
            <View className='pro-name'>{name || ''}</View>
            <View className='pro-desc'>{description || ''}</View>
            <View className='pro-price'>¥{price || ''}</View>
        </View>
    );
}
