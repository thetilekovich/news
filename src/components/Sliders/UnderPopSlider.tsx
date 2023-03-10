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
        spaceBetween: 2,
        slidesPerView: 6.4,
        loop: true,
        pagination: { clickable: true },
        navigation: {
            nextEl: '.pop-btn-next',
            prevEl: '.pop-btn-prev',
        }
    }

    return (

        <div className='mb-8 flex items-center h-20 px-3'>
            <button
                className='pop-btn-prev duration-500 h-16 w-40'>
                <ToLeft size='py-5' />
            </button>           
             <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                {...params}>
                <div>
                    {news.map(el => (
                        <SwiperSlide key={el.id} >
                            <Image alt='d' width={100} height={64} />
                        </SwiperSlide>))}
                </div>
            </Swiper>
            <button
                className='pop-btn-next duration-500 h-full w-40'>
                <ToRight size='py-5' />
            </button>
        </div>
    );
}

export default UnderPopSlider