import React, { useState } from 'react'
import BreadCrumbs from '@/common/uicomponents/BreadCrumbs'
import { useRouter } from 'next/router';
import FeeOptionCard from './FeeOptionCard';

const pricing = {
    tiers: [
        {
            name: 'Fee with Hotel charges',
            id: 'with-hotel-charge',
            href: '#',
            price: '$399',
            description: 'The essentials to provide your best course for learning.',
            features: ['Offline classes', 'Best Faculties', 'Hotel Faclities', "wi-fi facilites in Hotel"],
            mostPopular: true,
        },
        {
            name: 'Fee without Hotel charges',
            id: 'without-hotel-charge',
            href: '#',
            price: '$249',
            description: 'The essentials to provide your best course for learning.',
            features: ['Offline classes', 'Best Faculties'],
            mostPopular: false,
        },
    ],
}


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


const FeeOptionCardPage = () => {
    const router = useRouter();
    const { Course } = router.query;

    const [selectedTier, setSelectedTier] = useState(pricing.tiers[0])  // pricing.tiers.find((tier) => tier.mostPopular) || pricing.tiers[0]

    const handleProceed = (type:any) => {
        router.push({
            pathname: '/cart',
            query: { fee: type },
        });
    };

    if (!Course)
        return (
            <div className='min-h-[30rem] px-4 xs:px-8 xl:px-16 3xl:px-24 py-12 font-montserrat text-[28px]'>
                Please select any course to proceed.
            </div>
        );

    return (
        <div className='min-h-[30rem]'>
            <BreadCrumbs
                routes={[
                    { name: 'Diploma Courses', href: '/', current: false },
                    { name: Course, href: Course, current: false },
                    { name: 'Fees', href: `/diploma/${Course}/fee-options`, current: true },
                ]}
            />
            <div className="bg-white">
                <main>
                    <div className="mx-auto my-16 max-w-4xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <p className="mt-2 text-balance text-5xl font-semibold text-gray-900 sm:text-4xl font-montserrat tracking-[0.5px]">
                                Course Fees
                            </p>
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                            {`Choose an affordable plan that’s packed with the best features.`}
                        </p>
                        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-2">
                            {pricing.tiers.map((tier) => (
                                <FeeOptionCard
                                    key={tier.id}
                                    tier={tier}
                                    classNames={classNames}
                                    isSelected={selectedTier.id === tier.id}
                                    onSelect={setSelectedTier}
                                    handleProceed={handleProceed}
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default FeeOptionCardPage