import ImageComponent from '@/common/uicomponents/ImageComponent'
import React from 'react'
import { Tooltip } from '@mui/material';
import { FiMapPin } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { LuClock4 } from "react-icons/lu";
import Link from 'next/link';

const MeetUsCard = ({ data }: any) => {
    return (
        <div className='bg-white p-4 flex flex-col xs:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-12'>
            <div className='w-[50%] xs:w-[32%] sm:w-[26%] lg:w-[15%]'>
                <ImageComponent
                    src={data?.image}
                    alt="Banner"
                    className="h-auto w-100% rounded-[12px]"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className='w-[98%] xs:w-[66%] sx:w-[72%] lg:w-[70%] flex flex-col justify-center'>
                <Tooltip title={data?.title || ''} arrow>
                    <div
                        className='font-montserrat text-[18px] lg:text-[22px] 2xl:text-[25px] font-bold leading-[22px] 2xl:leading-[30.48px] truncate'
                        style={{ cursor: 'pointer' }}
                    >
                        {data?.title}
                    </div>
                </Tooltip>
                <div className='flex flex-col sm:flex-row gap-2 sm:gap-8 lg:gap-12 py-2 lg:py-3 2xl:py-6 text-[#111827]'>
                    <div className='flex gap-2 items-center'>
                        <FiMapPin className='h-[17px] lg:h-[20px] 2xl:h-[26px] w-[17px] lg:w-[20px] 2xl:w-[26px]' />
                        <div className='font-montserrat text-[16px] lg:text-[18px] 2xl:text-[20px] font-medium leading-[24.38px]'>{data?.location}</div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <LuClock4 className='h-[17px] lg:h-[20px] 2xl:h-[26px] w-[17px] lg:w-[20px] 2xl:w-[26px]' />
                        <div className='font-montserrat text-[16px] lg:text-[18px] 2xl:text-[20px] font-medium leading-[24.38px]'>{data?.time}</div>
                    </div>
                </div>
                <Link href={data?.link || '#'} target='_blank'>
                    <div className='flex gap-2 items-center text-[#E4087F] hover:text-[#ac0660] cursor-pointer font-montserrat text-[15px] lg:text-[18px] 2xl:text-[20px] font-medium leading-[24.38px]'>Visit Website
                        <GoArrowRight />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MeetUsCard;
