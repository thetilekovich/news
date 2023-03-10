import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../Container';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import { useAppSelector } from '../../slices/hooks';
import NewsTextInfo from '../NewsTextInfo/index';
import SectionHeader from '../SectionHeader';



const FeatureNews = () => {
    const { news } = useAppSelector(s => s.news)


    const params = {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: true,
        navigation: {
            nextEl: '.f-btn-next',
            prevEl: '.f-btn-prev',
            }
    }

    return (
        <Container>
            <div className='mb-24'>
                <div className="mb-8 ">
                    <SectionHeader title='Feature News' nameNext='f-btn-next' namePrev='f-btn-prev'  />
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    {...params}>
                    {news.map(el => (
                        <SwiperSlide key={el.id} >
                            <div className='border-2 mx-2 flex items-end py-5 px-6' style={{
                                backgroundImage: 'https://dummyimage.com/250x280/ff00ff/00ff2f.png',
                                height: '280px',
                                width: '250px'
                            }}>
                                <NewsTextInfo size="smaller" color="black" title={el.title} category={el.category} date={el.date} />
                            </div>
                        </SwiperSlide>))}
                </Swiper>
            </div>
        </Container >
    );
}

export default FeatureNews