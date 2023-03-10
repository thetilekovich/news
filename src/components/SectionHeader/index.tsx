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
        <>
            {
                title == '' ?
                    <div className="flex justify-end">
                        <button
                            className={`${namePrev} slider-btn mx-3 h-full w-7`}>
                            <ToLeft size='py-1 px-2' />
                        </button>
                        <button
                            className={`${nameNext} slider-btn  mx-3 h-full w-7`}>
                            <ToRight size='py-1 px-2'/>
                        </button>
                    </div>
                    :
                    <div className="flex justify-between items-center ">
                        <SectionTitle title={title} color="black" />
                        <div>
                            <button
                                className={`${namePrev} slider-btn max-w-min slider-btn mx-3`}>
                                <ToLeft size='py-2 px-2' />
                            </button>
                            <button
                                className={`${nameNext} slider-btn max-w-min slider-btn mx-3 `}>
                                <ToRight size='py-2 px-2'/>
                            </button>
                        </div>
                    </div>
            }

        </>
    )
}

export default SectionHeader;