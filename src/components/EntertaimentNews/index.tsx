import SectionTitle from "../SectionTitle"
import { useAppSelector } from '../../slices/hooks'
import Image from "../Image"
import NewsTextInfo from "../NewsTextInfo"
import { useState } from 'react'
import { Link, Element } from 'react-scroll'

const EntertaimentNews = () => {
    const { news } = useAppSelector(s => s.news)
    const [activePageIndex, setPageIndex] = useState(1)


    const goAnotherPage = (idx: number) => {
        setPageIndex(idx + 1)

    }


    return (
        <>
            <Element name="target"></Element>
            <div className="w-8/12">
                <SectionTitle title="Entertrainment News" />
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-10">
                    {
                        news.map((el, idx) => (
                            ((activePageIndex * 10) - 10) < idx && idx <= (activePageIndex * 10) ?
                                <div key={el.id} className="text-white flex flex-col justify-between items-start">
                                    <img src={el.urlToImage} alt='' style={{
                                        width: '385px',
                                        height: '250px',
                                    }} />
                                    <div className="mt-4">
                                        <NewsTextInfo color="text-black" key={el.id} {...el} catBlue size='middle' />
                                    </div>
                                    <button
                                        className="border border-black border-solid py-3 text-sm px-5 duration-500 text-gray-700 rounded-sm easy-in-out font-medium my-6 hover:bg-blue-500 hover:border-none hover:text-white">
                                        Read more
                                    </button>
                                </div>
                                : ''
                        ))
                    }
                </div>
                <div className="flex px-10 justify-center py-5 text-black w-full overflow-hidden">
                    {
                        news.map((el, idx) => (
                            news.length / 10 > idx ?
                                <Link key={el.id} activeClass="active"
                                    to="target"
                                    spy={true}
                                    smooth={true}
                                    duration={2000}
                                    onClick={() => goAnotherPage(idx)}
                                    className={` cursor-pointer ${idx + 1 === activePageIndex ? 'font-extrabold text-xl text-blue-600' : ''} mx-3`}>
                                    {idx + 1}</Link>
                                : ''
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default EntertaimentNews