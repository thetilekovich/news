export interface INew {
    id: number,
    title: string,
    description: string,
    urlToImage: string,
    category: string,
    popularity: number,
    author: string,
    publishedAt: string,
    content: string,
}


export interface INewState {
    news: INew[],
    popularity: INew[],
    tech: INew[],
    sport: INew[],
    science: INew[],
    trending: INew[],
    isLoading: boolean,
    error: boolean
}