import SectionTitle from "../SectionTitle"
import {useAppSelector, useAppDispatch} from '../../slices/hooks'
import Image from "../Image"
import NewsTextInfo from "../NewsTextInfo"
import {useState} from 'react'
import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const AllNewsInTheEnd = () => {
    const {news} = useAppSelector(s => s.news)
    const [activePageIndex, setPageIndex]  = useState(1)


    const goAnotherPage = (idx: number) => {
        setPageIndex(idx + 1)

    }




    return (
        <>
        <Element name="target"></Element>
        <div className="w-8/12">
            <SectionTitle title="Entertrainment News"/>
            <div  className="grid grid-cols-2 gap-x-6 gap-y-8 mt-10">
                {
                    news.map((el,idx) => (
                        ((activePageIndex * 10) - 10) < idx && idx <= (activePageIndex * 10) ? 
                        <div className="text-white">
                            <Image width={385} height={250} alt='image'/> 
                            <NewsTextInfo key={el.id} {...el} size='md'/>
                            <button 
                            className="py-2 px-4 duration-100  rounded-sm easy-in-out font-bold my-6 slider-btn hover:bg-blue-500 hover:border-none hover:text-black">
                                READ MORE
                                </button>
                        </div>
                        : ''
                    ))
                }
            </div>
            <div className="flex px-10 justify-center py-5 text-white w-full overflow-hidden">
                {
                    news.map((el,idx) => (
                        news.length / 10 > idx ?
                        <Link key={el.id} activeClass="active"
                        to="target"
                        spy={true} 
                        smooth={true}
                        duration={2000}
                        onClick={() => goAnotherPage(idx)}
                        className={` cursor-pointer ${idx + 1 === activePageIndex ? 'font-extrabold text-xl text-blue-300' : ''} mx-3`}>
                            {idx + 1}</Link>
                            : ''
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default AllNewsInTheEnd