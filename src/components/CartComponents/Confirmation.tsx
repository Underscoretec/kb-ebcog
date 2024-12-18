import Button from '@/common/uicomponents/Button';
import React from 'react'
import { FaCheck } from "react-icons/fa";

const Confirmation = () => {
    return (
        <div className='flex items-center flex-col gap-10 min-h-[30rem] py-0 xs:py-8 sm:py-20'>
            <div className='bg-[#E4087F] rounded-full h-[60px] w-[60px] flex items-center justify-center text-[#fff] text-[24px]'><FaCheck /></div>
            <div className='flex flex-col items-center gap-3'>
                <h1 className='font-montserrat text-[28px] sm:text-[35px] font-medium leading-[42.67px] text-center'>Your payment is completed!</h1>
                <p className='text-[#767676] font-montserrat text-base font-normal leading-6 text-center'>Thank you. Your order has been received.</p>
            </div>
            <div className='w-full xs:w-auto border-2 border-dashed border-[#22222233] p-4 md:p-6 flex flex-col sm:flex-row gap-6 sm:gap-10 md:gap-20'>
                <div className='block xs:flex items-center gap-4 sm:block'>
                    <div className='text-[#767676] font-montserrat text-sm font-normal leading-6'>Order Number</div>
                    <div className='text-[#222222] font-montserrat text-base font-semibold leading-[19.5px] pt-2 xs:pt-0 sm:pt-2'>13119</div>
                </div>
                <div className='block xs:flex items-center gap-4 sm:block'>
                    <div className='text-[#767676] font-montserrat text-sm font-normal leading-6'>Date</div>
                    <div className='text-[#222222] font-montserrat text-base font-semibold leading-[19.5px] pt-2 xs:pt-0 sm:pt-2'>27/11/2020</div>
                </div>
                <div className='block xs:flex items-center gap-4 sm:block'>
                    <div className='text-[#767676] font-montserrat text-sm font-normal leading-6'>Total</div>
                    <div className='text-[#222222] font-montserrat text-base font-semibold leading-[19.5px] pt-2 xs:pt-0 sm:pt-2'>$399.00</div>
                </div>
                <div className='block xs:flex items-center gap-4 sm:block'>
                    <div className='text-[#767676] font-montserrat text-sm font-normal leading-6'>Payment Method</div>
                    <div className='text-[#222222] font-montserrat text-base font-semibold leading-[19.5px] pt-2 xs:pt-0 sm:pt-2'>Direct Bank Transfer</div>
                </div>
            </div>
            <div>
                <Button
                    type="submit"
                    label="Go to Course"
                    className='bg-[#E4087F] hover:bg-[#ac0660] py-2 px-8 flex items-center justify-center font-montserrat text-[16px] font-medium leading-6 text-[#fff] rounded-md'
                />
            </div>
        </div>
    )
}

export default Confirmation