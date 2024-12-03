import React from 'react'

const CourseOverview = ({ data }: any) => {

    return (
        <div className='xl:p-6'>
            <div className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[18px] font-normal leading-[25px] xl:leading-[27px]'>
                {data?.text}
            </div>
            <div>
                <h1 className='text-[#E4087F] font-montserrat text-[17px] xl:text-[19px] font-bold leading-[28.5px] py-5'>
                    {data?.title}
                </h1>
                <ul className='flex flex-col gap-6 list-disc pl-5'>
                    {data?.reasons?.map((reason: any, index: any) => (
                        <li
                            key={index}
                            className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[18px] font-normal leading-[23px]'
                        >
                            {reason?.description}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h1 className='text-[#E4087F] font-montserrat text-[17px] xl:text-[19px] font-bold leading-[28.5px] py-5'>
                    {data?.question}
                </h1>
                <ul className='flex flex-col gap-6 list-disc pl-5'>
                    {data?.answer?.map((reason: any, index: any) => (
                        <li
                            key={index}
                            className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[18px] font-normal leading-[13px]'
                        >
                            {reason?.point}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default CourseOverview