import React, { useState } from "react";
import { useRouter } from "next/router";
import InputField from "@/common/uicomponents/InputField";
import Button from "@/common/uicomponents/Button";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useUserHook } from "@/container/UserModel/useUserHooks";
import PhoneInput, { CountryData } from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import AlertModal from "@/common/uicomponents/AlertModal";

const SignUpCard: React.FC = () => {
    const router = useRouter();
    const { handleSignUp } = useUserHook();
    const [modalData, setModalData] = useState({ isOpen: false, title: '', message: '', redirect: false });

    const showModal = (title: any, message: any, redirect: boolean) => {
        setModalData({ isOpen: true, title, message, redirect: redirect });
    };

    const hideModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    const handlelick = () => {
        if (modalData.redirect) {
            router.push('/login');
        }
        hideModal()
    }

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            number: '',
            email: '',
            password: '',
            confirmPassword: '',
            state: '',
            city: '',
            country: '',
            phoneCode: '',
        },
        validationSchema: Yup.object({
            firstname: Yup.string().required('Name is required'),
            lastname: Yup.string().required('Name is required'),
            number: Yup.string()
                .required('Mobile number is required'),
            password: Yup.string().required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password') as unknown as string, ''], 'Passwords must match')
                .required('Confirm Password is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            state: Yup.string().required('State is required'),
            city: Yup.string().required('City/District/Town is required'),
            country: Yup.string().required('Country is required'),
        }),
        onSubmit: async (values, action) => {
            console.log('Form Data:', values);
            const rawPhone = values.number.slice(values.phoneCode.length);
            if (values) {
                const result: any = await handleSignUp({ ...values, number: rawPhone }, action);
                console.log(result, 'result ##');
                if (result?.code === 'USER_ALREADY_EXISTS') {
                    // alert("Email already exist!")
                    showModal("Signup Error", "Email already exists!", false);
                }
                else if (result?.code === 'USER_CREATE_SUCCESS') {
                    action.resetForm();
                    showModal("Signup Successfully", "Please login.", true);

                }
            } else {
                console.log('error');
            }
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
                        label="First Name"
                        type="text"
                        id="firstname"
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.firstname && formik.errors.firstname}
                    />
                    <InputField
                        label="Last Name"
                        type="text"
                        id="lastname"
                        value={formik.values.lastname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.lastname && formik.errors.lastname}
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
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <PhoneInput
                            country={"in"}
                            enableSearch={true}
                            value={formik.values.number}
                            onChange={(number, country: CountryData) => {
                                formik.setFieldValue("number", number);
                                formik.setFieldValue("phoneCode", country?.dialCode || "91");
                            }}
                            inputStyle={{
                                height: '45px',
                                width: '100%', 
                                padding: '10px',
                                borderRadius: '6px', 
                            }}
                            containerStyle={{
                                width: '100%',      
                            }}
                        />
                        {formik.touched.number && formik.errors.number && (
                            <div className="text-red-500 text-sm mt-1">
                                {formik.errors.number}
                            </div>
                        )}
                    </div>

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
                <AlertModal
                    isOpen={modalData.isOpen}
                    title={modalData.title}
                    message={modalData.message}
                    redirect={modalData.redirect}
                    onClose={hideModal}
                    onClick={handlelick}
                />
                {/* <p className="text-sm text-center text-gray-600">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={() => router.push("/login")}
                        className="text-blue-500 hover:underline"
                    >
                        Sign in
                    </button>
                </p> */}
            </div>
        </div>
    );
};

export default SignUpCard;
