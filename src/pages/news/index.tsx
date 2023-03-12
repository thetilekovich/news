import { getNews } from "@/slices/actions"
import { RootState } from "@/store";
import { useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../slices/hooks';
import FirstSlider from "@/components/Sliders/FirstSlider";
import PopNews from "@/components/PopNews";
import FeatureNews from '../../components/Sliders/FeatureNews.jsx';
import TrendingNews from "@/components/Sliders/TrendingNews";
import LastSection from '../../components/LastSection/index';
import UnderSocialMedia from '../../components/Sliders/UnderSocialMedia'
import VideoNews from "@/components/VideoNews/indext";

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
            <UnderSocialMedia/>
            <VideoNews/>
            <LastSection/>
        </div>
    )
}

export default News 