import AdminLayout from '@/common/layouts/AdminLayout'
import MeetUs from '@/container/meetUs/MeetUs'
import React, { ReactElement } from 'react'

const UserList = () => {
    return (
        <div>UserList</div>
    )
}

export default UserList

UserList.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}