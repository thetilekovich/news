import AllNewsInTheEnd from '../AllNewsInTheEnd'
import Container from '../Container'
import Link from 'next/link'

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
    

    return (
        <Container>

        <div className="flex mb-16">
            <AllNewsInTheEnd/>
            <div className='px-10 py-18'>
                {
                    newsData.map(el => (
                        <Link href={el.url} className='w-full bg-white'>
                            <h1 className="text-white">{el.title}</h1>
                        </Link>
                    ))
                }
            </div>
        </div>
        </Container>
    )
}

export default LastSection