// components/SignInCard.tsx
import React, { useState } from "react";
import Button from "@/common/uicomponents/Button";
import InputField from "@/common/uicomponents/InputField";
import CheckBox from "@/common/uicomponents/CheckBox";
import Link from "next/link";
import { useUserHook } from "@/container/UserModel/useUserHooks";
import { useRouter } from "next/router";
import AlertModal from "@/common/uicomponents/AlertModal";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const SignInCard: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [modalData, setModalData] = useState({ isOpen: false, title: '', message: '' });
    const { handleLogin } = useUserHook();
    const router = useRouter();

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mock API call
        setTimeout(async () => {
            const result: any = await handleLogin({ email, password });
            setIsSubmitting(false);
            if (result?.code === 'LOGIN_SUCCESS') {
                toast.success("Login succesfully");
                if(result?.result?.type=== "admin"){
                    router.push('/admin/userlist');
                } else if(result?.result?.type === 'user') {
                    const previousPath = Cookies.get("previousPath")
                    if (previousPath) {
                        router.push(`/${previousPath}`);
                    } else {
                        router.push('/');
                    }
                }
            } else if (result?.code === 'INVALID_CREDENTIALS') {
                showModal("Invalid Credentials", "Please enter correct email or password.");
            } else {
                showModal("Something Went wrong!", "Please try again.");
            }

        }, 2000);
    };

    const showModal = (title: any, message: any) => {
        setModalData({ isOpen: true, title, message });
    };

    const hideModal = () => {
        setModalData({ ...modalData, isOpen: false });
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[#F9FAFB] pt-20 pb-32">
            <h2 className="text-[#111827] font-montserrat text-[30px] font-extrabold leading-[36px]">
                Sign in to your account
            </h2>
            <div className="text-[#57556d] font-montserrat text-sm font-semibold leading-5 pt-2 pb-12">Welcome back</div>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-custom">
                <form className="space-y-6" onSubmit={handleSignIn}>
                    <InputField
                        label="Email"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <InputField
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className="flex justify-between">
                        <CheckBox label='Remember me' />
                        <Link href='#'><div className="text-[#4F46E5] font-montserrat text-sm font-medium leading-5">Forgot your password?</div></Link>
                    </div>
                    <Button
                        type="submit"
                        label="Sign In"
                        isLoading={isSubmitting}
                        className="w-full py-2 bg-[#E4087F] font-semibold text-white ${bgColor} rounded-md hover:bg-[#ac0660] focus:outline-none focus:ring-2 focus:ring-[#E4087F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    />

                    <div className="flex items-center justify-center text-[#4f4f4f]" onClick={()=>router.push('/signup')}>{`Don't have any account ?`}<span className="text-[#4F46E5] pl-2 cursor-pointer">Sign Up</span></div>
                </form>
            </div>
            <AlertModal
                isOpen={modalData.isOpen}
                title={modalData.title}
                message={modalData.message}
                onClose={hideModal}
                onClick={hideModal}
            />
        </div>
    );
};

export default SignInCard;
