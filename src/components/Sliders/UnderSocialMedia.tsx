import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../Container';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useAppSelector } from '../../slices/hooks';
import Image from '../Image';
import SectionHeader from '../SectionHeader'

// import SwiperCore, {
//     Autoplay
// } from 'swiper'

const params = {
    // module: [Autoplay],
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    pagination: { clickable: true },
    navigation: {
        nextEl: '.undersocial-btn-next',
        prevEl: '.undersocial-btn-prev',
    }
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // }
}



const UnderSocialMedia = () => {
    const { news } = useAppSelector(s => s.news)
    // SwiperCore.use([Autoplay]);

    return (
        <Container>
            <div className='items-center mb-24'>
                <SectionHeader namePrev="undersocial-btn-prev" nameNext="undersocial-btn-next" />
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    {...params}
                >
                    {
                        news.map((el,idx) => (
                            idx > 50 && idx <= 60 ?
                            <SwiperSlide key={el.id} >
                                <div className='flex mt-5'>
                                    <img alt="" src={el.urlToImage} style={{
                                        width:'120px',
                                        maxHeight: '80px',
                                        minWidth: '110px',
                                        minHeight: '70px',
                                        objectFit: 'scale-down'
                                    }}/>
                                    <div className="mx-3">
                                        <h1 className='text-md font-medium text-black'>{el.title.slice(0, 35)}...</h1>
                                    </div>
                                </div>
                            </SwiperSlide> : ""
                        ))
                    }
                </Swiper>
            </div>
        </Container >
    );
}

export default UnderSocialMedia