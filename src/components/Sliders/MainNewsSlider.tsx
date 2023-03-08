import React, { useState } from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import { useAppSelector } from '@/slices/hooks'
import SwiperClass from 'swiper/types/swiper-class';
import { SwiperSlide, Swiper } from 'swiper/react';
import { BigNews } from '../BigNews';

const MainNewsSlider = () => {
    const [swiper, setSwiper] = useState<SwiperClass>()
    const { news } = useAppSelector(s => s.news)


    const goNext = () => {

    }
    const goPrev = () => {

    }
    const params = {
        spaceBetween: 20,
        slidesPerView: 2,
        loop: true,
    }


    return (
        <div className="mb-24">
            <div className="flex mb-8 justify-between items-center">
                <SectionHeader title='' goNext={goNext} goPrev={goPrev} />
            </div>
            <Swiper onSwiper={setSwiper} {...params}>
            <div>
        {news.map(el => (
            <SwiperSlide key={el.id} >
                <div>
                    <BigNews size="smaller" key={el.id} title={el.title} body={el.body} date={el.date} category={el.category} />
                </div>
            </SwiperSlide>))}
    </div>
            </Swiper>
        </div>
    )
}

export default MainNewsSlider;