import React, { useState } from 'react'
import Container from '../Container/index';
import { useAppSelector } from '../../slices/hooks';
import NewsMapping from '../NewsMapping'
import { BigNews } from '../BigNews'
import UnderPopSlider from '../Sliders/UnderPopSlider'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';

import "swiper/css/effect-fade";
const PopNews = () => {
    const { news } = useAppSelector(s => s.news)
    const [active, setActive] = useState('POPULAR')

    const params = {
        spaceBetween: 1,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.pop-btn-next',
            prevEl: '.pop-btn-prev',
            }
    }


    return (
        <Container>
            <div className="flex text-white">
                <div className='w-8/12'>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    {...params}>
                    {news.map((el,idx) => (
                        idx > 20 && idx < 60 ?
                        <SwiperSlide key={el.id} >
                            <BigNews title={el.title} description={el.description} category={el?.category} img={el.urlToImage} publishedAt={el.publishedAt} />
                        </SwiperSlide> : ""))}
                </Swiper>
                <UnderPopSlider />
                </div>
                <div className="w-4/12 p-4">
                    <div className='flex justify-between mb-7'>
                        {
                            ['Popular', 'Sport', 'Tech'].map(el => (
                                <button
                                    key={el}
                                    onClick={(() => setActive(el.toUpperCase()))}
                                    className={`mx-2 text-sm duration-1000 ease-out w-4/12 py-2 font-semibold black-box-shadow uppercase ${active == el.toUpperCase() ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}>
                                    {el}</button>
                            ))
                        }
                    </div>
                    <div>
                        <div>
                            {
                                // news.filter(el => el.category.toUpperCase() == active).map((el: INew, idx: number) => (
                                active === 'POPULAR' ?    
                                news.map((el, idx) => (
                                    idx < 6 ?
                                        <NewsMapping key={el.id} el={el} />
                                        : '')
                                )
                                :
                                active === 'TECH' ?    
                                news.map((el, idx) => (
                                    idx >= 6 && idx < 12 ?
                                        <NewsMapping key={el.id} el={el} />
                                        : '')
                                )
                                :
                                news.map((el, idx) => (
                                    idx >= 12 && idx < 18 ?
                                        <NewsMapping key={el.id} el={el} />
                                        : '')
                                )
                                

                            }
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default PopNews