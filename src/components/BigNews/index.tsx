import React from 'react'
import NewsTextInfo from '../NewsTextInfo'
import Image from 'next/image'
import playIcon from '../../../public/playIcon.svg'


interface IBigNews {
    title: string,
    publishedAt: string,
    category: string,
    description: string,
    img?: string,
    size?: string
}

const placeholder = 'https://image-component.nextjs.gallery/_next/image?url=%2Fmountains.jpg&w=1920&q=75'

export const BigNews: React.FC<IBigNews> = ({ title, publishedAt, category, description, img = placeholder, size = 'biggest' }) => {
    return ( 
        <div className={`p-4`} style={{
            height: size === 'biggest' ? '80vh' : "60vh"
        }}>
            <div className={`my-box-shodow  flex flex-col justify-between ${size === 'biggest' ? 'h-full' : 'h-80'}`} style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'auto 100%',
                backgroundPosition: 'center',
                backgroundOrigin: 'content-box'
            }}>
                <div className=" mr-3 self-end mt-3">
                    <Image src={playIcon} width='40' height='40' alt='play'/>
                </div>
                <div className={`${size === 'biggest' ? 'px-10 pb-12' : 'px-10 pb-8'} bg-gray-400 bg-opacity-40 `}>
                    <NewsTextInfo size={size} title={title} publishedAt={publishedAt} category={category} description={description} />
                </div>
            </div>
        </div>
    )
}