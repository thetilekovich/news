import { getNews } from "@/slices/newsSlice"
import { RootState } from "@/store";
import { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../slices/hooks';
import FirstSlider from "@/components/Sliders/FirstSlider";
import PopNews from "@/components/PopNews";
import FeatureNews from '../../components/Sliders/FeatureNews';
import TrendingNews from "@/components/Sliders/TrendingNews";
import MainNewsSlider from "@/components/Sliders/MainNewsSlider";

const News = () => {
    const newsRef = useRef(false)
    const dispatch = useAppDispatch()
    const { error, isLoading } = useSelector((s: RootState) => s.news)

    useEffect(() => {
        if (newsRef.current === false) {
            dispatch(getNews())
        }
        return () => {
            newsRef.current = true
        }
    }, [])
    if (error) return <h1>{error}</h1>
    if (isLoading) return <h1>Loading</h1>
    return (
        <div>
            <FirstSlider/>
            <PopNews/>
            <FeatureNews/>
            <TrendingNews/>
            <MainNewsSlider/>
        </div>
    )
}

export default News 