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



const NewsTextInfo: React.FC<NewsTextInfoProps> = ({ category, title, body, date, size, color='black', catBlue }) => {
    return (
        <div className={`${color} w-full mx-auto `}>
            <span className={`${size === 'xl' ? 'text-lg' : size === 'md' ? 'text-sm' : 'text-xs' } uppercase  font-extrabold hover:text-blue-500 cursor-pointer ${catBlue ? 'text-blue-500' : ""}`}>{category}</span>  <span className="text-sm font-bold"> / {date}</span>
            <h1 className={`${size === 'xl' ? 'text-5xl' : size === 'md' ? 'text-2xl' : 'text-lg' } my-2 font-extrabold hover:text-blue-500 cursor-pointer`}>{title}</h1>
            {
                body ?
                    <p className="font-light space-x-1 hover:text-blue-300 cursor-pointer">{body}</p>
                    :
                    ''
            }
        </div>
    )
}

export default NewsTextInfo