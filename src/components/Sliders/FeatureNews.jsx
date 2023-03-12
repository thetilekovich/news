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
                    <SectionHeader title='Feature News' nameNext='f-btn-next' namePrev='f-btn-prev' />
                </div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    {...params}>
                    {news.map((el,idx) => (
                        idx > 30 ? 
                        <SwiperSlide key={el.id} >
                            <div className='mx-2 flex items-end py-5 0' style={{
                                backgroundImage: `url('${el.urlToImage}')`,
                                height: '280px',
                                width: '250px',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'auto 100%',
                                backgroundPosition: 'center',
                                backgroundOrigin: 'content-box'
                            }}>
                                <NewsTextInfo size="smaller" bgColor="bg-gray-300 bg-opacity-50" color="text-black" title={el.title} category={el.category} publishedAt={el.publishedAt} />
                            </div>
                        </SwiperSlide> : ""))}
                </Swiper>
            </div>
        </Container >
    );
}

export default FeatureNews