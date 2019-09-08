import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default function NavList() {
  const {navList=[]} = this.props;
  return (
    <View className='nav-list'>
      {
        navList.map((item, i) => {
          return <View className='nav-item' key={`nav_${i}`}>
          <Image
            className='nav-img'
            src={item.picUrl}
          />
          <View>{item.name}</View>
        </View>
        })
      } 
    </View>
  );
}
