import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaFacebook, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RiTwitterXFill } from "react-icons/ri";

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
            icon: <RiTwitterXFill />,
        },
    ],
}

const Sidebar = ({ menuItems, isSidebarOpen }: any) => {
    const [openSubmenus, setOpenSubmenus]: any = useState([]);
    const router = useRouter();

    const toggleSubmenu = (itemId: any) => {
        setOpenSubmenus((prevOpenSubmenus: any) => {
            if (prevOpenSubmenus.includes(itemId)) {
                return prevOpenSubmenus.filter((id: any) => id !== itemId);
            } else {
                return [...prevOpenSubmenus, itemId];
            }
        });

    };

    useEffect(() => {
        if (isSidebarOpen) {
            setOpenSubmenus([]);
        }
    }, [isSidebarOpen]);



    const isSubmenuOpen = (itemId: any) => {
        return openSubmenus.includes(itemId);
    };


    const handleMenuItemClick = (item: any) => {
        if (!item.submenu) {
            if (item.url.endsWith('.pdf')) {
                window.open(item.url, '_blank', 'noopener noreferrer');
            } else {
                router.push(item.url);
            }
        } else {
            toggleSubmenu(item.id);
        }
    };


    const renderMenu = (items: any, isNested = false, depth = 0) => {
        return (
            <ul className={`${depth + 1} relative flex flex-col ${isNested ? `` : ''}`}>
                {items.map((item: any) => (
                    <li key={item.id}
                        className={` hover:bg-[#ebe7ea] ${isSubmenuOpen(item.id) ? 'hover:bg-transparent' : 'bg-white'}`}>
                        <a
                            // href={item.url}
                            className={`w-full ${depth == 0 ? "border-b-2" : ""} flex items-center justify-between`}
                            onClick={() => handleMenuItemClick(item)}
                        >
                            <div className={`ml-0 py-4
                                ${depth == 0 ? "ml-6 text-[12px] md:text-[14px] lg:text-[16px] text-[#5c5a5b] font-bold font-montserrat" : ""}
                                ${depth == 1 ? "ml-0 pl-6 pr-6 md:pl-[40px] text-[12px] md:text-[14px] text-[#000] font-medium font-montserrat w-full hover:text-[#000]" : ""}
                                ${depth == 2 ? "ml-0 pl-6 pr-6 md:pl-[60px] text-[12px] md:text-[14px] text-[#000] font-medium font-montserrat w-full hover:text-[#000]" : ""}
                                ${depth == 3 ? "ml-0 pl-6 pr-6 md:pl-[80px] text-[12px] md:text-[14px] text-[#000] font-medium font-montserrat w-full hover:text-[#000]" : ""}
                                ${depth == 4 ? "ml-0 pl-6 pr-6 md:pl-[80px] text-[12px] md:text-[14px] text-[#000] font-medium font-montserrat w-full hover:text-[#000]" : ""}`}
                            >
                                {item.title}
                            </div>
                            {item.submenu && (
                                <FaAngleDown
                                    className={`absolute right-0 transition-transform transform duration-500 mr-6 ${isSubmenuOpen(item.id) ? 'rotate-180' : ''} ${isSidebarOpen ? "block" : "right-[-800px]"}`}
                                />
                            )}
                        </a>
                        {item.submenu && isSubmenuOpen(item.id) && renderMenu(item.submenu, true, depth + 1)}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="z-[200] bg-white text-black min-h-full w-full shadow-2xl pt-14 md:pt-20">
            {renderMenu(menuItems)}
            <Link href='/registration' >
                <h1 className="m-4 p-2 text-white font-semibold rounded-[6px] flex lg:hidden justify-center items-center text-[16px] leading-[17px] bg-[#E4087F] hover:bg-[#ac0660]">
                    Join Now
                </h1>
            </Link>

            <div className="flex justify-center gap-x-6 md:order-2 text-[25px] lg:hidden">
                {navigation.social.map((item) => (
                    <Link key={item.name} href={item.href} className="text-[#E4087F] hover:text-[#eb98c4]">
                        {item.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;