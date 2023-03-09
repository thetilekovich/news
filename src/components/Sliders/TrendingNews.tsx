import React from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import { useAppSelector } from '../../slices/hooks'
import { SwiperSlide, Swiper } from 'swiper/react';
import NewsTextInfo from '../NewsTextInfo'
import Image from '../Image'
import UnderTrendingNews from '../UnderTrendingNews';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const TrendingNews = () => {
    const { news } = useAppSelector(s => s.news)

    const params = {
        spaceBetween: 20,
        slidesPerView: 3,
        loop: true,
        navigation: {
            nextEl: '.t-btn-next',
            prevEl: '.t-btn-prev',
            }
    }


    return (
        <Container>
                <div className="mb-24">
                    <div className="flex mb-8 justify-between items-center">
                        <SectionHeader title='Trending News' namePrev='t-btn-prev' nameNext='t-btn-next' />
                    </div>
                    <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    onSwiper={swiper => console.log(swiper)}
                     {...params}>
                        <div>
                            {news.map(el => (
                                <SwiperSlide key={el.id} >
                                    <div className="flex flex-col items-center">
                                        <Image alt='e' width={340} height={280} />
                                        <div className="ml-5 self-start">
                                            <NewsTextInfo catBlue color="text-white" size="md" title={el.title} body={el.body.slice(0, 160)} category={el.category} date={el.date} />
                                        </div>
                                    </div>
                                </SwiperSlide>))}
                        </div>
                    </Swiper>
                </div>
                <UnderTrendingNews />
        </Container >
    )
}

export default TrendingNews