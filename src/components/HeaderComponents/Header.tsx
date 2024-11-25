import React, { useState } from 'react';
import Image from 'next/image';
import { menuitems } from "../../../menuitems"
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import Link from 'next/link';
import { ClickAwayListener } from '@mui/material'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
 
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
                <div className='bg-white w-full h-[70px] md:h-[80px] flex items-center justify-between px-6 lg:px-[20px] xl:px-[40px] 2xl:px-[50px] gap-2 2xl:gap-6 shadow-xl'>
                    <div className='flex items-center gap-4'>
                        <FiMenu className={` ${isSidebarOpen ? "hidden" : "flex"} lg:hidden text-[28px] md:text-[32px] cursor-pointer`}
                            onClick={handleSidebar} />
                            <Link href="/">
                            <div className='w-[150px] xl:w-[150px] h-full cursor-pointer'>
                                <Image src="/ebcog.png" alt="no img" width={500} height={500} className='w-full h-full' />
                            </div>
                        </Link>
                        <Link href="/">
                            <div className='w-[150px] xl:w-[200px] h-full cursor-pointer'>
                                <Image src="/kblogo.png" alt="no img" width={500} height={500} className='w-full h-full' />
                            </div>
                        </Link>
                    </div>
 
                    <div className={`hidden lg:block w-[58%] h-full`}>
                        <Navbar menuArray={menuitems} />
                    </div>
 
                    <Link href='/signup' >
                        <h1 className="text-white font-semibold rounded-[6px] flex justify-center items-center py-2 xl:py-4 px-6 lg:px-2 xl:px-3 2xl:px-12 text-[13px] xl:text-[18px] leading-[15px] bg-[#E4087F] border border-[#E4087F] hover:bg-transparent hover:text-[#E4087F]">
                            Join Now
                        </h1>
                    </Link>
                    {/* <Link href="/profile">
            <div className='flex items-center justify-center rounded-full bg-[#E4087F] text-white h-10 xl:h-12 w-10 xl:w-12 text-[20px] font-semibold cursor-pointer'>{user_name.charAt(0)}</div>
          </Link> */}
                </div>
 
                <div className={`shadow-2xl z-[2000] absolute top-0 left-0  min-h-screen flex justify-end lg:hidden overflow-hidden
            ${isSidebarOpen ? "right-0 w-[60%] md:w-[40%] xl::w-[35%]" : "w-0"} transition-all duration-500`}>
 
                    <IoCloseSharp className={`${isSidebarOpen ? "block" : "hidden"} absolute z-[300] top-6 right-8 text-[28px] md:text-[40px] cursor-pointer`} onClick={() => { handleSidebar() }} />
                    <Sidebar menuItems={menuitems} isSidebarOpen={isSidebarOpen} />
                </div>
            </div>
        </ClickAwayListener>
    );
}
 
export default Header;