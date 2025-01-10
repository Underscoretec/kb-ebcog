import AdminLayout from '@/common/layouts/AdminLayout'
import TransactionListPage from '@/container/transactionListPage/TransactionListPage'
import { useRouteProtection } from '@/utils/pathChecker';
import React, { ReactElement } from 'react'

const TransactionList = () => {
    useRouteProtection();
    return (
        <div><TransactionListPage /></div>
    )
}

export default TransactionList

TransactionList.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}