import React from 'react'
import registration from "../../../public/Register.png"
import ImageComponent from '@/common/uicomponents/ImageComponent'
import RegistrationCard from '@/components/RegistrationCard/RegistrationCard'

const RegistrationForm = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
            <div className='w-[95%] sm:w-[60%] lg:w-[53%] 3xl:w-[49%] pl-4 pt-4 lg:pt-20 pb-10'>
                <ImageComponent
                    src={registration}
                    alt="Banner"
                    className="h-auto w-[100%]"
                    width={1000}
                    height={1000}
                />
            </div>
            <div className='w-[100%] lg:w-[44%] 3xl:w-[46%]'>
                <RegistrationCard />
            </div>
        </div>
    )
}

export default RegistrationForm