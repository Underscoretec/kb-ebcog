import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { ClickAwayListener } from '@mui/material'
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import dayjs from 'dayjs';
import { ImFilePdf } from 'react-icons/im';
import { FaImage } from "react-icons/fa";
import { toast } from 'react-toastify';

const UserDetailsModal = ({ closeModal, modalData }: any) => {

    const handleCopy = (copiedText: any, msg: any) => {
        if (copiedText) {
          navigator.clipboard
            .writeText(copiedText)
            .then(() => {
                toast.success(msg);
            })
            .catch((error) => console.error("Unable to copy", error));
        }
      };


    return (
        <div>
            <div className='bg-[#00000099] h-screen w-screen top-0 left-0 fixed flex justify-center z-[100] items-center'>
                <div className='w-[90%] md:w-[70%]'>
                    <ClickAwayListener onClickAway={closeModal}>
                        <div className='bg-white m-4 p-4 sm:p-6 rounded-md flex flex-col gap-4 font-montserrat max-h-[90vh] overflow-y-auto'>
                            <div className='flex items-center justify-between gap-4 text-[22px] font-semibold'>
                                <div>Registered User Details : </div>
                                <RxCross2 onClick={closeModal} className='cursor-pointer' />
                            </div>
                            <div className='p-2 md:p-4 flex flex-col gap-3'>
                                <div className='flex gap-4 items-center'>
                                    <FaUserCircle className='text-[60px] text-[#f3bbd0]' />
                                    <div className='font-montserrat text-[20px]'><span className='font-semibold'>Name : </span>{modalData?.fullName}</div>
                                </div>

                                <div className='px-8 py-4 bg-[#fff0f6] rounded-md my-3 flex flex-wrap gap-6'>
                                    <div className='w-[95%] lg:w-[45%] 2xl:w-[30%] py-2'>
                                        <div className='font-semibold'>Email</div>
                                        <div className='flex items-center gap-3 pt-2'>{modalData?.email} <MdOutlineContentCopy className='cursor-pointer' onClick={() => handleCopy(modalData?.email, "Email copied successfully !")}/></div>
                                    </div>
                                    <div className='w-[95%] lg:w-[45%] 2xl:w-[30%] py-2'>
                                        <div className='font-semibold'>Whatsapp Number</div>
                                        <div className='flex items-center gap-3 pt-2'>{modalData?.whatsAppNumber} <MdOutlineContentCopy className='cursor-pointer' onClick={() => handleCopy(modalData?.whatsAppNumber, "Whatsapp No. copied successfully !")}/></div>
                                    </div>
                                    <div className='w-[95%] lg:w-[45%] 2xl:w-[30%] py-2'>
                                        <div className='font-semibold'>Address</div>
                                        <div className='flex items-center gap-3 pt-2'>{modalData?.address?.city}, {modalData?.address?.state}, {modalData?.address?.country}</div>
                                    </div>
                                    <div className='w-[95%] lg:w-[45%] 2xl:w-[30%] py-2'>
                                        <div className='font-semibold'>Course Name</div>
                                        <div className='flex items-center gap-3 pt-2'>{modalData?.courseName}</div>
                                    </div>
                                    <div className='w-[95%] lg:w-[45%] 2xl:w-[30%] py-2'>
                                        <div className='font-semibold'>Registration Date</div>
                                        <div className='flex items-center gap-3 pt-2'>{dayjs(modalData?.createdAt).format('DD MMMM YYYY, h:mm A')}</div>
                                    </div>
                                </div>

                                <div className='py-4 px-2 flex flex-wrap gap-8 2xl:gap-20'>
                                    <div className='w-[90%] sm:w-[75%] lg:w-[45%] 2xl:w-[40%] font-semibold text-[20px]'>
                                        <div className='pb-4 text-[18px]'>Basic Degree Document</div>

                                        {modalData?.basicDegreeDocument ? <div className='shadow-xl w-full rounded-md'>{modalData?.basicDegreeDocument?.mimetype.startsWith('image/') ? (
                                            <div className="flex flex-col items-center justify-center text-gray-600 p-6">
                                                <FaImage className="w-[100px] h-[100px] text-[#45b5e9]" />
                                                <div className='text-[16px] text-center pt-4'> {modalData?.basicDegreeDocument?.name}</div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-gray-600 p-6">
                                                <ImFilePdf className="w-[100px] h-[100px] text-[#c91e14]" />
                                                <div className='text-[16px] text-center pt-4'> {modalData?.basicDegreeDocument?.name}</div>
                                            </div>
                                        )}</div> : 'N/A'}
                                    </div>
                                    <div className='w-[90%] sm:w-[75%] lg:w-[45%] 2xl:w-[40%] font-semibold text-[20px]'>
                                        <div className='pb-4 text-[18px]'>Latest Degree Certificate</div>

                                        {modalData?.latestDegreeCertificate ? <div className='shadow-xl w-full rounded-md'>{modalData?.latestDegreeCertificate?.mimetype.startsWith('image/') ? (
                                            <div className="flex flex-col items-center justify-center text-gray-600 p-6">
                                                <FaImage className="w-[100px] h-[100px] text-[#45b5e9]" />
                                                <div className='text-[16px] text-center pt-4'> {modalData?.latestDegreeCertificate?.name}</div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col items-center justify-center text-gray-600 p-6">
                                                <ImFilePdf className="w-[100px] h-[100px] text-[#c91e14]" />
                                                <div className='text-[16px] text-center pt-4'> {modalData?.latestDegreeCertificate?.name}</div>
                                            </div>
                                        )}</div> : 'N/A'}
                                    </div>
                                </div>
                            </div>

                        </div>

                    </ClickAwayListener>
                </div>

            </div>
        </div>
    )
}

export default UserDetailsModal

