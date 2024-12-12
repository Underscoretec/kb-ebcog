import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import imagegroup from '../../../public/imagegroup.png';
import InputField from '@/common/uicomponents/InputField';
import Button from '@/common/uicomponents/Button';
import BreadCrumbs from '@/common/uicomponents/BreadCrumbs';
import TextAreaField from '@/common/uicomponents/TextArea';
import { TbReload } from 'react-icons/tb';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ReachOut = () => {
  const [captcha, setCaptcha] = useState('');
  const [isCaptchaValid, setIsCaptchaValid] = useState(true);

  // Generate Captcha
  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length: 6 }, () =>
      chars[Math.floor(Math.random() * chars.length)]
    ).join('');
  }

  function reloadCaptcha() {
    setCaptcha(generateCaptcha());
    formik.setFieldValue('captchaInput', '');
  }

  // Formik Initialization
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      query: '',
      captchaInput: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters long'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      mobile: Yup.string()
        .required('Mobile number is required')
        .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits'),
      query: Yup.string().required('Query is required'),
      captchaInput: Yup.string()
        .required('Captcha is required')
        .oneOf([captcha], 'Captcha does not match'),
    }),
    onSubmit: (values, { resetForm }) => {
      alert('Form submitted successfully!');
      setCaptcha(generateCaptcha());
      resetForm();
    },
  });

  return (
    <>
      <div>
        <BreadCrumbs routes={[{ name: 'Reach Out', href: '/', current: true }]} />
        <div className="relative w-full h-screen">
          {/* Background Image */}
          <Image
            src={imagegroup}
            alt="background"
            layout="fill"
            objectFit="cover"
          />

          {/* Form Container */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F5F5F5] rounded-lg shadow-lg h-[76%] xs:h-auto overflow-y-auto xs:overflow-y-hidden w-full max-w-2xl p-4 xs:p-8 z-10">
            <h2 className="text-[18px] text-[#000000] font-montserrat mb-2 flex justify-center xs:justify-start">
              Reach out to us for assistance.
            </h2>
            <h1 className="text-[25px] font-montserrat font-bold mb-6 flex justify-center xs:justify-start">
              Need Help, Contact Us
            </h1>

            {/* Form */}
            <form className="space-y-4" onSubmit={formik.handleSubmit}>
              {/* Name Field */}
              <InputField
                label="Name"
                type="text"
                id="name"
                placeholder="Jane Doe"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && formik.errors.name}
              />

              {/* Email and Mobile Fields */}
              <div className="grid grid-cols xs:grid-cols-2 gap-4">
                <InputField
                  label="Email"
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && formik.errors.email}
                />
                <InputField
                  label="Mobile No."
                  type="text"
                  id="mobile"             
                  placeholder="+91-1234567890"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.mobile && formik.errors.mobile}
                />
              </div>

              {/* Query Field */}
              <TextAreaField
                label="Write your query"
                rows={4}
                id="query"
                placeholder="Describe your query here"
                value={formik.values.query}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.query && formik.errors.query}
                className="flex flex-col gap-1 w-full"
              />

              {/* Captcha */}
              <div className="flex items-center pt-4 w-full">
                <div className="w-full pl-3 bg-gray-200 border border-gray-300 text-gray-800 flex items-center gap-1 rounded-md text-sm shadow-md tracking-wide">
                  <div className="flex gap-1">
                    {captcha}
                    <button
                      onClick={reloadCaptcha}
                      type="button"
                      className="text-gray-600 hover:text-gray-800 focus:outline-none text-[16px]"
                    >
                      <TbReload />
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter Captcha"
                    id="captchaInput"
                    value={formik.values.captchaInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-full min-w-0 appearance-none rounded-md border-none bg-white py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#6B7280] focus:ring-2 focus:ring-indigo-600 sm:text-[16px]"
                  />
                </div>
              </div>
              {formik.touched.captchaInput && formik.errors.captchaInput && (
                <p className="mt-2 text-sm text-red-500">{formik.errors.captchaInput}</p>
              )}

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
              <p className="text-[12px] text-[#111827]">
                506, Centre Point, 5th Floor, J.B. Nagar, Andheri Kurla Road, <br />
                Andheri (East), Mumbai - 400059, Maharashtra, India
              </p>
              <p className="text-[12px] text-[#111827]">
                Phone: +91-022-45360005
                <br />
                Email:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReachOut;
