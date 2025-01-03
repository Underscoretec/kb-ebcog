import { formatBasePrice } from '@/utils/formatBasePrice';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
import { useState } from 'react';


interface PlanCardProps {
    withoutHotelData: any;
    withHotelData: any;
    handleProceed?: (id: string) => void;
}

const CourseFeeCard: React.FC<PlanCardProps> = ({ withoutHotelData, withHotelData, handleProceed }: any) => {

    const [activeTab, setActiveTab] = useState<'withHotel' | 'withoutHotel'>('withHotel');
    const plan = activeTab === 'withHotel' ? withHotelData : withoutHotelData;
    console.log(plan, 'plan ##');

    return (
        <div className="flex flex-col items-center p-4 sm:p-8 bg-gray-50 h-auto">
            <div className='flex border border-[#EAEAEA] rounded-[20px] overflow-hidden  cursor-pointer font-montserrat text-[14px] xs:text-[16px] lg:text-[20px] font-bold leading-[24px]'>
                <div className={`px-3 xs:px-6 md:px-12 lg:px-20 py-2 xs:py-4 text-center ${activeTab === 'withHotel' ? 'bg-[#E4087F] text-white' : 'text-black'}`} onClick={() => setActiveTab('withHotel')}>With Hotel Accommodation</div>
                <div className={`px-3 xs:px-6 md:px-12 lg:px-20 py-2 xs:py-4 text-center ${activeTab === 'withoutHotel' ? 'bg-[#E4087F] text-white' : 'text-black'}`} onClick={() => setActiveTab('withoutHotel')}>Without Hotel Accommodation</div>
            </div>

            <div className='shadow-custom my-12 p-3 xs:p-6 rounded-lg'>
                <div className='font-oswald text-[18px] font-normal leading-[18px] text-center'>Course Price</div>
                <div className='flex text-[#290849] justify-center relative pr-4'>
                    <span className='font-oswald text-[12px] font-normal leading-[20px] text-center'>{plan?.discount?.currency}</span>
                    <span className='font-oswald text-[36px] font-semibold leading-[44px] text-center'>{formatBasePrice(plan?.price?.base)}</span>
                    {dayjs().isBefore(dayjs(plan?.discount?.endDate)) && <div className='border border-[#290849] absolute left-[30%] top-[50%] rotate-[168deg] w-[40%]'></div>}
                </div>

                {dayjs().isBefore(dayjs(plan?.discount?.endDate)) &&
                    <div className='my-4 py-4 px-12 xs:px-20 bg-[#290849] rounded-md text-white'>
                        <div className='font-oswald text-[18px] font-normal leading-[18px] text-center'>Get flat</div>
                        <div className='flex justify-center text-white'>
                            <span className='font-oswald text-[18px] font-normal leading-[28px] text-center'>{plan?.discount?.currency}</span>
                            <span className='font-oswald text-[60px] font-semibold leading-[60px] text-center ml-2' style={{ textShadow: "-3px 0px #E4087F" }}>{plan?.discount?.value}</span>
                        </div>
                        <div className='font-oswald text-[18px] font-normal leading-[23px] text-center p-2'>Instant
                            <span className='text-[30px] tracking-[1px]' style={{ textShadow: "3px 1px 3px #E4087F" }}> Discount </span>
                            <span className='text-[#FFD524]'> Till {dayjs(plan?.discount?.endDate).format('ll')}</span>
                        </div>
                    </div>
                }


                <div className='bg-[#E4087F] text-[#FFFFFF] p-3 flex justify-between items-center rounded-md cursor-pointer mt-6 gap-4 xs:gap-16' onClick={() => handleProceed(plan)}>
                    <div className='font-montserrat text-[13px] xs:text-[14px] font-medium leading-[20px]'>Final Payable Amount</div>
                    <div className='font-oswald text-[14px] font-normal leading-[20px]'>{plan?.price?.currency} <span className='text-[17px] xs:text-[18px]'>{dayjs().isBefore(dayjs(plan?.discount?.endDate)) ? Number(plan?.price?.base) - Number(plan?.discount?.value) : plan?.price?.base}</span>.{formatBasePrice(plan?.price?.base).split('.')[1]}</div>
                </div>
            </div>
        </div>
    );
};

export default CourseFeeCard;
