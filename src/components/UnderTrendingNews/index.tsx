import React from 'react'
import { useAppSelector } from '../../slices/hooks'
import NewsMapping from '../NewsMapping'
import SectionTitle from '../SectionTitle'
import Twitter from '../../../public/SocialMedaIcons/Twitter.svg'
import Youtube from '../../../public/SocialMedaIcons/Youtube.svg'
import Facebook from '../../../public/SocialMedaIcons/Facebook.svg'
import Instagram from '../../../public/SocialMedaIcons/Instagram.svg';
import Telegram from '../../../public/SocialMedaIcons/Telegram.svg'
import vk from '../../../public/SocialMedaIcons/Vk.svg'
import Image from 'next/image'


// Give same p-btn-next и p-btn-prev className for making singhronic sliding.


interface ISocialMedia {
    id: number,
    icon: any,
    name: string,
    bgColor: string,
    url: string,
    subscribes: string
}

const socialMedia: ISocialMedia[] = [
    {
        id: 0,
        name: 'Facebook',
        icon: Facebook,
        url: 'https://facebook.com',
        bgColor: '#001580',
        subscribes : '34,500'
    },
    {
        id: 1,
        icon: Twitter,
        name: 'Twitter',
        url: 'https://twitter.com',
        bgColor: '#00eaff',
        subscribes : '24,000'
    },
    {
        id: 2,
        icon: Youtube,
        name: 'Youtube',
        url: 'https://youtube.com',
        bgColor: '#990101',
        subscribes : '3,500'
    },
    {
        id: 3,
        icon: Instagram,
        name: 'Instagram',
        url: 'https://instagram.com',
        bgColor: '#9e008f',
        subscribes : '50,500'
    },
    {
        id: 4,
        icon: Telegram ,
        name: 'Telegram',
        url: 'https://t.me/martfury',
        bgColor: '#00ffbe',
        subscribes : '10,000'
    },
    {
        id: 5,
        icon: vk,
        name: 'vk',
        url: 'https://vk.ru',
        bgColor: '#27b600',
        subscribes : '2,000'
    }
]






const UnderTrendingNews = () => {
    const { news } = useAppSelector(s => s.news)
    return (
        <div className='flex justify-between mb-8'>
            <div className='grid grid-cols-2 grid-rows-3 items-end gap-5'>
                {news.map((el, idx) => (
                    idx > 55 && idx <= 61 ?
                        <div key={el.id} style={{
                            width: '350px',
                        }}>
                            <NewsMapping el={el} size="md"/>
                        </div>
                        : ''
                ))}
            </div>
            <div>
                <SectionTitle title="Follow Us"/>
                <div className="grid grid-cols-3 gap-2 mt-5">
                    {
                        socialMedia.map(el => (
                            <a
                            key={el.id}
                            href={el.url} className="w-32 h-14 py-2 px-4 flex items-center justify-center" style={{background: el.bgColor}}>
                                <Image src={el.icon} width={25} height={25} alt={el.icon}/>
                                <div className={`${el.name === 'Twitter' || el.name === 'Telegram' ? "text-black" : 'text-white'} font-bold ml-4`}>
                                    <p>{el.subscribes}</p>
                                    <p className=" font-extrabold text-xs">followers</p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default UnderTrendingNews