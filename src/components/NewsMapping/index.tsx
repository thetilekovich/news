import React, {useRef} from 'react'
import Image from '../Image'
import {INew} from '../../types/news'
import Link from 'next/link'

const NewsMapping = ({el, size = 'md'} : {el: INew, size?: string}) => {
  const imageRef = useRef(null)

  const handleHoverScale = () => {
    if(imageRef.current !== null){
    }
  }
  return (
    <Link href=''className="w-full h-auto text-black flex my-3 border-news-mapped items-center content-center"
    onMouseDown={handleHoverScale}
    >
        <img
          src={el.urlToImage}
          alt=''
          style={{minHeight: '70px', minWidth: '110px', maxWidth: '75px', maxHeight: '115px'}}
         width={110} height={70}/>
        <div className="ml-6 flex flex-col justify-between">
            <h3 className=" text-xs text-gray-500 mb-2"><span className="uppercase font-md text-blue-500">{el.category || "Sport"}</span> / &nbsp; &nbsp; {el.publishedAt}</h3>
            <h1 className={`text-md font-bold`}>{el.title.slice(0,50)}...</h1>
        </div>
    </Link>
  )
}

export default NewsMapping