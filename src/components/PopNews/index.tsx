import React, { useState } from 'react'
import Container from '../Container/index';
import { useAppSelector } from '../../slices/hooks';
import NewsMapping from '../NewsMapping'
import { INew } from '../../types/news'
import { BigNews } from '../BigNews'
import UnderPopSlider from '../Sliders/UnderPopSlider'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';

import "swiper/css/effect-fade";
const PopNews = () => {
    const { news } = useAppSelector(s => s.news)
    const [active, setActive] = useState('POPULAR')

    let pop = { ...news[0] };


    for (let i = 1; i < news.length; i++) {
        if (news[i].popularity > pop.popularity) {
            pop = news[i]
        }
    }
    const params = {
        spaceBetween: 1,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.pop-btn-next',
            prevEl: '.pop-btn-prev',
            }
    }

    let popBody = pop.body?.slice(0, 300)
    return (
        <Container>
            <div className="flex text-white">
                <div className='w-8/12'>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    {...params}>
                    {news.map(el => (
                        <SwiperSlide key={el.id} >
                            <BigNews title={pop.title} body={popBody} category={pop.category} date={pop.date} />
                        </SwiperSlide>))}
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
                                news.filter(el => el.category.toUpperCase() == active).map((el: INew, idx: number) => (
                                    idx < 6 ?
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