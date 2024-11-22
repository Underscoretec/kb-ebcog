// components/SignInCard.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/common/uicomponents/Button";
import InputField from "@/common/uicomponents/InputField";
import CheckBox from "@/common/uicomponents/CheckBox";
import Link from "next/link";

const SignInCard: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter(); // Initialize useRouter

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Mock API call
        setTimeout(() => {
            console.log("Signed in with", { email, password });
            setIsSubmitting(false);
        }, 2000); // Replace with actual sign-in logic
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[#F9FAFB] pt-20 pb-32">
            <h2 className="font-montserrat text-2xl font-extrabold leading-9 text-[#111827]">
                Sign in to your account
            </h2>
            <div className="text-[#4F46E5] font-montserrat text-sm font-semibold leading-5 pt-2 pb-12">Welcome back</div>
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
                        <Link href='#'><div className="text-[#4F46E5] font-Montserrat text-sm font-medium leading-5">Forgot your password?</div></Link>
                    </div>
                    <Button
                        type="submit"
                        label="Sign In"
                        isLoading={isSubmitting}
                        className="w-full py-2 bg-[#E4087F] border border-[#E4087F] font-semibold text-white ${bgColor} rounded-md hover:bg-white hover:text-[#E4087F] focus:outline-none focus:ring-2 focus:ring-[#E4087F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                </form>
            </div>
        </div>
    );
};

export default SignInCard;
