import AdminLayout from '@/common/layouts/AdminLayout'
import ComingSoon from '@/components/ComingSoon/ComingSoon'
import React, { ReactElement } from 'react'

const OrderList = () => {
    return (
        <div><ComingSoon /></div>
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