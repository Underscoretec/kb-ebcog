import React from 'react'
import product from "../../../public/p1.png"
import ImageComponent from '@/common/uicomponents/ImageComponent'
import { MdAccessTimeFilled } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import Button from '@/common/uicomponents/Button';

const CartProductCart = ({ data, edit=true }: any) => {
    return (
        <div className='flex p-4 border border-[#EAEAEA] rounded-[20px] gap-4 my-4'>
            <div className='w-[70%] flex gap-4'>
                <div className='w-[20%]'>
                    <ImageComponent
                        src={data?.image}
                        alt="product"
                        className="h-auto w-full"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <div className='font-poppins text-[16px] font-normal leading-[24px] text-[#555555]'>by <span className='text-[#000]'>{data?.by}</span></div>
                    <div className='font-poppins text-[20px] font-semibold leading-[24px] py-2'>{data?.coursename}</div>
                    <div className='flex gap-8 items-center font-montserrat text-[13px] font-semibold leading-[19.5px] text-[#555555] pt-4'>
                        <div className='flex items-center gap-2'>
                            <MdAccessTimeFilled className='text-[#EE7E22] h-[14px] w-[14px]' /> {data?.duration}
                        </div>
                        <div className='flex items-center gap-2'>
                            <RiGraduationCapFill className='text-[#EE7E22] h-[14px] w-[14px]' /> {data?.TotalLearners} learners
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[12%] flex flex-col justify-between'>
                <div>{data?.subAmount}</div>
                {edit&& <Button
                    type="submit"
                    label="Delete"
                    className='bg-[#E0E7FF] hover:bg-[#809cff] p-2 flex items-center justify-center font-montserrat text-[16px] font-medium leading-[24px] text-[#312E81] rounded-md'
                />}
            </div>
            <div className='w-[13%] flex flex-col justify-between'>
                <div>{data?.totalAmount}</div>
                {edit && <Button
                    type="submit"
                    label="View More"
                    className='bg-[#E4087F] hover:bg-[#ac0660] p-2 flex items-center justify-center font-montserrat text-[16px] font-medium leading-6 text-[#fff] rounded-md'
                />}
            </div>
        </div>
    )
}

export default CartProductCart