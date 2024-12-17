import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ClickAwayListener } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa';
import LoginAvatar from './LoginAvatar';

const Navbar = (props: any) => {

    const [menuStatus, setMenuStatus] = useState([]);

    return (
        <>
            <div className="h-full w-full justify-between items-center hidden md:flex">
                <div></div>
                <div className='flex items-center gap-12'>
                    {props.menuArray.map((menuItem: any, index: any) => (
                        <CreateMenu
                            key={index}
                            menuData={menuItem}
                            index={index}
                            depth={1}
                            menuStatus={menuStatus}
                            setMenuStatus={setMenuStatus}
                        />
                    ))}
                </div>
                <div className='flex gap-8 items-center'>

                    <Link href='/registration' >
                        <h1 className="text-white font-semibold rounded-[6px] hidden lg:flex justify-center items-center py-2 xl:py-4 px-2 sm:px-4 lg:px-2 xl:px-3 text-[10px] xs:text-[13px] xl:text-[18px] leading-[15px] bg-[#E4087F] hover:bg-[#ac0660]">
                            Join Now
                        </h1>
                    </Link>

                    {/* signin /signup avatar and options */}
                    <div className='hidden lg:block'><LoginAvatar /></div>
                </div>

            </div>
        </>
    );
};

const CreateMenu = ({ menuData, index, depth, menuStatus, setMenuStatus }: any) => {
    const pathname = usePathname();
    const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});

    const toggleSubMenu = (index: any) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const openSubMenu = (index: any) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [index]: true,
        }));
    };

    const closeSubMenu = (index: any) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [index]: false,
        }));
    };

    const handleClickAway = () => {
        setOpenSubmenus({});
    };

    const isActive = pathname === menuData.url; // Check if the current path matches the menu item's URL

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div
                className={`relative h-full text-gray-500 transition duration-300 ease-in-out ${depth > 1 ? 'bg-white text-[#6B7280] hover:text-black hover:bg-[#ebe7ea] z-[100]' : 'bg-white hover:text-[#111827]'}`}
                onMouseEnter={() => openSubMenu(index)} // Open submenu on hover
                onMouseLeave={() => closeSubMenu(index)}
            >
                <ul onClick={() => toggleSubMenu(index)} className="h-full w-full flex items-center cursor-pointer">
                    <Link
                        href={menuData.url}
                        target={menuData.url.endsWith('.pdf') ? '_blank' : '_self'}
                        rel={menuData.url.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                        className={`w-full ${isActive ? ' text-[#111827] hover:text-gray-500' : ''}`}
                    >
                        <li key={index} className={`text-[16px] xl:text-[14px] 2xl:text-[16px] font-medium font-montserrat cursor-pointer flex justify-between items-center ${depth === 1 ? 'py-0' : 'p-3 2xl:p-4'}`}>
                            <span>{menuData.title}</span>
                            {menuData.submenu && (
                                <FaAngleDown className={`transition-transform transform duration-500 ml-2 text-sm ${openSubmenus[index] ? 'rotate-180' : ''}`} />
                            )}
                        </li>
                    </Link>
                </ul>

                {/* Render the submenu */}
                {menuData.submenu && (
                    <ul
                        className={`${openSubmenus[index] ? 'block' : 'hidden'}
                            ${depth === 1 ? 'top-[calc(100%)] left-0 w-[calc(200%)] xl:w-[calc(200%)]' : `${depth === 2 ? "w-[calc(100%)] 2xl:w-[calc(70%)]" : "w-[calc(100%)] xl:w-[calc(85%)]"} top-0 ml-[calc(100%)] bg-white`} shadow-2xl absolute`}
                    >
                        {openSubmenus[index] &&
                            menuData.submenu.map((subMenu: any, subMenuIndex: any) => (
                                <CreateMenu
                                    key={subMenuIndex}
                                    menuData={subMenu}
                                    depth={depth + 1}
                                    menuStatus={menuStatus}
                                    setMenuStatus={setMenuStatus}
                                />
                            ))}
                    </ul>
                )}
            </div>
        </ClickAwayListener>
    );
};


export default Navbar;