import MainNewsSlider from '@/components/Sliders/MainNewsSlider'
import React from 'react'
import VideoNewsSection from '../VideoNewsSection'

const VideoNews = () => {
  return (
    <div className="relative">
        <MainNewsSlider/>
        <div className="absolute top-48 w-full " style={{height: '500px', background: '#010b1c'}}></div>
        <VideoNewsSection/>
    </div>
  )
}

export default VideoNews