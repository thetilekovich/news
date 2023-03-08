import React, { useState } from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import { useAppSelector } from '@/slices/hooks'
import SwiperClass from 'swiper/types/swiper-class';
import { SwiperSlide, Swiper } from 'swiper/react';
import NewsTextInfo from '../NewsTextInfo'
import Image from '../Image'
import UnderTrendingNews from '../UnderTrendingNews';

const TrendingNews = () => {
    const [swiper, setSwiper] = useState<SwiperClass>()
    const { news } = useAppSelector(s => s.news)


    const goNext = () => {

    }
    const goPrev = () => {

    }
    const params = {
        spaceBetween: 20,
        slidesPerView: 3,
        loop: true,
    }


    return (
        <Container>
                <div className="mb-24">
                    <div className="flex mb-8 justify-between items-center">
                        <SectionHeader title='Trending News' goNext={goNext} goPrev={goPrev} />
                    </div>
                    <Swiper onSwiper={setSwiper} {...params}>
                        <div>
                            {news.map(el => (
                                <SwiperSlide key={el.id} >
                                    <div className="flex flex-col items-center">
                                        <Image width={340} height={280} />
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