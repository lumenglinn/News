import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './index.scss'

export default function Banner() {
    return (
        <Swiper
            indicatorColor='#d29a9c'
            indicatorActiveColor='#902024'
            vertical={false}
            circular
            indicatorDots
            className="detail-swiper"
            autoplay>
            <SwiperItem>
                <Image
                    className='item-img'
                    src="https://yanxuan-item.nosdn.127.net/d4f7330af7bdd75af8701d1b95d9d595.png"
                />
            </SwiperItem>
            <SwiperItem>
                <Image
                    className='item-img'
                    src="https://yanxuan-item.nosdn.127.net/48e45f270e43e3f05ada161bcadcb1a8.png"
                />
            </SwiperItem>
            <SwiperItem>
                <Image
                    className='item-img'
                    src="https://yanxuan-item.nosdn.127.net/8e79fc5809488f6bf081dff587085436.png"
                />
            </SwiperItem>
        </Swiper>
    );
}
