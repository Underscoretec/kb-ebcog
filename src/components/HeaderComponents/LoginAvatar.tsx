import React, { useEffect, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { getCookie, removeAllCookies } from '@/utils/cookieUtils';
import { RiLoginCircleLine } from "react-icons/ri";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const LoginAvatar = () => {
    const [token, setToken] = useState<string | null>(null);
    const tokenFromCookie = getCookie('token');
    const router = useRouter();

    const handleLogout = () => {
        removeAllCookies();
        toast.success("Logout succesfully");
        setToken(null)
        router.push('/')
    }

    useEffect(() => {
        setToken(tokenFromCookie);
    }, [tokenFromCookie]);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="">
                    <div className='flex items-center justify-center rounded-full bg-[#E4087F] text-white h-6 xs:h-8 sm:h-10 w-6 xs:w-8 sm:w-10  text-[12px] xs:text-[14px] sm:text-[20px] font-semibold cursor-pointer'>
                        {token ? getCookie('userDetails')?.first_name?.charAt(0).toUpperCase() : <RiLoginCircleLine onClick={() => router.push('/login')} />}
                    </div>
                </MenuButton>
            </div>
            {token &&
                <MenuItems
                    transition
                    className="absolute right-0 z-[101] mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="py-1">
                    <MenuItem>
                            <div
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                                <div onClick={()=>router.push('/cart')}>Cart </div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div
                                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                                <div onClick={handleLogout}>Sign out </div>
                            </div>
                        </MenuItem>

                    </div>
                </MenuItems>
            }
        </Menu>
    )
}

export default LoginAvatar