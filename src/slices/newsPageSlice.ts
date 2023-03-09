import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
    activePageIndex: number
}

const initialState: IInitialState = {
    activePageIndex: 1
}

const newsPageSlice = createSlice({
    name: 'news_page',
    initialState,
    reducers: {
        goToPage(state, action) {
            state.activePageIndex += 1
        }
    }
})

export const { goToPage } = newsPageSlice.actions
export default newsPageSlice.reducer