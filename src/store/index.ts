import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "@/slices/newsSlice";


export function makeStore () {
    return configureStore({
        reducer: {
           news: newsSlice
        }
    })
}

export const store = makeStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch