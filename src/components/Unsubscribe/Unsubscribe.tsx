import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useUnsubscribeHook } from "@/container/unsubscribepage/useUnsubscribeHooks";

const Unsubscribe = () => {
    const { unsubscribeApi } = useUnsubscribeHook();
    const [isChecked, setIsChecked] = useState(false);
    const router = useRouter();
    const { id } = router.query || "6756c8a6ab24ad42988c4693"; 

    const handleCheckboxChange = (event: any) => {
        setIsChecked(event.target.checked);
    };

    const handleUnsubscribe = async () => {
        if (!isChecked) {
            alert("Please check the box to confirm unsubscription.");
            return;
        }
        const result = await unsubscribeApi("6756c8a6ab24ad42988c4693"); 
        console.log(result, "result**");
    };

    return (
        <div className="py-4 sm:py-10 px-4 sm:px-10">
            <div className="bg-[#fff] px-4 xs:px-8 lg:px-16 py-4 sm:py-8 max-w-md md:max-w-xl lg:max-w-2xl mx-auto justify-center border border-gray-200 rounded-lg shadow-md">
                <div className="text-start mb-8 w-[150px] h-full">
                    <Image
                        src="/kblogo.png"
                        alt="KnowledgeBridge International Logo"
                        width={500}
                        height={500}
                        priority
                        className="w-full h-full"
                    />
                </div>
                <div className="border border-gray-300"></div>
                <h1 className="text-2xl font-bold mb-4 text-start mt-8 text-[18px] sm:text-[25px]">
                    Unsubscribe
                </h1>
                <p className="text-gray-900 mb-6 text-start font-semibold text-[14px] sm:text-[20px]">
                    Do you want to unsubscribe from this mailing list?
                </p>
                <div className="flex items-center justify-start mb-6">
                    <input
                        type="checkbox"
                        id="unsubscribe-checkbox"
                        className="mr-2"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label
                        htmlFor="unsubscribe-checkbox"
                        className="text-gray-600 font-semibold text-[12px] sm:text-[18px]"
                    >
                        Unsubscribe from all future e-mails.
                    </label>
                </div>
                <div className="text-start">
                    <button
                        className="text-white px-6 py-2 rounded-sm bg-[#E4087F] hover:bg-[#ac0660] disabled:bg-[#e498c1]"
                        onClick={handleUnsubscribe}
                        disabled={!isChecked}
                    >
                        Unsubscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Unsubscribe;
