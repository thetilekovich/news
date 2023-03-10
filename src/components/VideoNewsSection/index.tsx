import React from 'react'
import SectionTitle from '../SectionTitle'
import Container from '../Container/index';
import SectionHeader from '../SectionHeader'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from '../Image'
import 'swiper/scss';
import 'swiper/scss/navigation';
import "swiper/css/effect-fade";
import 'swiper/scss/pagination';
import { Navigation, Scrollbar, A11y,EffectFade } from 'swiper';
import { useAppSelector } from '../../slices/hooks';
import NewsTextInfo from '../NewsTextInfo/index';

const params = {
    spaceBetween: 20,
    slidesPerView: 6,
    slidesPerGroup: 5,
    freeMode: true,
    loop: true,
    direction: "vertical",
    autoHeight: 'true',
    pagination: { clickable: true },
    navigation: {
        nextEl: '.popular-post-btn-next',
        prevEl: '.popular-post-btn-prev',
    },


}
const paramsTwo = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: { clickable: true },
    navigation: {
        nextEl: '.popular-post-btn-next',
        prevEl: '.popular-post-btn-prev',
    },
}
const VideoNewsSection = () => {
    const { news } = useAppSelector(s => s.news)
    return (
        <Container>
            <div className="relative z-10 ">
                <div className="mb-24 -mt-16">
                    <SectionTitle title="Video News" color='white' />
                </div>
                <div className="bg-white p-5">
                    <div className="flex ">
                        <div className="w-8/12 px-2 -mt-16" style={{
                            top: '-500px'
                        }}>
                            <Swiper
                                modules={[Navigation, Scrollbar, A11y]}

                                {...paramsTwo}
                            >
                                {
                                    news.map(el => (
                                        <SwiperSlide key={el.id} >
                                            <div className=' w-full'>
                                                <Image width={'80%'} height={400} alt="a" />
                                                <div className='py-6 px-8 bg-gray-200'>
                                                    <NewsTextInfo color="text-black" catBlue size="middle" title={el.title} body={el.body.slice(0, 160)} category={el.category} date={el.date} />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                        <div className="w-4/12 p-2">
                            <SectionHeader title="Popular Posts" nameNext="popular-post-btn-next" namePrev="popular-post-btn-prev" />
                            <div className="mt-5">
                                <Swiper
                                    modules={[Navigation, Scrollbar, A11y, EffectFade]}
                                    {...params}
                                >
                                    {
                                        news.map(el => (
                                            <SwiperSlide key={el.id} >
                                                <div className='flex'>
                                                    <Image alt="d" width={80} height={60} />
                                                    <div className="mx-3">
                                                        <h1 className='text-md font-medium text-black'>{el.title.slice(0, 35)}...</h1>
                                                        <p className="text-sm forn-light break-all  text-gray-700">{el?.body?.slice(0, 50)}...</p>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container >
    )
}

export default VideoNewsSection