import React from "react";
import Image from "next/image";

const Unsubscribe = () => {
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
                        className='w-full h-full'
                    />
                </div>
                <div className="border border-gray-300"></div>
                <h1 className="text-2xl font-bold mb-4 text-start mt-8">Unsubscribe</h1>
                <p className="text-black mb-6 text-start font-semibold">
                    Do you want to unsubscribe from this mailing list?
                </p>
                <div className="flex items-center justify-start mb-6">
                    <input
                        type="checkbox"
                        id="unsubscribe-checkbox"
                        className="mr-2"
                    />
                    <label htmlFor="unsubscribe-checkbox" className="text-gray-700 font-semibold">
                        Unsubscribe from all future e-mails.
                    </label>
                </div>
                <div className="text-start">
                    <button className="text-white px-6 py-2 rounded-sm bg-[#E4087F] hover:bg-[#ac0660]">
                        Unsubscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Unsubscribe;