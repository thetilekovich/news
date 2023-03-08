import React, { FC } from 'react'
import SectionTitle from '../SectionTitle/'
import ToRight from '../Arrows/ToRight'
import ToLeft from '../Arrows/ToLeft'


interface SectionHeaderProps {
    title: string,
    goNext: () => void,
    goPrev: () => void
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, goNext, goPrev }) => {
    return (
        <>
            <SectionTitle title={title} color="white" />
            <div className="flex items-center">
                <button className="slider-btn mx-2 flex items-center cursor-pointer" onClick={goPrev}> <ToLeft size={25} /></button>
                <button className="slider-btn mx-2 cursor-pointer" onClick={goNext}><ToRight size={25} /></button>
            </div>
        </>
    )
}

export default SectionHeader;