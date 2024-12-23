import React, { useEffect, useState } from 'react'
import AdminHeader from '@/components/HeaderComponents/AdminHeader';
import { getCookie } from '@/utils/cookieUtils';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material';

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const userDetails = getCookie("userDetails")
    const token = getCookie("token")
    const [authChecking, setAuthChecking] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (userDetails?.role === "admin" && token) {
            setAuthChecking(false)
        } else {
            setAuthChecking(true);
            router.push('/')
        }
    }, [])

    if (authChecking) return <div className='flex items-center justify-center h-[90vh]'><CircularProgress /></div>

    return (
        <>
            <div className='min-h-screen flex flex-col justify-between w-[100%]'>
                <div>
                    <AdminHeader />
                    <div className="body-main">{children}</div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout