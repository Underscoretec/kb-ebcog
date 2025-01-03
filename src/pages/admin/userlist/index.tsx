import AdminLayout from '@/common/layouts/AdminLayout'
import UserList from '@/container/UserList/UserList'
import { useRouteProtection } from '@/utils/pathChecker';
import React, { ReactElement } from 'react'

const UserListPage = () => {
    useRouteProtection();
    return (
        <div><UserList /></div>
    )
}

export default UserListPage

UserListPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}