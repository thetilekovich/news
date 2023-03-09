import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../Container';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import { useAppSelector } from '../../slices/hooks';
import Image from '../Image';
import SwiperCore, {
    Autoplay
} from 'swiper'

const params = {
    module: [Autoplay],
    spaceBetween: 10,
    slidesPerView: 3,
    pagination: { clickable: true },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    }
}



const FirstSlider = () => {
    const { news } = useAppSelector(s => s.news)
    SwiperCore.use([Autoplay]);

    return (
        <Container>
            <div className='mb-24'>
                <Swiper
                    {...params}
                >
                    {
                        news.map(el => (
                            <SwiperSlide key={el.id} >
                                <div className='flex items-between'>
                                    <Image alt="d" width={100} height={80} />
                                    <div className="mx-5">
                                        <h1 className='text-sm font-extrabold text-white'>{el.title}</h1>
                                        <p className="text-xs break-all text-gray-300">{el?.body?.slice(0,60)}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </Container >
    );
}

export default FirstSlider