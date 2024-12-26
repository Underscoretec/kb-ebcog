// pages/404.js or pages/404.tsx

import CommonLayout from "@/common/layouts/CommonLayout";
import Link from "next/link";
import React, { ReactElement } from "react";

const Custom404 = () => {
    return (
        <div className="h-[70vh] flex flex-col items-center justify-center bg-[#fee6f3] text-[#E4087F]">
            <h1 className="text-5xl font-bold mb-4">Coming Soon ....</h1>
            <Link href="/">
                <div className="mt-6 px-6 py-3 rounded-lg shadow-custom hover:shadow-xl text-center cursor-pointer bg-white">
                    <h1 className="text-[#4a4a4a] text-[25px] font-bold">Home</h1>
                </div>
            </Link>
        </div>
    );
};

export default Custom404;

Custom404.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}