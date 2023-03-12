import React from 'react'
import SectionHeader from '../../SectionHeader'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import Image from '../../Image'
import { useAppSelector } from '../../../slices/hooks'

const MostShare = () => {
    const { news } = useAppSelector(s => s.news)
    const params = {
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
        direction: "vertical" as "vertical",
        flexDirection: 'row' as 'row',
        height: 50,
        freeMode: true,
        loop: true,
        pagination: { clickable: true },
        navigation: {
            nextEl: '.most-share-btn-next',
            prevEl: '.most-share-btn-prev',
        },

    }
    return (
        <div className="most-share py-2 mb-12">
            <SectionHeader title="Most Share" nameNext="most-share-btn-next" namePrev="most-share-btn-prev" />
            <div className="mt-5 h-96 overflow-scroll">
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    {...params}
                >
                    {
                        news.map((el,idx) => (
                            idx > 40 ?
                            <SwiperSlide key={el.id} >
                                <div className='flex items-between'>
                                    <img src={el.urlToImage} alt="" style={{
                                        maxWidth: '110px',
                                        width: '100px',
                                        minWidth: '100px',
                                        height: 'auto',
                                        minHeight: '60px',
                                        maxHeight: '70px'
                                    }} />
                                    <div className="mx-3">
                                        <h1 className='text-sm font-medium text-black'>{el.title.slice(0, 50)}...</h1>
                                        <p className="text-xs forn-light break-all  text-gray-700">{el?.description?.slice(0, 35)}...</p>
                                    </div>
                                </div>
                            </SwiperSlide> : ""
                        ))
                    }
                </Swiper>
            </div>
        </div>)
}

export default MostShare