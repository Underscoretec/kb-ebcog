import RegisteredUserList from '@/components/UserList/RegisteredUserList'
import SignupUserList from '@/components/UserList/SignupUserList';
import React, { useState } from 'react'
import { FaFileDownload } from "react-icons/fa";

const UserList = () => {
    const [activeTab, setActiveTab] = useState('registered')

    const handleExcelDownload = () =>{
        console.log("cooming soon")
    }

    return (
        <div className='py-6 px-4 xs:px-8 xl:px-16 3xl:px-24'>
            <div className='flex items-center gap-3 sm:gap-6'>
                <div
                    className={`px-3 py-2 border rounded-xl bg-indigo-50 text-indigo-700 font-montserrat text-[14px] sm:text-[20px] cursor-pointer 
          ${activeTab === 'registered' ? 'border-indigo-700' : 'border-transparent  hover:border-indigo-700'}`}
                    onClick={() => setActiveTab('registered')}
                >
                    Registered User
                </div>
                <div className={`px-3 py-2 border rounded-xl bg-indigo-50 text-indigo-700 font-montserrat text-[14px] sm:text-[20px] cursor-pointer 
                        ${activeTab === 'signup' ? 'border-indigo-700' : 'border-transparent hover:border-indigo-700'}`} onClick={() => setActiveTab('signup')}>
                    Signup User
                </div>
            </div>

            {activeTab === 'registered' && <div className='flex justify-end py-2'>
                <div className='flex items-center gap-4 font-semibold text-[#E4087F] hover:bg-[#ffdae8] py-2 px-6 rounded-full font-montserrat cursor-pointer active:scale-[0.8] duration-500' onClick={handleExcelDownload}><FaFileDownload /> Download Excel</div>
            </div>}


            {activeTab === 'registered' ? (
                <RegisteredUserList />
            ) : (
                <SignupUserList />
                // <div className=' text-[25px] text-gray-500 py-12'>No data found !</div>
            )}
        </div>
    )
}

export default UserList
