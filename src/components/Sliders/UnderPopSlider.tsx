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
        autoHeight: true,
        centeredSlides: true,
        pagination: { clickable: true },
        navigation: {
            nextEl: '.pop-btn-next',
            prevEl: '.pop-btn-prev',
        }
    }

    return (

        <div className='mb-8 flex items-start h-14 px-3'>
            <button
                className='pop-btn-prev duration-500 h-full w-40'>
                <ToLeft width='20' height={'100%'} />
            </button>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    {...params}>
                    {news.map((el,idx) => (
                        idx > 20 && idx < 60 ?
                        <SwiperSlide key={el.id} >
                            <img src={el.urlToImage} alt='d' width={'100%'} height={84} />
                        </SwiperSlide> : ""))}
                </Swiper>
            <button
                className='pop-btn-next duration-500 h-full w-40'>
                <ToRight width='20' height={'100%'} />
            </button>
        </div>
    );
}

export default UnderPopSlider