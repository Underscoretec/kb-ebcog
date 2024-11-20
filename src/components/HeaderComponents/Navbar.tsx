import React, { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { ClickAwayListener } from '@mui/material';
import { FaAngleDown } from 'react-icons/fa'; // Import the dropdown arrow icon
 
const Navbar = (props: any) => {
  const myref = useRef();
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
  const pathname = usePathname(); // Get the current path
  const [openSubmenus, setOpenSubmenus] = useState<Record<number, boolean>>({});
 
  const toggleSubMenu = (index: any) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the submenu visibility based on index
    }));
  };
 
  const handleClickAway = () => {
    setOpenSubmenus({});
  };
 
  //   const toggleSubMenu = (index: any) => {
//     setOpenSubmenus((prev) => {
//       const newOpenSubmenus: any = [...prev];
//       newOpenSubmenus[index] = !newOpenSubmenus[index];
//       return newOpenSubmenus;
//     });
//   };
 
  // const handleMouseEnter = () => {
  //   if (depth === 1) {
  //     setMenuStatus([]);
  //   }
 
  //   if (menuData.submenu) {
  //     setMenuStatus((prev: any) => [...prev, menuData.id]);
  //   }
  // };
 
  const isActive = pathname === menuData.url; // Check if the current path matches the menu item's URL
 
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div
        className={`relative h-full border-b-2 text-gray-500 border-white
          ${depth > 1 ?
            'bg-white text-[#000000] hover:text-white hover:bg-[#CE5E39] z-[100] hover:border-b-0' :
            'bg-white hover:text-[#CE5E39] hover:border-b-2 hover:border-[#CE5E39]'
          }`}
      >
        <ul
         // onClick={() => { handleMouseEnter(); toggleSubMenu(index); }}
          // onMouseEnter={depth > 1 ? () => { handleMouseEnter(); toggleSubMenu(index); } : () => {}}
          onClick={() => { toggleSubMenu(index); }}
          className="h-full w-full flex items-center cursor-pointer"
        >
          <Link href={menuData.url} className={`w-full ${isActive ? 'border-[#CE5E39] text-[#CE5E39] hover:text-gray-500' : ''}`}>
            <li
              key={index}
              className={`text-[12px] xl:text-[14px] 2xl:text-[16px] font-medium cursor-pointer flex justify-between items-center ${depth === 1 ? 'py-0' : 'p-3 2xl:p-4'}`}
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
          // onMouseEnter={handleMouseEnter}
          // className={`${menuStatus.find((v: any) => v === menuData.id) ? 'block' : 'hidden border-0'}
            onMouseLeave={() => { setOpenSubmenus((prev) => ({ ...prev, [index]: false })); }}
            className={`${openSubmenus[index] ? 'block' : 'hidden'}
              ${depth === 1 ? 'top-[calc(100%)] left-0 w-[calc(120%)] xl:w-[calc(140%)] 2xl:w-[calc(200%)]' :
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