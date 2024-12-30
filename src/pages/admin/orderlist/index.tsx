import AdminLayout from '@/common/layouts/AdminLayout'
import OrderListPage from '@/container/OrderList/OrderListPage'
import React, { ReactElement } from 'react'

const OrderList = () => {
    return (
        <div><OrderListPage /></div>
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