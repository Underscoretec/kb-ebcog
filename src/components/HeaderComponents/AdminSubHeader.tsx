import React from 'react'
import { useRouter } from 'next/router';
import { FiLogOut } from "react-icons/fi";

const AdminSubHeader = ({ adminMenuitems }: any) => {
    const router = useRouter();

    const handleNavigation = (url: any) => {
        router.push(url);
    };


    return (
        <div className="flex justify-between gap-3">
            <div className="flex gap-4">
                {adminMenuitems.map((item:any) => (
                    <div
                        key={item.id}
                        onClick={() => handleNavigation(item.url)}
                        className={`flex gap-2 items-center px-4 py-2 cursor-pointer rounded-md text-[20px] font-semibold ${router.pathname === item.url
                                ? "bg-[#f5e1e8] text-[#E4087F]"
                                : "text-[#E4087F] hover:bg-[#f5e1e8]"
                            }`}
                    >
                        {item.icon}
                        {item.title}
                    </div>
                ))}
            </div>
            <div>
                <div
                    className="flex gap-2 items-center px-4 py-2 cursor-pointer hover:bg-[#f5e1e8] rounded-md text-[20px] text-[#E4087F] font-semibold"
                >
                    <FiLogOut className="h-6 w-6" />
                    Logout
                </div>
            </div>
        </div>
    )
}

export default AdminSubHeader