import AdminLayout from '@/common/layouts/AdminLayout'
import React, { ReactElement } from 'react'

const OrderList = () => {
    return (
        <div>OrderList</div>
    )
}

export default OrderList

OrderList.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}