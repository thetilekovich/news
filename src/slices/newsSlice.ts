
import { INewState } from '@/types/news';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const getNews = createAsyncThunk('news/getNews', async (thunkApi) => {
    try {
        const res = await axios('http://localhost:3000/api/news')
        const data = await res.data
        return data;
    } catch (error) {
        return (error as Error).message
    }
})


const initialState: INewState = {
    news: [],
    isLoading: false,
    error: false
} as INewState


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getNews.fulfilled, (state, action) => {
            state.news.push(...action.payload)
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
