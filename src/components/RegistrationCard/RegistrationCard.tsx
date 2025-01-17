import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@/common/uicomponents/Button';
import ImageUploader from '@/common/uicomponents/ImageUploader';
import InputField from '@/common/uicomponents/InputField';
import RadioListTable from '@/common/uicomponents/RadioListTable';
import { useUserHook } from '@/container/UserModel/useUserHooks';
import AlertModal from '@/common/uicomponents/AlertModal';
import { useRouter } from 'next/router';
import { trackGAEvent } from '@/common/utils/gAnalytics';
import { toast } from 'react-toastify';
import CheckboxReg from '@/common/uicomponents/CheckboxReg';
// import CheckboxReg from '@/common/uicomponents/Checkboxreg';
// import { useRouter } from 'next/router';

const RegistrationCard = () => {
    const { createCourseRegistrationApi } = useUserHook();
    const router = useRouter();
    const [modalData, setModalData] = useState({ isOpen: false, title: '', message: '', redirect: false });

    const showModal = (title: any, message: any, redirect: boolean) => {
        setModalData({ isOpen: true, title, message, redirect: redirect });
    };

    const hideModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    const handlelick = () => {
        if (modalData.redirect) {
            router.push('/');
        }
        hideModal()
    }

    const settings = [
        { name: 'Maternal Medicine', value: 'maternalMedicine' },
        { name: 'Reproductive Endocrinology & Infertility', value: 'reproductiveEndocrinology_Infertility' },
        { name: 'Gynaecology Endoscopy', value: 'gynaecologyEndoscopy' },
        { name: 'Fetal Medicine and Ultrasound', value: 'fetalMedicine_Ultrasound' },
    ];

    const options = [
        { name: "In Conference", value: "In Conference" },
        { name: "From Colleague", value: "From Colleague" },
        { name: "From Collage, Hospital, Industry", value: "From Collage, Hospital, Industry" },
        { name: "By Email", value: "By Email" },
        { name: "From Faculty", value: "From Faculty" },
        { name: "Print Advt", value: "Print Advtt" },
        { name: "WhatsApp", value: "WhatsApp" },
        { name: "Website", value: "Website" },
        { name: "Social Media", value: "Social Media" },
        { name: "Others", value: "Others" },
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
            question: '',
            degreeCertificate: null,
            basicDegreeDocument: null,
            otherText:'',
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
            question: Yup.string().required('Please select any option'),
            otherText: Yup.string().when('question', (question, schema) => {
                if (Array.isArray(question) && question.includes('Others')) {
                    return schema.required('Text is required');
                }
                return schema;
            }),
        }),
        onSubmit: async (values, action) => {
            trackGAEvent('registration_submit_clicked', values)
            if (values) {
                const result: any = await createCourseRegistrationApi(values, action);
                if (result?.response?.data?.code === 'REGISTRATION_RECORD_FOUND') {
                    trackGAEvent('registration_exists', values)
                    showModal("Registration Error", "Email already exists!", false);
                }
                else if (result?.data?.code === 'REGISTRATION_CREATED') {
                    trackGAEvent('registration_completed', values)
                    action.resetForm();
                    toast.success("Thank you for your registration! Please check your email inbox for further instructions. If you don’t see the email, kindly check your Spam or Junk folder as well.");
                    router.push('/');
                }
            } else {
                console.log('error');
            }

        },
    });

    const handleDegreeCertificateUpload = (file: File | null) => {
        formik.setFieldValue('degreeCertificate', file);
        trackGAEvent('registration_form_modified', formik.values)
    };

    const handleBasicDegreeDocumentUpload = (file: File | null) => {
        formik.setFieldValue('basicDegreeDocument', file);
        trackGAEvent('registration_form_modified', formik.values)
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
                                className='flex flex-col gap-1 w-full md:w-[48%]'
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={(event: any) => { formik.handleBlur(event); trackGAEvent('registration_form_modified', formik.values) }}
                                error={formik.touched.fullName && formik.errors.fullName}
                                requiredDesign
                            />
                            <InputField
                                label="Email Id"
                                type="email"
                                id="email"
                                className='flex flex-col gap-1 w-full md:w-[48%]'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={(event: any) => { formik.handleBlur(event); trackGAEvent('registration_form_modified', formik.values) }}
                                error={formik.touched.email && formik.errors.email}
                                requiredDesign
                            />
                        </div>
                        <div className='flex gap-2 md:gap-3 flex-wrap justify-between'>
                            <InputField
                                label="Whatsapp Number"
                                id="whatsAppNumber"
                                className='flex flex-col gap-1 w-full md:w-[48%]'
                                value={formik.values.whatsAppNumber}
                                onChange={formik.handleChange}
                                onBlur={(event: any) => { formik.handleBlur(event); trackGAEvent('registration_form_modified', formik.values) }}
                                error={formik.touched.whatsAppNumber && formik.errors.whatsAppNumber}
                                requiredDesign
                            />
                            <InputField
                                label="City"
                                id="city"
                                className='flex flex-col gap-1 w-full md:w-[48%]'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={(event: any) => { formik.handleBlur(event); trackGAEvent('registration_form_modified', formik.values) }}
                                error={formik.touched.city && formik.errors.city}
                                requiredDesign
                            />
                        </div>

                        <div className='flex gap-2 md:gap-3 flex-wrap justify-between'>
                            <InputField
                                label="State"
                                id="state"
                                className='flex flex-col gap-1 w-full md:w-[48%]'
                                value={formik.values.state}
                                onChange={formik.handleChange}
                                onBlur={(event: any) => { formik.handleBlur(event); trackGAEvent('registration_form_modified', formik.values) }}
                                error={formik.touched.state && formik.errors.state}
                                requiredDesign
                            />
                            <InputField
                                label="Country"
                                id="country"
                                className='flex flex-col gap-1 w-full md:w-[48%]'
                                value={formik.values.country}
                                onChange={formik.handleChange}
                                onBlur={(event: any) => { formik.handleBlur(event); trackGAEvent('registration_form_modified', formik.values) }}
                                error={formik.touched.country && formik.errors.country}
                                requiredDesign
                            />
                        </div>


                        <RadioListTable
                            label="Please choose Diploma course for which you want to Register"
                            settings={settings}
                            selectedCourse={formik.values.diplomaCourse}
                            onChange={(value: any) => { formik.setFieldValue('diplomaCourse', value); trackGAEvent('registration_form_modified', formik.values) }}
                            required
                        />

                        <CheckboxReg
                            label="How did you hear about the Diplomas?"
                            options={options}
                            selectedCourse={formik.values.question}
                            onChange={(value: any) => { formik.setFieldValue('question', value); trackGAEvent('registration_form_modified', formik.values) }}
                            formik={formik}
                            error={formik.touched.question && formik.errors.question}
                            required
                        />

                        {/* <CheckboxReg/> */}

                        <div className='flex gap-2 bg-[#ffe2f2] px-3 py-3 rounded-lg'>
                            <p className='font-bold text-[12px] text-[#E4087F]'>NOTE:</p>
                            <div className='text-[12px] font-medium '>
                                Kindly upload the following documents to help us verify your expertise and years of experience.
                                Please note that this is optional and not mandatory
                            </div>
                        </div>

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
                isOpen={modalData.isOpen}
                title={modalData.title}
                message={modalData.message}
                onClick={handlelick}
            />
        </>
    );
};

export default RegistrationCard;
