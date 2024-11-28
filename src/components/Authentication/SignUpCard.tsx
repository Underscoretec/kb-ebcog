// components/SignUpCard.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import InputField from "@/common/uicomponents/InputField";
import Button from "@/common/uicomponents/Button";

const SignUpCard: React.FC = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    const phoneRegex = /^\+?\d{10,15}$/; // Allows optional "+" and 10-15 digits

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setPhone(input);

        if (input && !phoneRegex.test(input)) {
            setPhoneError("Please enter a valid phone number (e.g., +919876543215)");
        } else {
            setPhoneError("");
        }
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        // Ensure the phone number is valid before proceeding
        if (!phone || phoneError) {
            alert("Please enter a valid phone number.");
            return;
        }

        setIsSubmitting(true);

        // Simulate an API call
        setTimeout(() => {
            console.log("Sign up with", { fullName, email, phone });
            setIsSubmitting(false);
        }, 2000); // Replace this with actual sign-up logic
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[#F9FAFB] pt-12 pb-32">
            <h2 className="text-[#111827] font-montserrat text-[30px] font-extrabold leading-[36px]">
                Create an Account
            </h2>
            <div className="text-[#4F46E5] font-montserrat text-sm font-semibold leading-5 pt-1 pb-8">Welcome</div>
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">

                </h2>
                <form className="space-y-4" onSubmit={handleSignUp}>
                    <InputField
                        label="Full Name"
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                    />
                    <InputField
                        label="Email Address"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div>
                        <InputField
                            label="Phone Number"
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            placeholder="e.g., +919876543215"
                            required
                        />
                        {phoneError && (
                            <p className="mt-1 text-sm text-red-500">{phoneError}</p>
                        )}
                    </div>
                    <InputField
                        label="City"
                        id="city"
                        required
                    />
                    <InputField
                        label="State"
                        id="state"
                        required
                    />
                    <InputField
                        label="Country"
                        id="country"
                        required
                    />
                    <Button
                        type="submit"
                        label="Sign Up"
                        isLoading={isSubmitting}
                        className="w-full py-2 bg-[#E4087F] font-semibold text-white ${bgColor} rounded-md hover:bg-[#ac0660] focus:outline-none focus:ring-2 focus:ring-[#E4087F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
