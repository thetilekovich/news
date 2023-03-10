import React from 'react'
import Image from '../Image';
import ToLeft from '../Arrows/ToLeft';
import ToRight from '../Arrows/ToRight';
import Container from '../Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useAppSelector } from '../../slices/hooks';

// import SwiperCore, {
//     Autoplay
// } from 'swiper'

const params = {
    // module: [Autoplay],
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    pagination: { clickable: true },
    navigation: {
        nextEl: '.first-btn-next',
        prevEl: '.first-btn-prev',
    }
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //     pauseOnMouseEnter: true,
    // }
}



const FirstSlider = () => {
    const { news } = useAppSelector(s => s.news)
    // SwiperCore.use([Autoplay]);

    return (
        <Container>
            <div className='mb-8 flex items-center h-20'>
                <button
                    className='first-btn-prev h-full w-80'>
                    <ToLeft size='py-7' />
                </button>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y]}
                    {...params}
                >
                    {
                        news.map(el => (
                            <SwiperSlide key={el.id} >
                                <div className='flex'>
                                    <Image alt="d" width={100} height={80} />
                                    <div className="mx-3">
                                        <h1 className='text-md font-medium text-black'>{el.title.slice(0,35)}...</h1>
                                        <p className="text-sm forn-light break-all  text-gray-700">{el?.body?.slice(0, 50)}...</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <button
                    className='first-btn-next h-full w-80'>
                    <ToRight size='py-7' />
                </button>
            </div>
        </Container >
    );
}

export default FirstSlider