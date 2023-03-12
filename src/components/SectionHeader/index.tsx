import React, { FC } from 'react'
import SectionTitle from '../SectionTitle/'
import ToRight from '../Arrows/ToRight'
import ToLeft from '../Arrows/ToLeft'

interface SectionHeaderProps {
    title?: string,
    nameNext: string
    namePrev: string,
}

const SectionHeader: FC<SectionHeaderProps> = ({ title = '', nameNext, namePrev }) => {
    return (

        <div className={`flex ${title === '' ? 'justify-end' : 'justify-between'} items-center `}>
            {
                title === '' ? '' : <SectionTitle title={title} color="black" />
            }
            <div>
                <button
                    className={`${namePrev} slider-btn max-w-min slider-btn mx-3`}>
                    <ToLeft width={37} height={'100%'} />
                </button>
                <button
                    className={`${nameNext} slider-btn max-w-min slider-btn mx-3 `}>
                    <ToRight width={37} height={'100%'} />
                </button>
            </div>
        </div>
    )
}

export default SectionHeader;