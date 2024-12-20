import AdminLayout from '@/common/layouts/AdminLayout'
import React, { ReactElement } from 'react'

const TransactionList = () => {
  return (
    <div>TransactionList</div>
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