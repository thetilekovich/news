import React, { FC } from 'react'
import SectionTitle from '../SectionTitle/'
import ToRight from '../Arrows/ToRight'
import ToLeft from '../Arrows/ToLeft'


interface SectionHeaderProps {
    title: string,
    nameNext: string
    namePrev: string,
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, nameNext, namePrev }) => {
    return (
        <>
            {
                title == '' ?
                    <div className="flex justify-between">
                        <button className={`${namePrev} slider-btn mx-2 flex items-center  rounded-sm  cursor-pointer hover:text-blue-500`}> <ToLeft size={25} /></button>
                        <button className={`${nameNext} slider-btn mx-2 cursor-pointer  rounded-sm   hover:text-blue-500`}><ToRight size={25} /></button>
                    </div>
                    :
                    <>
                        <SectionTitle title={title} color="white" />
                        <div className="flex items-center">
                            <button className={`${namePrev}  slider-btn mx-2 flex items-center hover:text-blue-500  rounded-sm cursor-pointer`} > <ToLeft size={25} /></button>
                            <button className={`${nameNext}  slider-btn mx-2 cursor-pointer  rounded-sm   hover:text-blue-500`}><ToRight size={25} /></button>
                        </div>
                    </>
            }

        </>
    )
}

export default SectionHeader;