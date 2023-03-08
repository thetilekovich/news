export interface INew {
    id: number,
    title: string,
    body: string,
    img: string,
    category: string,
    popularity: number,
    author: string,
    date: string
}

export interface INewState {
    news: INew[],
    isLoading: boolean,
    error: boolean
}