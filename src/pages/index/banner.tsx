import Taro from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

import './index.scss'
// import { useState, useEffect } from 'react';

export default function Banner() {
  // const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });
  function handleClick(id) {
    Taro.navigateTo({
      url: `/pages/detail/index?id=${id}`
    })
  }

  const {bannerList=[]} = this.props;
  return (
    <View className='banner-swiper'>
      <Swiper
        circular
        autoplay
        indicatorDots
        className="swiper"
        indicatorActiveColor='rgb(178, 42, 49)'>
        {
          bannerList.map((item, i) => {
            return <SwiperItem key={`banner_${i}`} onClick={handleClick.bind(this, item.id)}>
            <Image
              className='banner-item-img'
              src={item.picUrl}
            />
          </SwiperItem>
          })
        }
      </Swiper>
    </View>
  );
}
