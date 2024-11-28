import React, { useEffect, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
 
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
    // If the menu item doesn't have a submenu, navigate to the corresponding route
    if (!item.submenu) {
      router.push(item.url);
    } else {
      toggleSubmenu(item.id);
    }
  };
 
  // const handelClose = () => {
  //   setOpenSubmenus([])
  // }
 
 
 
  const renderMenu = (items: any, isNested = false, depth = 0) => {
    return (
      <ul className={`${depth + 1} relative flex flex-col ${isNested ? `` : ''}`}>
        {items.map((item: any) => (
          <li key={item.id}
            className={` hover:bg-[#ebe7ea] ${isSubmenuOpen(item.id) ? 'hover:bg-transparent' : 'bg-white'}`}>
            <a
              href={item.url}
              className={`w-full ${depth == 0 ? "border-b-2" : ""} flex items-center justify-between`}
              onClick={() => handleMenuItemClick(item)}
            >
              <div className={`ml-0 py-4
              ${depth == 0 ? "ml-6 text-[12px] md:text-[14px] lg:text-[16px] text-[#5c5a5b] font-bold" : ""}
              ${depth == 1 ? "ml-0 pl-6 pr-6 md:pl-[40px] text-[12px] md:text-[14px] text-[#000] font-medium w-full hover:text-[#000]" : ""}
              ${depth == 2 ? "ml-0 pl-6 pr-6 md:pl-[60px] text-[12px] md:text-[14px] text-[#000] font-medium w-full hover:text-[#000]" : ""}
              ${depth == 3 ? "ml-0 pl-6 pr-6 md:pl-[80px] text-[12px] md:text-[14px] text-[#000] font-medium w-full hover:text-[#000]" : ""}
              ${depth == 4 ? "ml-0 pl-6 pr-6 md:pl-[80px] text-[12px] md:text-[14px] text-[#000] font-medium w-full hover:text-[#000]" : ""}`}
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
    </div>
  );
};
 
export default Sidebar;