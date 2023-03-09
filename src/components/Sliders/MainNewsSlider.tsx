import React from 'react'
import SectionHeader from '../SectionHeader'
import { useAppSelector } from '../../slices/hooks'
import { SwiperSlide, Swiper } from 'swiper/react';
import { BigNews } from '../BigNews';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';



const MainNewsSlider = () => {
    const { news } = useAppSelector(s => s.news)

    const params = {
        spaceBetween: 20,
        slidesPerView: 2,
        loop: true,
        navigation: {
            nextEl: '.m-btn-next',
            prevEl: '.m-btn-prev',
            }
    }


    return (
        <div className="mb-24 px-5">
            <SectionHeader title='' nameNext='m-btn-next' namePrev="m-btn-prev" />
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            onSwiper={(swiper => console.log(swiper))} 
            
             {...params}>
                {news.map(el => (
                    <SwiperSlide key={el.id} >
                        <div>
                            <BigNews size="smaller" key={el.id} title={el.title} body={el.body} date={el.date} category={el.category} />
                        </div>
                    </SwiperSlide>))}
            </Swiper>
        </div>
    )
}

export default MainNewsSlider;