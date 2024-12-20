import React from 'react'
// import { CheckIcon } from '@heroicons/react/20/solid'

const FeeOptionCard = ({ item, classNames, isSelected, onSelect, handleProceed }:any) => {

    const formattedPrice = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(item?.price?.base || 0);
    
    return (
        <div
            onClick={() => onSelect(item)}
            className={classNames(
                isSelected ? 'ring-2 ring-[#E4087F]' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8 cursor-pointer'
            )}
        >
            <h2
                id={item._id}
                className={classNames(
                    isSelected ? 'text-[#E4087F]' : 'text-gray-900',
                    'text-lg/8 font-semibold'
                )}
            >
                {item?.name} 
            </h2>
            <p className="mt-4 text-sm/6 text-gray-600">The essentials to provide your best course for learning.</p>
            <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                 {/* {item?.price?.base}  */}
                <span className="inline-flex items-end">
                    <span>{item?.price?.currency}</span>
                        <span className="font-bold ml-3">{formattedPrice.split('.')[0]}</span>
                        <span className="text-[18px] leading-[27px] font-semibold text-gray-400">.{formattedPrice.split('.')[1]}</span>
                    </span>
                </span>
            </p>
            <div
                className={classNames(
                    isSelected
                        ? 'bg-[#E4087F] text-white shadow-sm hover:bg-[#ac0660]'
                        : 'text-[#E4087F] ring-1 ring-inset ring-[#fee6f3] hover:ring-[#fb84c4]',
                    'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4087F]'
                )}
                onClick={()=>handleProceed(item._id)}
            >
                Proceed
            </div>
            {/* <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                {item?.features.map((feature:any) => (
                    <li key={feature} className="flex gap-x-3">
                        <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-[#E4087F]" />
                        {feature}
                    </li>
                ))}
            </ul> */}
        </div>
    );
};
export default FeeOptionCard