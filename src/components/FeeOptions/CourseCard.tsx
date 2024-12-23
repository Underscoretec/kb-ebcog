// components/PlanCard.tsx
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
import { useState } from 'react';

// interface Plan {
//   title: string;
//   description: string;
//   price: number;
//   priceDetail: string;
//   userMin: string;
// }

// const monthlyPlans: Plan = {
//   title: 'Premium',
//   description: 'Advanced security and network management features for larger businesses',
//   price: 15,
//   priceDetail: '+ $40.00/mo per gateway',
//   userMin: '*Minimum of 10 users',
// };

// const yearlyPlans: Plan = {
//   title: 'Premium',
//   description: 'Advanced security and network management features for larger businesses',
//   price: 12,
//   priceDetail: '+ $40.00/mo per gateway',
//   userMin: '*Minimum of 10 users',
// };
interface PlanCardProps {
    // monthlyPlan: Plan;
    // yearlyPlan: Plan;
  withoutHotelData: any;
  withHotelData: any;
    handleProceed?: (id:string) => void;
  }

const CourseCard: React.FC<PlanCardProps> = ({ withoutHotelData, withHotelData,handleProceed }: any) => {
    
  const [activeTab, setActiveTab] = useState<'withHotel' | 'withoutHotel'>('withHotel');
    const plan = activeTab === 'withHotel' ? withHotelData : withoutHotelData;
  console.log(plan, 'plan ##');
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
}).format(plan?.price?.base || 0);

  return (
    <div className="flex flex-col items-center p-4 sm:p-8 bg-gray-50 h-auto">
      <div className="flex justify-center mb-6 bg-gray-200 p-1 rounded-lg shadow-md w-full max-w-md">
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-l-lg ${
            activeTab === 'withHotel' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('withHotel')}
        >
          With Hotel accommodation
        </button>
        <button
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-r-lg ${
            activeTab === 'withoutHotel' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => setActiveTab('withoutHotel')}
        >
          Without Hotel accommodation
        </button>
      </div>

      <div className="max-w-lg bg-white rounded-lg shadow-lg p-6">
        <div className='flex gap-36 justify-end pb-6'>
          <h2 className="text-xl font-semibold text-gray-800">{`Course price:`}</h2>
          <p className="flex items-baseline gap-x-1">
                <span className="text-3xl font-semibold tracking-tight text-gray-900">
                <span className="inline-flex items-end">
                    <span>{plan?.price?.currency}</span>
                        <span className="font-medium ml-3">{formattedPrice.split('.')[0]}</span>
                        <span className="text-[18px] leading-[27px] font-semibold text-gray-400">.{formattedPrice.split('.')[1]}</span>
                    </span>
                </span>
            </p>
        </div>

        {dayjs().isBefore(dayjs(plan?.discount?.endDate)) &&
          <div className='flex gap-16 justify-end pb-6'>
          <h3 className="text-xl font-semibold text-gray-800">{`Discount still ${dayjs(plan?.discount?.endDate).format('ll')}` }</h3>
          <p className="flex items-baseline gap-x-1">
                <span className="text-3xl font-semibold tracking-tight text-gray-900">
                <span className="inline-flex items-end">
                    <span>{plan?.discount?.currency}</span>
                        <span className="font-normal ml-3">{plan?.discount?.value}</span>
                        <span className="text-[18px] leading-[27px] font-semibold text-gray-400">.{formattedPrice.split('.')[1]}</span>
                    </span>
                </span>
            </p>
          </div>}
        
          {dayjs().isBefore(dayjs(plan?.discount?.endDate)) &&
          <div className='flex gap-24 justify-end pb-6'>
          <h3 className="text-xl font-semibold text-gray-800">{`Final price payable:` }</h3>
          <p className="flex items-baseline gap-x-1">
                <span className="text-3xl font-semibold tracking-tight text-gray-900">
                <span className="inline-flex items-end">
                    <span>{plan?.discount?.currency}</span>
                        <span className="font-normal ml-3">{Number(plan?.price?.base)- Number(plan?.discount?.value)}</span>
                        <span className="text-[18px] leading-[27px] font-semibold text-gray-400">.{formattedPrice.split('.')[1]}</span>
                    </span>
                </span>
            </p>
        </div>}
        

        
        {/* <p className="text-gray-600 text-sm mb-6">{plan?.priceDetail}</p> */}
              {/* <p className="text-gray-500 text-xs">{plan?.userMin}</p> */}
              <div
                className={'bg-[#E4087F] text-white shadow-sm hover:bg-[#ac0660] mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4087F]'
                }
                onClick={()=>handleProceed(plan)}
            >
                Proceed
            </div>
          </div>
          
    </div>
  );
};

export default CourseCard;
