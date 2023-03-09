import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../slices/hooks';
import Image from '../Image';
import ToRight from '../Arrows/ToRight'
import ToLeft from '../Arrows/ToLeft'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import { useSwiper } from 'swiper/react';

const UnderPopSlider = () => {
    const { news } = useAppSelector(s => s.news)
    const swiper = useSwiper()

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
        spaceBetween: 5,
        slidesPerView: 6,
        loop: true,
    }

    return (

        <div className='flex items-center my-5 px-5'>
            <button className=" mb-2 flex items-center cursor-pointer" onClick={goPrev}> <ToLeft size={35} /></button>
            <Swiper
                onSwiper={swiper => console.log(swiper)}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                {...params}>
                <div>
                    {news.map(el => (
                        <SwiperSlide key={el.id} >
                            <Image alt='d' width={100} height={60} />
                        </SwiperSlide>))}
                </div>
            </Swiper>
            <button className="mb-2 cursor-pointer" onClick={goNext}><ToRight size={35} /></button>
        </div>
    );
}

export default UnderPopSlider