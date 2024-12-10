import React, { useState } from 'react';
import Image from 'next/image';
import { menuitems } from "../../../menuitems"
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link';
import { ClickAwayListener } from '@mui/material'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const navigation = {
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: <FaFacebook />,
        },
        {
            name: 'Instagram',
            href: '#',
            icon: <FaInstagram />,
        },
        {
            name: 'X',
            href: '#',
            icon: <FaTwitter />,
        },
    ],
}

const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setIsSidebarOpen(false);
    };

    // const user_name = 'John'

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div className='z-[100] sticky top-0 w-auto h-auto'>
                <div className='bg-white w-full h-[65px] xs:h-[75px] md:h-[85px] 2xl:h-[100px] flex items-center justify-end px-4 xs:px-8 xl:px-16 3xl:px-24 gap-2 2xl:gap-12 shadow-xl lg:shadow-0 xl:shadow-xl'>
                    <div className='flex justify-between w-[100%] md:w-[80%] lg:w-[70%] items-center'>
                        <div className='flex items-center gap-1 xs:gap-2 sm:gap-3'>
                            <FiMenu className={` ${isSidebarOpen ? "hidden" : "flex"} lg:hidden text-[22px] xs:text-[28px] md:text-[32px] cursor-pointer`}
                                onClick={handleSidebar} />
                            <Link href="/">
                                <div className='w-[75px] xs:w-[110px] xl:w-[150px] h-full cursor-pointer'>
                                    <Image src="/ebcog.png" alt="no img" width={500} height={500} className='w-full h-full' />
                                </div>
                            </Link>
                            <Link href="/">
                                <div className='w-[90px] xs:w-[140px] lg:w-[200px] xl:w-[150px] 2xl:w-[200px] h-full cursor-pointer'>
                                    <Image src="/e_logo.png" alt="no img" width={500} height={500} className='w-full h-full' />
                                </div>
                            </Link>
                            <Link href="/">
                                <div className='w-[100px] xs:w-[140px] lg:w-[200px] xl:w-[150px] 2xl:w-[200px] h-full cursor-pointer'>
                                    <Image src="/kblogo.png" alt="no img" width={500} height={500} className='w-full h-full' />
                                </div>
                            </Link>
                        </div>

                        <div className={`hidden w-[47%] h-full`}>
                            <Navbar menuArray={menuitems} />
                        </div>

                        <div className="lg:flex gap-x-6 md:order-2 text-[25px] hidden">
                            {navigation.social.map((item) => (
                                <Link key={item.name} href={item.href} className="text-[#E4087F] hover:text-[#eb98c4]">
                                    {item.icon}
                                </Link>
                            ))}
                        </div>
                    </div>


                    {/* <Link href='/registration' >
                        <h1 className="text-white font-semibold rounded-[6px] hidden sm:flex justify-center items-center py-2 xl:py-4 px-2 sm:px-4 lg:px-2 xl:px-3 text-[10px] xs:text-[13px] xl:text-[18px] leading-[15px] bg-[#E4087F] hover:bg-[#ac0660]">
                            Join Now
                        </h1>
                    </Link> */}
                    {/* <Link href="/profile">
                            <div className='flex items-center justify-center rounded-full bg-[#E4087F] text-white h-10 xl:h-12 w-10 xl:w-12 text-[20px] font-semibold cursor-pointer'>{user_name.charAt(0)}</div>
                        </Link> */}
                </div>
                <div className='hidden md:flex  items-center justify-center py-[14px] border-t border-[#c9c8c8] bg-white shadow-xl'>
                    <div className={`md:w-[88%] lg:w-[70%] w-[70%] h-full`}>
                        <Navbar menuArray={menuitems} />
                    </div>
                </div>


                <div className={`shadow-2xl z-[2000] absolute top-0 left-0  min-h-screen flex justify-end lg:hidden overflow-hidden ${isSidebarOpen ? "right-0 w-[60%] md:w-[40%] xl::w-[35%]" : "w-0"} transition-all duration-500`}>
                    <IoCloseSharp className={`${isSidebarOpen ? "block" : "hidden"} absolute z-[300] top-6 right-8 text-[28px] md:text-[40px] cursor-pointer`} onClick={() => { handleSidebar() }} />
                    <Sidebar menuItems={menuitems} isSidebarOpen={isSidebarOpen} />
                </div>
            </div>
        </ClickAwayListener>
    );
}

export default Header;