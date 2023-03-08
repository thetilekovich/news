import {INew} from '../types/news'


const newsCategories = ['Bussiness', "Sport", "Science", "Stars", "Tech", "Weather"]
const body = 'The uppercase and lowercase will uppercase and lowercase text respectively, whereas capitalize utility will convert text to title-case. The normal-case utility can be used to preserve the original casing — typically to reset capitalization at different breakpoints.'


const newsData: INew[] = []

for (let i = 0; i < 40; i++) {
    const rand1 = Math.round(Math.random() * 5)
    newsData.push(
        {
            id: i,
            title: 'This Title is The Best? Isn\'t it? Just Watch and Enjoy',
            author: 'Izat Musk',
            body: body,
            popularity: rand1 + 3,
            category: newsCategories[rand1],
            date: new Date().getFullYear().toString(),
            img: ''
        }
    )
}
export default newsData;