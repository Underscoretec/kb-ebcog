import React, { useState } from 'react'
import BreadCrumbs from '@/common/uicomponents/BreadCrumbs'
import { useRouter } from 'next/router';
import { CheckIcon } from '@heroicons/react/20/solid'

const pricing = {
    tiers: [
        {
            name: 'Hobby',
            id: 'tier-hobby',
            href: '#',
            price: { monthly: '$19', annually: '$199' },
            description: 'The essentials to provide your best work for clients.',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics'],
            mostPopular: true,
        },
        {
            name: 'Freelancer',
            id: 'tier-freelancer',
            href: '#',
            price: { monthly: '$29', annually: '$299' },
            description: 'The essentials to provide your best work for clients.',
            features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
            mostPopular: false,
        },
    ],
}


function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}


const FeeOptionCardPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const router = useRouter();
    const { Course } = router.query;

    if (!Course) return <div className='min-h-[30rem] px-4 xs:px-8 xl:px-16 3xl:px-24 py-12 font-montserrat text-[28px] '>Please select any course to proceed.</div>

    return (
        <div className='min-h-[30rem]'>
            <BreadCrumbs routes={[{ name: 'Diploma Courses', href: '/', current: false }, { name: Course, href: Course, current: false }, { name: "Fees", href: `/diploma/${Course}/fee-options`, current: true }]} />
            <div className="bg-white">
                <main>
                    {/* Pricing section */}
                    <div className="mx-auto my-16 max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-4xl text-center">
                            <p className="mt-2 text-balance text-5xl font-semibold text-gray-900 sm:text-4xl font-montserrat tracking-[0.5px]">
                                Pricing that grows with you
                            </p>
                        </div>
                        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
                            Choose an affordable plan that’s packed with the best features.
                        </p>
                        <div className="mt-16 flex justify-center">
                        </div>
                        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                            {pricing.tiers.map((tier) => (
                                <div
                                    key={tier.id}
                                    className={classNames(
                                        tier.mostPopular ? 'ring-2 ring-indigo-600' : 'ring-1 ring-gray-200',
                                        'rounded-3xl p-8',
                                    )}
                                >
                                    <h2
                                        id={tier.id}
                                        className={classNames(
                                            tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                                            'text-lg/8 font-semibold',
                                        )}
                                    >
                                        {tier.name}
                                    </h2>
                                    <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
                                    <p className="mt-6 flex items-baseline gap-x-1">
                                        <span className="text-4xl font-semibold tracking-tight text-gray-900">
                                            {/* {tier.price[frequency.value]} */} 110
                                        </span>
                                        <span className="text-sm/6 font-semibold text-gray-600">cc</span>
                                    </p>
                                    <a
                                        href={tier.href}
                                        aria-describedby={tier.id}
                                        className={classNames(
                                            tier.mostPopular
                                                ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                                                : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                            'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                                        )}
                                    >
                                        Buy plan
                                    </a>
                                    <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex gap-x-3">
                                                <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default FeeOptionCardPage