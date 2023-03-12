import React from 'react'


interface NewsTextInfoProps {
    category: string,
    title: string,
    description?: string,
    publishedAt: string,
    color?: string,
    size: string,
    catBlue?: boolean,
    bgColor?: string | boolean
}



const NewsTextInfo: React.FC<NewsTextInfoProps> = ({ category, title, description, publishedAt, size, bgColor="", color='text-white', catBlue }) => {
    
    const middle = size === 'middle';
    const biggest = size === 'biggest';
    
    return (
        <div className={`${color + ' ' + bgColor} px-2 pt-2  w-full mx-auto `}>
            <span className={`${biggest || middle ? "font-bold text-md" : "text-xs font-semibold"}  uppercase  hover:text-blue-400 cursor-pointer ${catBlue ? 'text-blue-400' : ""}`}>{category || 'sport'}</span>  <span className={`hover:text-blue-400 text-gray-300 `}> / {publishedAt}</span>
            <h1 className={`${biggest ? "text-3xl font-extrabold" : middle ? "text-2xl font-bold" : "text-md font-bold"} my-2 hover:text-blue-400 cursor-pointer`}>{title?.length > 50 ? `${title.slice(0,50)}...` : title}</h1>
            {
                description ?
                    <p className="font-light space-x-1 cursor-pointer">{description.length > 80 ? `${description.slice(0,100)}....` : description} </p>
                    :
                    ''
            }
        </div>
    )
}

export default NewsTextInfo