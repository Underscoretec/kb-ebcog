import RegisteredUserList from '@/components/UserList/RegisteredUserList'
import React, { useState } from 'react'

const UserList = () => {
    const [activeTab, setActiveTab] = useState('registered') 

    console.log("activeTab",activeTab)

    return (
        <div className='py-6 px-4 xs:px-8 xl:px-16 3xl:px-24'>
            <div className='flex items-center gap-3 sm:gap-6'>
                <div
                    className={`p-3 border rounded-xl bg-indigo-50 text-indigo-700 font-montserrat text-[14px] sm:text-[20px] cursor-pointer 
          ${activeTab === 'registered' ? 'border-indigo-700' : 'border-transparent  hover:border-indigo-700'}`}
                    onClick={() => setActiveTab('registered')}
                >
                    Registered User
                </div>
                <div  className={`p-3 border rounded-xl bg-indigo-50 text-indigo-700 font-montserrat text-[14px] sm:text-[20px] cursor-pointer 
                        ${activeTab === 'signup' ? 'border-indigo-700' : 'border-transparent hover:border-indigo-700'}`}  onClick={() => setActiveTab('signup')}>
                    Signup User
                </div>
            </div>

            {activeTab === 'registered' ? (
                <RegisteredUserList />
            ) : (
                <div className=' text-[25px] text-gray-500 py-12'>No data found !</div>
            )}
        </div>
    )
}

export default UserList
