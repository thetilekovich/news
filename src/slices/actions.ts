import axios from 'axios';
import {apikey} from '../Apikey'
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getNews = createAsyncThunk('news/getNews', async (thunkApi) => {
    try {
        const res = await axios(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apikey}`)
        const {articles} = await res.data
        console.log(articles)
        return articles;
    } catch (error) {
        return (error as Error).message
    }
})