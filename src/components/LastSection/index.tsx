import Container from '../Container'
import Link from 'next/link'
import {useState, ChangeEvent} from 'react'
import ArrowRight from '../../../public/ArrowRight';
import EntertaimentNews from '../EntertaimentNews'

import EmailSubscribe from '../EmailSubscribe';
import MostShare from '../MostShare';

interface IDataNews {
    id: number,
    title: string,
    url: string,
    img: string
}

const newsData: IDataNews[] = [
    {
        id: 1,
        title: 'Restaurant',
        url: '',
        img: '',
    },
    {
        id: 2,
        title: 'Entertainment',
        url: '',
        img: '',
    },
    {
        id: 1,
        title: 'Feature',
        url: '',
        img: '',
    },
    {
        id: 1,
        title: 'Bussiness',
        url: '',
        img: '',
    },
    {
        id: 1,
        title: 'Trending',
        url: '',
        img: '',
    },
    {
        id: 1,
        title: 'Sports',
        url: '',
        img: '',
    }
]






const LastSection = () => {
    const [emailValue, setEmailValue] = useState('')


    const handleSubmit = () => {

    }
    const handleChange = (input: ChangeEvent<HTMLInputElement>) => {
        setEmailValue(input.target.value)
    }




    return (
        <Container>

            <div className="flex mb-16 justify-between">
                <EntertaimentNews />
                <div className='px-5 py-24 w-4/12'>
                    <div className="news-categories mb-12">
                    {
                        newsData.map(el => (
                            <Link key={el.id} href={el.url} className=''>
                                <div className='bg-white mb-3 h-16 flex rounded-md duration-700 hover:bg-black hover:text-white items-center justify-between px-3'>
                                    <h1 className=" italic text-2xl font-md ">{el.title}</h1>
                                    <ArrowRight color='green' />
                                </div>
                            </Link>
                        ))
                    }
                    </div>
                    <MostShare/>
                    <div>

                    </div>
                    <EmailSubscribe emailValue={emailValue} handleChange={handleChange} handleSubmit={handleSubmit}/>
                </div>
            </div>
        </Container>
    )
}

export default LastSection