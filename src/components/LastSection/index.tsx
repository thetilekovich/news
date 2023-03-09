import AllNewsInTheEnd from '../AllNewsInTheEnd'
import Container from '../Container'
import Link from 'next/link'
import {useState, ChangeEvent} from 'react'
import ArrowRight from '../../../public/ArrowRight';
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
                <AllNewsInTheEnd />
                <div className='px-10 py-24 w-4/12'>
                    <div className="mb-12">
                    {
                        newsData.map(el => (
                            <Link href={el.url} className=''>
                                <div className='bg-white mb-3 h-16 flex rounded-md duration-700 hover:bg-black hover:text-white items-center justify-between px-3'>
                                    <h1 className=" italic text-2xl font-md ">{el.title}</h1>
                                    <ArrowRight color='green' />
                                </div>
                            </Link>
                        ))
                    }
                    </div>
                    <div className="bg-white px-3 py-5 rounded-md">
                        <h1 className="text-2xl font-bold">News Letter</h1>
                        <p className="italic text-gray-600">Your email address will not be this published. Required fields are News Today.</p>
                        <div className='flex items-center'>
                            <input
                            onChange={handleChange}
                            placeholder="Your email address"
                            value={emailValue}
                            className="border-black border-2 border-solid py-1 px-2 w-9/12 border-r-0 rounded-r-none rounded-md text-black"
                            type="email" />
                            <button
                            className="border-black border-2 border-solid rounded-md rounded-l-none my-3 py-1 px-2 "
                            onClick={handleSubmit}
                            >Submit</button>
                        </div>
                            <p className="italic text-gray-500">We hate spam as much as you do</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default LastSection