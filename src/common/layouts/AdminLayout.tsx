import AdminHeader from '@/components/HeaderComponents/AdminHeader';
import React from 'react'

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <>
            <div className='min-h-screen flex flex-col justify-between w-[100%]'>
                <div>
                    <AdminHeader />
                    <div className="body-main px-4 xs:px-8 xl:px-16 3xl:px-24 py-4">{children}</div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout