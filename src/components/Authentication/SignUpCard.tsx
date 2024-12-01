import React from "react";
import { useRouter } from "next/router";
import InputField from "@/common/uicomponents/InputField";
import Button from "@/common/uicomponents/Button";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUpCard: React.FC = () => {
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            email: '',
            password: '',
            confirmPassword: '',
            state: '',
            city: '',
            country: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            number: Yup.string()
                .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
                .required('Mobile number is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string().required('Confirm Password is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            state: Yup.string().required('State is required'),
            city: Yup.string().required('City/District/Town is required'),
            country: Yup.string().required('Country is required'),
        }),
        onSubmit: (values) => {
            console.log('Form Data:', values);
        },
    });

    return (
        <div className="flex flex-col items-center justify-center bg-[#F9FAFB] pt-12 pb-32">
            <h2 className="text-[#111827] font-montserrat text-[30px] font-extrabold leading-[36px]">
                Create an Account
            </h2>
            <div className="text-[#4F46E5] font-montserrat text-sm font-semibold leading-5 pt-1 pb-8">Welcome</div>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <form className="space-y-4" onSubmit={formik.handleSubmit}>
                    <InputField
                        label="Full Name"
                        type="text"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && formik.errors.name}
                    />
                    <InputField
                        label="Email Address"
                        type="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && formik.errors.email}
                    />
                    <InputField
                        label="Phone Number"
                        type="tel"
                        id="number"
                        value={formik.values.number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.number && formik.errors.number}
                    />
                    <InputField
                        label="Password"
                        type="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && formik.errors.password}
                    />
                    <InputField
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    />
                    <InputField
                        label="City"
                        id="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.city && formik.errors.city}
                    />
                    <InputField
                        label="State"
                        id="state"
                        value={formik.values.state}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.state && formik.errors.state}
                    />
                    <InputField
                        label="Country"
                        id="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.country && formik.errors.country}
                    />
                    <Button
                        type="submit"
                        label="Sign Up"
                        className="w-full py-2 bg-[#E4087F] font-semibold text-white rounded-md hover:bg-[#ac0660]"
                    />
                </form>
                <p className="text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={() => router.push("/login")}
                        className="text-blue-500 hover:underline"
                    >
                        Sign in
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignUpCard;
