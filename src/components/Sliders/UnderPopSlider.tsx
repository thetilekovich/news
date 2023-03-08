import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../Container';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import { useAppSelector } from '@/slices/hooks';
import Image from '../Image';
import { useState } from 'react';
import ToRight from '../Arrows/ToRight'
import ToLeft from '../Arrows/ToLeft'
import SwiperClass from 'swiper/types/swiper-class';

const Slider1 = () => {
    const { news } = useAppSelector(s => s.news)
    const { swiper, setSwiper } = useState<SwiperClass>()

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext()
        }
    }
    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev()
        }
    }

    const params = {
        spaceBetween: 10,
        slidesPerView: 6,
        loop: true,
    }

    return (
        <Container>
            <div className='flex items-center'>
                <button className=" mb-2 flex items-center cursor-pointer" onClick={goPrev}> <ToLeft size={35}/></button>
                <Swiper {...params}>
                    {news.map(el => (
                        <SwiperSlide onSwiper={setSwiper} key={el.id} >
                            <Image width={80} height={60} />
                        </SwiperSlide>))}
                </Swiper>
                <button className="mb-2 cursor-pointer" onClick={goNext}><ToRight size={35}/></button>
            </div>
        </Container>
    );2
}

export default Slider1