// import Taro, { Component, Config } from '@tarojs/taro'
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

  return (
    <View className='banner-swiper'>
      <Swiper
        circular
        autoplay
        indicatorDots
        indicatorActiveColor='rgb(178, 42, 49)'>
        <SwiperItem>
          <Image
            className='banner-item-img'
            src="https://yanxuan.nosdn.127.net/967c2fa2f05336d2eaa0a675168d5edc.png"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            className='banner-item-img'
            src="https://yanxuan.nosdn.127.net/1a8e87e8c1a407f1c5ce9d27e3f34aa9.png"
          />
        </SwiperItem>
        <SwiperItem>
          <Image
            className='banner-item-img'
            src="https://yanxuan.nosdn.127.net/decb9dc99ab844c7ca9af1c5f271faf0.jpg"
          />
        </SwiperItem>
      </Swiper>
    </View>
  );
}
