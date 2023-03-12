
import { INewState } from '@/types/news';
import { createSlice } from '@reduxjs/toolkit';
import {getNews} from './actions'


const initialState: INewState = {
    news: [],
    popularity: [],
    tech: [],
    sport: [],
    science: [],
    trending: [],
    isLoading: false,
    error: false
}


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.news = action.payload
            state.isLoading = false
        })
        builder.addCase(getNews.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getNews.rejected, (state) => {
            state.error = true
        })
    }
})

export default newsSlice.reducer
