import React from 'react'

const CourseOverview = ({data}:any) => {

    return (
        <div className='xl:p-6'>
            <div className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[18px] font-normal leading-[25px] xl:leading-[27px]'>
                {data?.text}
            </div>
            <div>
                <h1 className='text-[#E4087F] font-montserrat text-[17px] xl:text-[19px] font-bold leading-[28.5px] py-3'>
                    {data?.title}
                </h1>
                <div className='flex flex-col gap-6'>
                    {data?.reasons?.map((reason:any, index:any) => (
                        <div key={index}>
                            <div className='font-montserrat text-[16px] xl:text-[18px] font-semibold leading-[30px]'>
                                {reason?.heading}
                            </div>
                            <div className='text-[#555555] font-montserrat text-[15px] xs:text-[16px] xl:text-[18px] font-normal leading-[23px]'>
                                {reason?.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CourseOverview