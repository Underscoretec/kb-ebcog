import React from 'react'
import { useRouter } from 'next/router';
import { FiLogOut } from "react-icons/fi";
import { removeAllCookies } from '@/utils/cookieUtils';
import { toast } from 'react-toastify';

const AdminSubHeader = ({ adminMenuitems }: any) => {
    const router = useRouter();

    const handleNavigation = (url: any) => {
        router.push(url);
    };

    const handleAdminLogout = () =>{
        removeAllCookies();
        toast.success("Logout succesfully");
        router.push('/');
    }


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
                        <span className='hidden sm:block'>{item.title}</span>
                    </div>
                ))}
            </div>
            <div>
                <div className="flex gap-2 items-center px-4 py-2 cursor-pointer hover:bg-[#f5e1e8] rounded-md text-[20px] text-[#E4087F] font-semibold" onClick={handleAdminLogout}>
                    <FiLogOut className="h-6 w-6" />
                    <span className='hidden sm:block'>Logout</span>
                </div>
            </div>
        </div>
    )
}

export default AdminSubHeader