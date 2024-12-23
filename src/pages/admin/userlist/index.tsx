import AdminLayout from '@/common/layouts/AdminLayout'
import UserList from '@/container/UserList/UserList'
import React, { ReactElement } from 'react'

const UserListPage = () => {
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