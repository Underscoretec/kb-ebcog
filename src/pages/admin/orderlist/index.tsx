import AdminLayout from '@/common/layouts/AdminLayout'
import OrderListPage from '@/container/orderList/OrderListPage'
import { useRouteProtection } from '@/utils/pathChecker';
import React, { ReactElement } from 'react'

const OrderList = () => {
    useRouteProtection();
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