import Button from '@/common/uicomponents/Button'
import InputField from '@/common/uicomponents/InputField'
import TextAreaField from '@/common/uicomponents/TextArea'
import React from 'react'

const ContactForm = () => {
    return (
        <div className='flex justify-end px-4 xs:px-8 xl:px-16 3xl:px-24 pb-8 pt-4'>
            <div className='w-[65%]'>
                <h1 className='font-montserrat text-[24px] font-semibold leading-[36px]'>Contact Us</h1>
                <div className='text-[#555555] font-montserrat text-[18px] font-normal leading-[27px] pb-6'>Your email address will not be published. Required fields are marked *</div>
            <div className='flex gap-3 flex-wrap justify-between'>
                <InputField
                    className='flex flex-col gap-1 w-[31%] lg:w-[32%]'
                    label="Name"
                    placeholder="Jane Doe"
                    id="name"
                />
                <InputField
                    className='flex flex-col gap-1 w-[31%] lg:w-[32%]'
                    label="Email"
                    placeholder="you@example.com"
                    id="email"
                    type='email'
                />
                <InputField
                    className='flex flex-col gap-1 w-[31%] lg:w-[32%]'
                    label="Mobile No."
                    placeholder="+91-1234567890"
                    id="mobile"
                    type="tel"
                />
                <TextAreaField
                    placeholder="Describe your query here"
                    id="areaStreet"
                    className='flex flex-col gap-1 w-full'
                    rows={8}

                />
            </div>
            <Button
                label="Submit"
                className="py-1 lg:py-2 bg-[#E4087F] font-semibold text-white rounded-md hover:bg-[#ac0660] px-10 my-6"
            />
            </div>
            
        </div>
    )
}

export default ContactForm