import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";


const CourseFAQs = ({data}:any) => {

    return (
        <div className="mx-auto divide-y divide-gray-900/10">
            <dl className="space-y-6 divide-y divide-gray-900/10">
                {data?.map((item:any, index:any) => (
                    <Disclosure key={index} as="div" className="pt-4 sm:pt-6" defaultOpen={index === 0}>
                        <dt>
                            <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                <span className="text-20px font-montserrat text-black text-[15px] sm:text-lg leading-7 font-medium">{item?.question}</span>
                                <span className="ml-6 flex h-7 items-center">
                                    <MdKeyboardArrowDown aria-hidden="true" className="size-6 group-data-[open]:hidden text-[#9CA3AF]" />
                                    <MdKeyboardArrowUp aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden text-[#9CA3AF]" />
                                </span>
                            </DisclosureButton>
                        </dt>
                        <DisclosurePanel as="dd" className="mt-2 pr-4 sm:pr-12">
                            <p className="text-[15px] sm:text-16px font-montserrat text-[#6B7280] leading-6 font-normal">{item?.answer}</p>
                        </DisclosurePanel>
                    </Disclosure>
                ))}
            </dl>
        </div>
    )
}

export default CourseFAQs


