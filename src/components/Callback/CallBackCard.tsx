// components/SignInCard.tsx
import React, { useEffect, useState } from "react";
// import Button from "@/common/uicomponents/Button";
import InputField from "@/common/uicomponents/InputField";
import { TbReload } from "react-icons/tb";
// import CheckBox from "@/common/uicomponents/CheckBox";
// import Link from "next/link";
import { useRouter } from "next/router";
// import { useFormik } from "formik";

const CallbackCard: React.FC = () => {
    const [phone, setPhone] = useState("");
    // const [isSubmitting, setIsSubmitting] = useState(false);
    const [captcha, setCaptcha] = useState("");
    const [captchaInput, setCaptchaInput] = useState("");
    const [isCaptchaValid, setIsCaptchaValid] = useState(true);
    const [subId, setSubId]:any = useState("");
    const router = useRouter(); // Initialize useRouter
    const id = router.query.email;

    useEffect(() => {
        if (id) {
            setSubId(id);
        }
        console.log(subId);
    })


    const [isButtonActive, setIsButtonActive] = useState(false);
    useEffect(() => {
        setCaptcha(generateCaptcha());
      }, []);

    function generateCaptcha() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return Array.from({ length: 6 }, () =>
          chars[Math.floor(Math.random() * chars.length)]
        ).join("");
      }
    function reloadCaptcha() {
        setCaptcha(generateCaptcha());
        setCaptchaInput(""); // Clear input field
    }
    function validateCaptcha() {
        return captchaInput === captcha;
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function checkButtonState(emailValue:any, captchaValue:any) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmailValid = emailRegex.test(emailValue);
        const isCaptchaFilled = captchaValue.length > 0;
        setIsButtonActive(isEmailValid && isCaptchaFilled);
      }

    

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        // setIsSubmitting(true);
        // Mock API call
        if (!validateCaptcha()) {
            setIsCaptchaValid(false);
            return;
          }
        setTimeout(() => {
            // console.log("Signed in with", { email, password });
            // setIsSubmitting(false);
        }, 2000); // Replace with actual sign-in logic
    };

    // const router = useRouter();

    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         number: '',
    //         email: '',
    //         password: '',
    //         confirmPassword: '',
    //         state: '',
    //         city: '',
    //         country: '',
    //     },
    //     validationSchema: Yup.object({
    //         name: Yup.string().required('Name is required'),
    //         number: Yup.string()
    //             .matches(/^[0-9]{10}$/, 'Mobile number must be 10 digits')
    //             .required('Mobile number is required'),
    //         password: Yup.string().required('Password is required'),
    //         confirmPassword: Yup.string().required('Confirm Password is required'),
    //         email: Yup.string()
    //             .email('Invalid email address')
    //             .required('Email is required'),
    //         state: Yup.string().required('State is required'),
    //         city: Yup.string().required('City/District/Town is required'),
    //         country: Yup.string().required('Country is required'),
    //     }),
    //     onSubmit: (values) => {
    //         console.log('Form Data:', values);
    //     },
    // });

    return (
        <div className="flex flex-col items-center justify-center bg-[#F9FAFB] pt-20 pb-32">
            <h2 className="text-[#111827] font-montserrat text-[30px] font-extrabold leading-[36px]">
                Request for a callback
            </h2>
            {/* <div className="text-[#4F46E5] font-montserrat text-sm font-semibold leading-5 pt-2 pb-12">Welcome back</div> */}
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-custom">
                <form className="space-y-6" onSubmit={handleSignIn}>
                <InputField
                        label="Phone Number"
                        type="tel"
                        id="number"
                        value={phone}
                        // onChange={formik.handleChange}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        // error={formik.touched.number && formik.errors.number}
                    />
                    
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
                    value={captchaInput}
                    onChange={(e) => {
                      setCaptchaInput(e.target.value);
                    //   checkButtonState(email, e.target.value);
                    }}
                    className="w-full min-w-0 appearance-none rounded-md border-none bg-white py-2 text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#6B7280] focus:ring-2 focus:ring-indigo-600 sm:text-[16px]"
                  />
                </div>
              </div>
              {!isCaptchaValid && (
                <p className="mt-2 text-sm text-red-500">Captcha does not match. Please try again.</p>
              )}
                     {/* <InputField
                        label=""
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    /> */}
                    {/* <InputField
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /> */}
                    
                    {/* <Button
                        type="submit"
                        label="Submit"
                        isLoading={isSubmitting}
                        className="w-full py-2 bg-[#E4087F] font-semibold text-white ${bgColor} rounded-md hover:bg-[#ac0660] focus:outline-none focus:ring-2 focus:ring-[#E4087F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    /> */}
                    <div className="mt-4 sm:mt-6 sm:shrink-0">
                <button
                  type="submit"
                  disabled={!isButtonActive}
                  className={`flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm ${
                    isButtonActive
                      ? "bg-[#E4087F] hover:bg-[#9e0659] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "bg-[#e498c1] cursor-not-allowed"
                  }`}
                >
                  Submit
                </button>
              </div>
                </form>
            </div>
        </div>
    );
};

export default CallbackCard;