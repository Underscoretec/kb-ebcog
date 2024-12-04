import React, { useState } from 'react';

const addressData = [
    {
        id: 1,
        name: 'KnowledgeBridge International Private Limited',
        address: '506, Centre Point, 5th Floor, J.B. Nagar, Andheri Kurla Road, Andheri (East), Mumbai - 400059, Maharashtra, India',
        phone: '+91-022-45360000',
        email: 'diploma@ebcogdiplomas.com',
        iframe: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.8958877706314!2d72.86474657592125!3d19.112222782099717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c839626612d9%3A0x4abb687b4a09ecac!2sAndheri%20-%20Kurla%20Rd%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1732697377425!5m2!1sen!2sin'
    },
    // {
    //     id: 2,
    //     name: 'KnowledgeBridge International Private Limited - Address-2',
    //     address: '506, Centre Point, 5th Floor, J.B. Nagar, Andheri Kurla Road, Andheri (East), Mumbai - 400059, Maharashtra, India',
    //     phone: '+91-022-45360005',
    //     email: 'abcd@gmail.com',
    //     iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17451.09771591251!2d72.84189480163538!3d19.10885386693991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c838e9eecfb7%3A0x90e30ab3e684d747!2sJ%20B%20Nagar%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1732698743853!5m2!1sen!2sin"
    
    // }
];

const AddressMap = () => {
    const [selectedAddress, setSelectedAddress] = useState(addressData[0]);

    return (
        <div className='px-4 xs:px-8 xl:px-16 3xl:px-24 py-8 flex flex-col md:flex-row justify-between text-[#111827]'>
            {/* Address List */}
            <div className='w-full md:w-[36%] lg:w-[30%] flex flex-col gap-8'>
                {addressData.map((item, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer ${index !== addressData.length - 1 ? 'border-b border-[#EAEAEA]' : ''}`}
                        onClick={() => setSelectedAddress(item)}
                    >
                        <h1 className='font-montserrat text-base font-semibold leading-[19.5px]'>{item.name}</h1>
                        <div className='font-montserrat text-sm font-normal leading-[26px] mt-2 mb-4'>
                            <div>{item.address}</div>
                            <div>Phone- {item.phone}</div>
                            <div>Email: {item.email}</div>
                        </div>
                        <div className='font-montserrat text-[13px] font-semibold leading-[13px] underline pb-8'>SEE ON THE MAP</div>
                    </div>
                ))}

            </div>

            {/* Map */}
            <div className='w-full md:w-[60%] lg:w-[65%] bg-white'>
                <iframe
                    src={selectedAddress.iframe}
                    width="600"
                    height="650"
                    loading="lazy"
                    className='w-[100%] rounded-[12px]'
                ></iframe>
            </div>
        </div>
    );
};

export default AddressMap;
