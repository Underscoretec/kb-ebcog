import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AdminSubHeader from './AdminSubHeader';
import { HiUsers } from "react-icons/hi";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { AiOutlineProduct } from "react-icons/ai";

const AdminHeader = () => {

    const adminMenuitems = [
        {
          id: '1',
          title: "Users",
          url: "/admin/userlist",
          icon: <HiUsers className="h-6 w-6" />,
        },
        {
          id: '2',
          title: "Orders",
          url: "/admin/orderlist",
          icon: <AiOutlineProduct className="h-6 w-6" />,
        },
        {
          id: '3',
          title: "Transactions",
          url: "/admin/transactionlist",
          icon: <LiaMoneyCheckAltSolid className="h-6 w-6" />,
        },
      ];


    return (
            <>
                <div className='w-auto h-auto z-[100] max-lg:sticky top-0'>
                    <div className='bg-white w-full h-[65px] xs:h-[75px] md:h-[85px] 2xl:h-[100px] flex items-center justify-between lg:justify-end px-4 xs:px-8 xl:px-16 3xl:px-24 gap-0xs:gap-2 shadow-xl lg:shadow-0 xl:shadow-xl'>
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
                        </div>
                    </div>
                </div>
                <div className='flex z-[100] lg:sticky top-0  items-center justify-center py-[14px] border-t border-[#c9c8c8] bg-white shadow-xl'>
                    <div className={`w-[100%] h-full px-4 xs:px-8 xl:px-16 3xl:px-24`}>
                        <AdminSubHeader adminMenuitems={adminMenuitems}/>
                    </div>
                </div>
            </>
    );
}

export default AdminHeader;