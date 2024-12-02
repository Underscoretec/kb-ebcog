import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ClickAwayListener } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa'; 

const Navbar = (props: any) => {

    const [menuStatus, setMenuStatus] = useState([]);

    return (
        <>
            <div className="h-full w-full justify-around items-center hidden lg:flex">
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

    const handleClickAway = () => {
        setOpenSubmenus({});
    };

    const isActive = pathname === menuData.url; // Check if the current path matches the menu item's URL

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <div
                className={`relative h-full border-b-2 text-gray-500 border-white
          transition duration-300 ease-in-out
          ${depth > 1 ?
                        'bg-white text-[#6B7280] hover:text-black hover:bg-[#ebe7ea] z-[100] hover:border-b-0' :
                        'bg-white hover:text-[#111827]'
                    }`}

            >
                <ul
                    onClick={() => { toggleSubMenu(index); }}
                    className="h-full w-full flex items-center cursor-pointer"
                >
                    <Link
                        href={menuData.url}
                        target={menuData.url.endsWith('.pdf') ? '_blank' : '_self'}
                        rel={menuData.url.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                        className={`w-full ${isActive ? ' text-[#111827] hover:text-gray-500' : ''}`}
                    >
                        <li
                            key={index}
                            className={`text-[12px] xl:text-[14px] 2xl:text-[16px] font-medium font-montserrat cursor-pointer flex justify-between items-center ${depth === 1 ? 'py-0' : 'p-3 2xl:p-4'}`}
                        >
                            <span>{menuData.title}</span>
                            {menuData.submenu && (
                                <FaAngleDown className={`transition-transform transform duration-500 ml-2 text-sm ${openSubmenus[index] ? 'rotate-180' : ''}`} />
                            )}
                        </li>
                    </Link>

                </ul>

                {/* Only render the submenu if it exists */}
                {menuData.submenu && (
                    <ul
                        onMouseLeave={() => { setOpenSubmenus((prev) => ({ ...prev, [index]: false })); }}
                        className={`${openSubmenus[index] ? 'block' : 'hidden'}
              ${depth === 1 ? 'top-[calc(100%)] left-0 w-[calc(200%)] xl:w-[calc(200%)]' :
                                `${depth === 2 ? "w-[calc(100%)] 2xl:w-[calc(70%)]" : "w-[calc(100%)] xl:w-[calc(85%)]"} top-0 ml-[calc(100%)] bg-white`}
              shadow-2xl absolute border-2 border-t-0 hover:border-0`}
                    >
                        {openSubmenus[index] && menuData.submenu.map((subMenu: any, subMenuIndex: any) => (
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