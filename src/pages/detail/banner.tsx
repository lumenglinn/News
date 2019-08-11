import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

export default function Banner() {
    const { data } = this.props;
    const bannerArr = data ? data.split(','): [];
    return (
        <Swiper
            indicatorColor='#d29a9c'
            indicatorActiveColor='#902024'
            vertical={false}
            circular
            indicatorDots
            className="detail-swiper"
            autoplay>
            {
                bannerArr.map((item, i) => {
                    return <SwiperItem>
                        <Image
                            className='item-img'
                            src={item}
                        />
                    </SwiperItem>
                })
            }
        </Swiper>
    );
}
