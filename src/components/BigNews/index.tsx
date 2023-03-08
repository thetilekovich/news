import React from 'react'
import NewsTextInfo from '../NewsTextInfo'

interface IBigNews {
    title: string,
    date: string,
    category: string,
    body: string,
    img?: string,
    size?: string
}

const placeholder = 'https://image-component.nextjs.gallery/_next/image?url=%2Fmountains.jpg&w=1920&q=75'

export const BigNews: React.FC<IBigNews> = ({title, date, category, body, img = placeholder, size='biggest'}) => {
    return (
        <div className={`${size === 'biggest' ? "w-8/12" : 'w-6/12'} p-4`}>
        <div className={`my-box-shodow flex flex-col justify-between ${size === 'biggest' ? 'px-16 pb-12 h-96' : 'px-12 pb-8 h-64'}`} style={{
            backgroundImage: `url(${img})`,
            backgroundSize: `100% 100%`
        }}>
            <div className="rounded-full w-10 h-10 bg-black self-end mt-3"></div>
            <NewsTextInfo color="white" size={size === 'biggest' ? 'xl' : 'md'} title={title} date={date} category={category} body={body}/>
        </div>
    </div>
    )
}