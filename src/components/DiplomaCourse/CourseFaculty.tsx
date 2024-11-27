import React from 'react'
import Button from '@/common/uicomponents/Button'
import ImageComponent from '@/common/uicomponents/ImageComponent'

const CourseFaculty = ({ data }: any) => {
    return (
        <div className='flex flex-col gap-12'>
            {data?.map((faculty: any, index: any) => (
                <div key={index} className='flex gap-2 xs:gap-4 xl:gap-6'>
                    <div className="w-[14%] lg:w-[10%] xl:w-[8%]">
                        <ImageComponent
                            src={faculty?.image}
                            alt="faculty image"
                            className="h-auto w-full border-2 border-[#E4087F] rounded-[12px]"
                            width={1000}
                            height={1000}
                        />
                    </div>
                    <div className="w-[84%] lg:w-[90%]">
                        <h3 className="font-montserrat text-[15px] xs:text-[18px] xl:text-[20px] font-semibold leading-[20px] xs:leading-[24px]">
                            {faculty?.name} {faculty.role && `(${faculty?.role})`}
                        </h3>
                        <p className="text-[#555555] font-montserrat text-[14px] xs:text-[16px] xl:text-[18px] font-normal leading-[24p3] xs:leading-[27px] my-2 xl:my-3">
                            {faculty?.description}
                        </p>
                        <Button
                            label='Know More'
                            className="py-2 px-4 bg-[#E4087F] font-poppins text-sm font-medium leading-4 text-white rounded-[6px] transition-all duration-400 ease-in-out hover:bg-[#ac0660]"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CourseFaculty
