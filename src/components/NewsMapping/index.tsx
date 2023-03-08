import React, {useRef} from 'react'
import Image from '../Image'
import {INew} from '../../types/news'
import Link from 'next/link'

const NewsMapping = ({el, size = 'md'} : {el: INew, size?: string}) => {
  const imageRef = useRef(null)

  const handleHoverScale = () => {
    if(imageRef.current !== null){
    // imageRef.current.style.transform = 'scale(1.3)'
    }
  }
  const handleHoverScaleM = () => {
    if(imageRef.current !== null){
      // imageRef.current.style.transform = 'scale(1)'
    }
  }
  return (
    <Link href=''className="w-full h-auto text-white flex my-3 border-news-mapped items-center content-center"
    onMouseDown={handleHoverScale}
    // onMouseLeft={handleHoverScaleM}
    >
        <Image ref={imageRef} width={'100px'} height={'80px'}/>
        <div className="ml-6">
            <h3 className=" text-xs"><span className="uppercase font-md text-blue-600">{el.category}</span> / {el.date}</h3>
            <h1 className={`text-${size} text-bold`}>{el.title}</h1>
        </div>
    </Link>
  )
}

export default NewsMapping