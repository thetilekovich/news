import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "@/slices/newsSlice";
import newsPageSlice from '@/slices/newsPageSlice'

export function makeStore () {
    return configureStore({
        reducer: {
           news: newsSlice,
           newsPage: newsPageSlice
        }
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch