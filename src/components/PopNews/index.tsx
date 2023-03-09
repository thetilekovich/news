import React, { useState } from 'react'
import Container from '../Container/index';
import { useAppSelector } from '@/slices/hooks';
import UnderPopSlider from '../Sliders/UnderPopSlider';
import NewsMapping from '../NewsMapping'
import { INew } from '../../types/news'
import NewsTextInfo from '../NewsTextInfo';
import { BigNews } from '../BigNews'




const PopNews = () => {
    const { news } = useAppSelector(s => s.news)
    const [active, setActive] = useState('POPULAR')

    let pop = { ...news[0] };


    for (let i = 1; i < news.length; i++) {
        if (news[i].popularity > pop.popularity) {
            pop = news[i]
        }
    }

    let popBody = pop.body?.slice(0, 300)
    return (
        <Container>
            <div className="flex text-white">
                <div>
                    <BigNews title={pop.title} body={popBody} category={pop.category} date={pop.date} />
                    {/* <UnderPopSlider /> */}
                </div>
                <div className="w-4/12 p-4">
                    <div className='flex justify-between'>
                        {
                            ['Popular', 'Sport', 'Tech'].map(el => (
                                <button
                                    onClick={(() => setActive(el.toUpperCase()))}
                                    className={`px-4 py-1 mx-2 text-xl duration-1000 ease-out font-bold black-box-shadow uppercase ${active == el.toUpperCase() ? 'bg-blue-600 text-white' : 'bg-white text-black'}`}>
                                    {el}</button>
                            ))
                        }
                    </div>
                    <div>
                        <div>
                            {
                                news.filter(el => el.category.toUpperCase() == active).map((el: INew, idx: number) => (
                                    idx < 5 ?
                                        <NewsMapping key={el.id} el={el} />
                                        : '')
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default PopNews