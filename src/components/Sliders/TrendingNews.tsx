import React from 'react'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import { useAppSelector } from '../../slices/hooks'
import { SwiperSlide, Swiper } from 'swiper/react';
import NewsTextInfo from '../NewsTextInfo'
import Image from 'next/image'
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
                <div className="mb-10">
                    <div className="mb-8">
                        <SectionHeader title='Trending News' namePrev='t-btn-prev' nameNext='t-btn-next' />
                    </div>
                    <Swiper 
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    onSwiper={swiper => console.log(swiper)}
                     {...params}>
                        <div>
                            {news.map((el,idx) => (
                                idx > 40 ?
                                <SwiperSlide key={el.id} >
                                    <div className="flex flex-col items-center h-70">
                                        <img
                                        style={{
                                            // float: 'left',
                                            width:  '100%',
                                            maxHeight: '200px',
                                            minHeight: '200px',
                                            backgroundSize: 'cover',
                                            objectFit: 'scale-down'
                                        }}
                                            height={240}
                                            width={'100%'}
                                            alt=""
                                             src={el.urlToImage} 
                                             />
                                        <div className="ml-5 mt-3 self-start">
                                            <NewsTextInfo catBlue color="text-black" size="middle" title={el.title} description={el.description.slice(0, 160)} category={el.category} publishedAt={el.publishedAt} />
                                        </div>
                                    </div>
                                </SwiperSlide> : ""))}
                        </div>
                    </Swiper>
                </div>
                <UnderTrendingNews />
        </Container >
    )
}

export default TrendingNews