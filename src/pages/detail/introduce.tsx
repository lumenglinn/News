import { View, Image} from '@tarojs/components'
import './index.scss'

export default function Introduce() {
    return (
        <View className='detail-introduce'>
          <Image
            className='detail-img'
            mode='widthFix'
            src="https://yanxuan-item.nosdn.127.net/9c87b6b458ae8b87f17a375014df712d.jpg"
          />
          <Image
            className='detail-img'
            mode='widthFix'
            src="https://yanxuan-item.nosdn.127.net/9c87b6b458ae8b87f17a375014df712d.jpg"
          />
          <Image
            className='detail-img'
            mode='widthFix'
            src="https://yanxuan-item.nosdn.127.net/9c87b6b458ae8b87f17a375014df712d.jpg"
          />
        </View>
    );
}
