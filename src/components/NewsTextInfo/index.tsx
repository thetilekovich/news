import React from 'react'


interface NewsTextInfoProps {
    category: string,
    title: string,
    body?: string,
    date: string,
    color?: string,
    size: string,
    catBlue?: boolean
}



const NewsTextInfo: React.FC<NewsTextInfoProps> = ({ category, title, body, date, size, color='text-white', catBlue }) => {
    
    const middle = size === 'middle';
    const biggest = size === 'biggest';
    
    return (
        <div className={`${color} w-full mx-auto `}>
            <span className={`${biggest || middle ? "font-bold text-md" : "text-xs font-semibold"}  uppercase  hover:text-blue-500 cursor-pointer ${catBlue ? 'text-blue-300' : ""}`}>{category}</span>  <span className={`hover:text-blue-400 text-gray-400 `}> / {date}</span>
            <h1 className={`${biggest ? "text-3xl font-extrabold" : middle ? "text-2xl font-bold" : "text-md font-bold"} my-2 hover:text-blue-500 cursor-pointer`}>{title?.length > 100 ? `${title.slice(0,100)}...` : title}</h1>
            {
                body ?
                    <p className="font-light space-x-1 cursor-pointer">{body?.length > 80 ? `${body.slice(0,80)}....`: body} </p>
                    :
                    ''
            }
        </div>
    )
}

export default NewsTextInfo