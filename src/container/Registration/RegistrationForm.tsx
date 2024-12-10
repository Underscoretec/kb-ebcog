import React from 'react'
import registration from "../../../public/Register.png"
import ImageComponent from '@/common/uicomponents/ImageComponent'
import RegistrationCard from '@/components/RegistrationCard/RegistrationCard'

const RegistrationForm = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center lg:items-start'>
            <div className='w-[95%] sm:w-[80%] lg:w-[45%] xl:w-[53%] 3xl:w-[48%] pl-4 xs:pl-8 px-4 xs:pr-4 pt-4 lg:pt-20 pb-6 flex justify-centeritems-center'>
                <ImageComponent
                    src={registration}
                    alt="Banner"
                    className="h-auto w-[100%]"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className='w-[100%] lg:w-[54%] xl:w-[44%] 3xl:w-[46%]'>
                <RegistrationCard />
            </div>
        </div>
    )
}

export default RegistrationForm