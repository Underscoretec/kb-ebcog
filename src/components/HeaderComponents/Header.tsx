import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { menuitems } from "../../../menuitems"
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link';
import { ClickAwayListener } from '@mui/material'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import LanguageSwitcher from './lang-switcher';
import LoginAvatar from './LoginAvatar';
import { usePathname } from 'next/navigation';
import { FaLinkedin } from "react-icons/fa";

const navigation = {
    social: [
        {
            name: 'Facebook',
            href: 'https://facebook.com/ebcog.diploma.courses',
            icon: <FaFacebook />,
        },
        {
            name: 'Instagram',
            href: 'https://www.instagram.com/ebcog_diploma_courses',
            icon: <FaInstagram />,
        },
        {
            name: 'LinkedIn',
            href: 'https://www.linkedin.com/company/ebcog-diploma-courses',
            icon: <FaLinkedin />,
        },
    ],
}

const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const pathname = usePathname();

    useEffect(()=>{
        setIsSidebarOpen(false)
    },[pathname])

    const handleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setIsSidebarOpen(false);
    };
    

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <>
                <div className='w-auto h-auto z-[100] max-lg:sticky top-0'>
                    <div className='bg-white w-full h-[65px] xs:h-[75px] md:h-[85px] 2xl:h-[100px] flex items-center justify-between lg:justify-end px-4 xs:px-8 xl:px-16 3xl:px-24 gap-0xs:gap-2 shadow-xl lg:shadow-0 xl:shadow-xl'>
                    <FiMenu className={` ${isSidebarOpen ? "hidden" : "flex"} lg:hidden text-[22px] xs:text-[28px] md:text-[32px] cursor-pointer`}
                                    onClick={handleSidebar} />
                        <div className='flex justify-between w-auto lg:w-[70%] xl:w-[65%] items-center'>
                            <div className='flex items-center gap-1 xs:gap-2 sm:gap-[30px] xl:gap-[50px]'>
                                <Link href="/">
                                    <div className='w-[65px] xs:w-[90px] xl:w-[150px] h-full cursor-pointer'>
                                        <Image src="/ebcog.png" alt="no img" width={500} height={500} className='w-full h-full' />
                                    </div>
                                </Link>
                                <Link href="/">
                                    <div className='w-[90px] xs:w-[120px] lg:w-[200px] xl:w-[150px] 2xl:w-[200px] h-full cursor-pointer'>
                                        <Image src="/e_logo.png" alt="no img" width={500} height={500} className='w-full h-full' />
                                    </div>
                                </Link>
                                <Link href="/">
                                    <div className='w-[90px] xs:w-[120px] lg:w-[200px] xl:w-[150px] 2xl:w-[200px] h-full cursor-pointer'>
                                        <Image src="/kblogo.png" alt="no img" width={500} height={500} className='w-full h-full' />
                                    </div>
                                </Link>
                            </div>

                            <div className="lg:flex gap-x-6 md:order-2 text-[25px] hidden">
                                {navigation.social.map((item) => (
                                    <Link target='_blank' key={item.name} href={item.href} className="text-[#E4087F] hover:text-[#ac0660]">
                                        {item.icon}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Language Switcher */}
                        <div className='lg:block hidden'>
                            <LanguageSwitcher />
                        </div>

                        {/* signin /signup avatar and options */}
                        <div className='block lg:hidden'><LoginAvatar/></div>

                    </div>

                    <div className={`shadow-2xl  z-[2000] absolute top-0 left-0  min-h-screen flex justify-end lg:hidden overflow-hidden ${isSidebarOpen ? "right-0 w-[60%] md:w-[40%] xl:w-[35%]" : "w-0"} transition-all duration-500`}>
                        <IoCloseSharp className={`${isSidebarOpen ? "block" : "hidden"} absolute z-[300] top-6 right-8 text-[28px] md:text-[40px] cursor-pointer`} onClick={() => { handleSidebar() }} />
                        <Sidebar menuItems={menuitems} isSidebarOpen={isSidebarOpen} />
                    </div>
                </div>
                <div className='hidden lg:flex z-[100] lg:sticky top-0  items-center justify-center py-[14px] border-t border-[#c9c8c8] bg-white shadow-xl'>
                    <div className={`w-[100%] h-full px-4 xs:px-8 xl:px-16 3xl:px-24`}>
                        <Navbar menuArray={menuitems}/>
                    </div>
                </div>
            </>
        </ClickAwayListener>
    );
}

export default Header;