import React from 'react'
import ImageComponent from '../../common/uicomponents/ImageComponent'
import bg from "../../../public/cardbg.png"
import { MdAccessTimeFilled } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { FiAward } from "react-icons/fi";
import Image from 'next/image';
import Button from '../../common/uicomponents/Button';

const InternationalFacultyCard = ({ data }: any) => {
    return (
        <div className='w-[24%] border border-[#EAEAEA] rounded-[20px]'>
            <div className='relative'>
                <ImageComponent
                    src={bg}
                    alt="bg"
                    className="h-auto w-full rounded-tl-[20px] rounded-tr-[20px]"
                    width={1000}
                    height={1000}
                />
                <div className='absolute h-full w-full top-0 flex justify-between'>
                    <div className='font-oswald text-2xl font-normal leading-9 w-[60%] text-white p-6'>{data?.course}</div>
                    <div className='font-oswald text-2xl font-normal leading-9 mt-6'>
                        <div className='flex gap-3 items-center font-jost text-[14px] font-medium text-[#312E81] bg-[#FCEFF5] rounded-tl-[8px] rounded-bl-[8px] px-8'>
                            <FiAward className='text-[#E4087F] h-[18px] w-[18px]' /> Diploma
                        </div>
                    </div>
                </div>
                <div className='h-[80%] absolute bottom-0 right-0'>
                    <Image
                        src={data.facultyImage}
                        alt="facultyImag"
                        className="h-[100%] w-full"
                        width={1000}
                        height={1000}
                    />
                </div>
            </div>
            <div className='p-4'>
                <div className='font-poppins text-base font-normal leading-6 text-[#555555]'>by <span className='text-[#000]'>{data?.facultyName}</span></div>
                <div className='flex gap-4 font-montserrat text-[13px] font-semibold leading-[19.5px] text-[#555555] pt-1'>
                    <div className='flex gap-2 items-center'><MdAccessTimeFilled className='text-[#EE7E22]' /> {data?.courseDuration}</div>
                    <div className='flex gap-2 items-center'><RiGraduationCapFill className='text-[#EE7E22]' /> {data?.totalLearners} Learners</div>
                </div>
                <div className='flex justify-end border-t border-[#EAEAEA] my-3'>
                    <Button
                        type="submit"
                        className="py-3 px-6 bg-[#E4087F] font-poppins text-sm font-medium leading-4 text-white rounded-[6px] mt-3 border border-transparent transition-all duration-400 ease-in-out hover:border-[#E4087F] hover:bg-white hover:text-[#E4087F]"
                        label='Know More'
                    />
                </div>
            </div>
        </div>
    )
}

export default InternationalFacultyCard