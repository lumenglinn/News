import { View, RichText} from '@tarojs/components'
import './index.scss'

export default function Introduce() {
  const { data } = this.props;
  return (
    <View className='detail-introduce'>
      <RichText nodes={data} />
    </View>
  )
}
