import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@/common/uicomponents/Button';
import ImageUploader from '@/common/uicomponents/ImageUploader';
import InputField from '@/common/uicomponents/InputField';
import RadioListTable from '@/common/uicomponents/RadioListTable';

const RegistrationCard = () => {
    const settings = [
        { name: 'Maternal Medicine' },
        { name: 'Reproductive Endocrinology & Infertility' },
        { name: 'Gynaecology Endoscopy' },
        { name: 'Fetal Medicine and Ultrasound' },
    ];

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            email: '',
            state: '',
            city: '',
            country: '',
            diplomaCourse: settings[0].name,
            degreeCertificate: null,
            basicDegreeDocument: null,
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            number: Yup.string()
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
        onSubmit: (values) => {
            console.log('Form Data:', values);
        },
    });

    const handleDegreeCertificateUpload = (file: File | null) => {
        formik.setFieldValue('degreeCertificate', file);
    };

    const handleBasicDegreeDocumentUpload = (file: File | null) => {
        formik.setFieldValue('basicDegreeDocument', file);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-center justify-center bg-[#F9FAFB] pt-20 pb-32">
                <h2 className="text-[#111827] font-montserrat text-[30px] font-extrabold leading-[36px]">
                    Registration
                </h2>
                <div className="text-[#4F46E5] font-montserrat text-sm font-semibold leading-5 pt-2 pb-12 text-center px-2">
                    Diploma courses by European Board & College of Obstetrics and Gynaecology
                </div>
                <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-custom">
                    <InputField
                        label="Name"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && formik.errors.name}
                        requiredDesign
                    />
                    <InputField
                        label="Email Id"
                        type="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email}
                        requiredDesign
                    />
                    <InputField
                        label="Whatsapp Number"
                        id="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.number && formik.errors.number}
                        requiredDesign
                    />
                    <InputField
                        label="City"
                        id="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.city && formik.errors.city}
                        requiredDesign
                    />
                    <InputField
                        label="State"
                        id="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.state && formik.errors.state}
                        requiredDesign
                    />
                    <InputField
                        label="Country"
                        id="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.country && formik.errors.country}
                        requiredDesign
                    />
                    <RadioListTable
                        label="Please choose Diploma course for which you want to Register"
                        settings={settings}
                        selectedCourse={formik.values.diplomaCourse}
                        onChange={(value: any) => formik.setFieldValue('diplomaCourse', value)}
                        required
                    />
                    <ImageUploader
                        label="Upload Your Latest Degree Certificate"
                        id="degreeCertificate"
                        onUpload={handleDegreeCertificateUpload}
                        value={formik.values.degreeCertificate}
                    />
                    <ImageUploader
                        label="Upload Your Basic Degree Document"
                        id="basicDegreeDocument"
                        onUpload={handleBasicDegreeDocumentUpload}
                        value={formik.values.basicDegreeDocument}
                    />

                    <Button
                        type="submit"
                        label="Submit"
                        className="w-full py-2 bg-[#E4087F] font-semibold text-white rounded-md hover:bg-[#ac0660] focus:outline-none focus:ring-2 focus:ring-[#E4087F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </div>
            </div>
        </form>
    );
};

export default RegistrationCard;
