import AdminLayout from '@/common/layouts/AdminLayout'
import ComingSoon from '@/components/ComingSoon/ComingSoon'
import React, { ReactElement } from 'react'

const TransactionList = () => {
  return (
    <div><ComingSoon /></div>
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