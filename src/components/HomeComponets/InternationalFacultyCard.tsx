import React from 'react'
import ImageComponent from '../../common/uicomponents/ImageComponent'
import bg from "../../../public/cardbg.png"
import { MdAccessTimeFilled } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
import Image from 'next/image';
import Button from '../../common/uicomponents/Button';


const InternationalFacultyCard = (props: any) => {
    
    return (
        <>
            <div className='relative'>
                <ImageComponent
                    src={bg}
                    alt="bg"
                    className="h-auto w-full rounded-tl-[20px] rounded-tr-[20px]"
                    width={1000}
                    height={1000}
                />
                <div className='absolute h-full w-full top-0 flex justify-between'>
                    <div className='font-oswald text-[30px] xs:text-[22px] sm:text-[28px] md:text-[22px] lg:text-[20px] xl:text-[24px] font-normal leading-[36px] xs:leading-[26px] sm:leading-[36px] md:leading-[26px] xl:leading-[36px] w-[60%] text-white p-3 xl:p-4 2xl:p-6'>{props?.data?.course}</div>
                    <div className='font-oswald text-2xl font-normal leading-9 mt-3 xl:mt-6'>
                        <div className='flex gap-1 md:gap-2 2xl:gap-3 items-center font-jost text-[14px] font-medium text-[#312E81] bg-[#FCEFF5] rounded-tl-[8px] rounded-bl-[8px] px-3 xs:px-2 lg:px-4 2xl:px-8'>
                            <FiAward className='text-[#E4087F] h-[18px] w-[18px]' /> Diploma
                        </div>
                    </div>
                </div>
                <div className='h-[70%] 2xl:h-[75%] absolute bottom-0 right-0'>
                    <Image
                        src={props?.data?.facultyImage}
                        alt="facultyImag"
                        className="h-[100%] w-full"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <div className='p-2 sm:p-3 xl:p-4 border border-[#EAEAEA] bg-white border-t-0 rounded-bl-[20px] rounded-br-[20px]'>
                <div className='font-poppins text-[15px] xs:text-[12px] sm:text-[15px] md:text-[13px] xl:text-base font-normal leading-6 text-[#555555]'>by <span className='text-[#000]'>{props?.data?.facultyName}</span></div>
                <div className='flex gap-3 xl:gap-4 font-montserrat text-[13px] font-semibold leading-[19.5px] text-[#555555] pt-1'>
                    <div className='flex gap-1 xl:gap-2 items-center'><MdAccessTimeFilled className='text-[#EE7E22]' /> {props?.data?.courseDuration}</div>
                    <div className='flex gap-1 xl:gap-2 items-center'><RiGraduationCapFill className='text-[#EE7E22]' /> {props?.data?.totalLearners} Learners</div>
                </div>
                <div className='flex justify-end border-t border-[#EAEAEA] mt-3'>
                    <Button
                        type="submit"
                        className="py-2 2xl:py-3 px-4 2xl:px-6 bg-[#E4087F] font-poppins text-sm font-medium leading-4 text-white rounded-[6px] mt-3 transition-all duration-400 ease-in-out hover:bg-[#ac0660]"
                        label={props?.btn_label}
                        onClick={props?.handleClick}
                    />
                </div>
            </div>
        </>
    )
}

export default InternationalFacultyCard