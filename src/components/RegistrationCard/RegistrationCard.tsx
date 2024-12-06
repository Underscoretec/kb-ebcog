import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@/common/uicomponents/Button';
import ImageUploader from '@/common/uicomponents/ImageUploader';
import InputField from '@/common/uicomponents/InputField';
import RadioListTable from '@/common/uicomponents/RadioListTable';
import { useUserHook } from '@/container/UserModel/useUserHooks';
import AlertModal from '@/common/uicomponents/AlertModal';

const RegistrationCard = () => {
    const { createCourseRegistrationApi } = useUserHook();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const settings = [
        { name: 'Maternal Medicine', value: 'maternalMedicine' },
        { name: 'Reproductive Endocrinology & Infertility', value: 'reproductiveEndocrinology_Infertility' },
        { name: 'Gynaecology Endoscopy', value: 'gynaecologyEndoscopy' },
        { name: 'Fetal Medicine and Ultrasound', value: 'fetalMedicine_Ultrasound' },
    ];

    const formik = useFormik({
        initialValues: {
            fullName: '',
            whatsAppNumber: '',
            email: '',
            state: '',
            city: '',
            country: '',
            diplomaCourse: settings[0].value,
            degreeCertificate: null,
            basicDegreeDocument: null,
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Please enter your full name.'),
            whatsAppNumber: Yup.string()
                .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
                .required('Mobile number is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            state: Yup.string().required('State is required'),
            city: Yup.string().required('City/District/Town is required'),
            country: Yup.string().required('Country is required'),
            diplomaCourse: Yup.string().required('Please select a diploma course'),
            // degreeCertificate: Yup.mixed().required('Degree certificate is required'),
            // basicDegreeDocument: Yup.mixed().required('Basic degree document is required'),
        }),
        onSubmit: async (values, action) => {
            console.log('Form Data: ##', values);
            // alert("Email already exist!")
            // setModalMessage("Please Check Your Inbox."); 
            // setIsModalOpen(true);
            if (values) {
                const result: any = await createCourseRegistrationApi(values, action);
                console.log(result?.response, 'result ##');
                if (result?.response?.data?.code === 'REGISTRATION_RECORD_FOUND') {
                    alert("Email already exist!")
                }

            } else {
                console.log('error');
            }

        },
    });

    const handleDegreeCertificateUpload = (file: File | null) => {
        formik.setFieldValue('degreeCertificate', file);
    };

    const handleBasicDegreeDocumentUpload = (file: File | null) => {
        formik.setFieldValue('basicDegreeDocument', file);
    };

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="bg-[#fff] pl-4 xs:pl-8 lg:pl-2 pt-6 lg:pt-24 pb-10">
                    <h2 className="text-[#000000] font-montserrat text-[36px] font-extrabold leading-[36px]">
                        Register Now
                    </h2>
                    {/* <div className="text-[#4F46E5] font-montserrat text-sm font-semibold leading-5 pt-2 pb-12 text-center px-2">
                    Diploma courses by European Board & College of Obstetrics and Gynaecology
                </div> */}
                    <div className="w-full pr-4 xs:pr-8 2xl:pr-20 pt-8 space-y-6 bg-white ">
                        <div className='flex gap-2 md:gap-3 flex-wrap justify-between'>
                            <InputField
                                label="Name"
                                id="fullName"
                                className='flex flex-col gap-1 w-full lg:w-[48%]'
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.fullName && formik.errors.fullName}
                                requiredDesign
                            />
                            <InputField
                                label="Email Id"
                                type="email"
                                id="email"
                                className='flex flex-col gap-1 w-full lg:w-[48%]'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && formik.errors.email}
                                requiredDesign
                            />
                        </div>
                        <div className='flex gap-2 md:gap-3 flex-wrap justify-between'>
                            <InputField
                                label="Whatsapp Number"
                                id="whatsAppNumber"
                                className='flex flex-col gap-1 w-full lg:w-[48%]'
                                value={formik.values.whatsAppNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.whatsAppNumber && formik.errors.whatsAppNumber}
                                requiredDesign
                            />
                            <InputField
                                label="City"
                                id="city"
                                className='flex flex-col gap-1 w-full lg:w-[48%]'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.city && formik.errors.city}
                                requiredDesign
                            />
                        </div>

                        <div className='flex gap-2 md:gap-3 flex-wrap justify-between'>
                            <InputField
                                label="State"
                                id="state"
                                className='flex flex-col gap-1 w-full lg:w-[48%]'
                                value={formik.values.state}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.state && formik.errors.state}
                                requiredDesign
                            />
                            <InputField
                                label="Country"
                                id="country"
                                className='flex flex-col gap-1 w-full lg:w-[48%]'
                                value={formik.values.country}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.country && formik.errors.country}
                                requiredDesign
                            />
                        </div>


                        <RadioListTable
                            label="Please choose Diploma course for which you want to Register"
                            settings={settings}
                            selectedCourse={formik.values.diplomaCourse}
                            onChange={(value: any) => formik.setFieldValue('diplomaCourse', value)}
                            required
                        />
                        <div className='flex flex-col sm:flex-row gap-4 justify-between'>
                            <div className='w-[100%] sm:w-[47%]'>
                                <ImageUploader
                                    label="Upload Your Latest Degree Certificate"
                                    id="degreeCertificate"
                                    onUpload={handleDegreeCertificateUpload}
                                    value={formik.values.degreeCertificate}
                                />
                            </div>
                            <div className='w-[100%] sm:w-[47%]'>
                                <ImageUploader
                                    label="Upload Your Basic Degree Document"
                                    id="basicDegreeDocument"
                                    onUpload={handleBasicDegreeDocumentUpload}
                                    value={formik.values.basicDegreeDocument}
                                />
                            </div>

                        </div>

                        <Button
                            type="submit"
                            label="Submit"
                            className="w-full py-2 bg-[#E4087F] font-semibold text-white rounded-md hover:bg-[#ac0660] focus:outline-none focus:ring-2 focus:ring-[#E4087F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        />
                    </div>
                </div>
            </form>
            <AlertModal
                isOpen={isModalOpen}
                title="Thank You For Your Registration."
                message={modalMessage}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
};

export default RegistrationCard;
