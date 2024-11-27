import Image from 'next/image';
import React from 'react';
import imagegroup from '../../../public/imagegroup.png';
import InputField from '@/common/uicomponents/InputField';
import Button from '@/common/uicomponents/Button';

const ReachOut = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src={imagegroup}
        alt="background"
        layout="fill"
        objectFit="cover"
      />

      {/* Form Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F5F5F5] rounded-lg shadow-lg w-full max-w-2xl p-8 z-10">
        <h2 className="text-[18px] text-[#000000] font-montserrat  mb-2">
          Reach out to us for assistance.
        </h2>
        <h1 className="text-[25px] font-montserrat font-bold mb-6">Need Help, Contact Us</h1>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Field */}
          <InputField
            label="Name"
            type="text"
            id="name"
            required
            placeholder="Jane Doe"
          />

          {/* Email and Mobile Fields */}
          <div className="grid grid-cols-2 gap-4">
            <InputField
              label="Email"
              type="email"
              id="email"
              required
              placeholder="you@example.com"
            />
            <InputField
              label="Mobile No."
              type="text"
              id="mobile"
              required
              placeholder="+91-1234567890"
            />
          </div>

          {/* Query Field */}
          <InputField
            label="Write your query"
            type="textarea"
            id="query"
            placeholder="Describe your query here"
          />

          {/* Submit Button */}
          <Button
            type="submit"
            label="Submit"
            className="w-full py-2 bg-[#E4087F] font-semibold text-white rounded-md hover:bg-[#ac0660] focus:outline-none focus:ring-2 focus:ring-[#E4087F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </form>

        {/* Contact Information */}
        <div className="mt-6">
          <p className="font-bold text-[14px] text-[#111827]">
            KnowledgeBridge International Private Limited
          </p>
          <p className='text-[12px] text-[#111827]'>
            506, Centre Point, 5th Floor, J.B. Nagar, Andheri Kurla Road, <br/>
            Andheri (East), Mumbai - 400059, Maharashtra, India
          </p>
          <p className='text-[12px] text-[#111827]'>
            Phone: +91-022-45360005
            <br />
            Email:
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
