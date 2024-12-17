
import CommonLayout from '@/common/layouts/CommonLayout'
import RefundPolicy from '@/container/refundPolicy/RefundPolicy'
import React, { ReactElement } from 'react'

const RefundPolicyPage = () => {
  return (
    <RefundPolicy />
  )
}
export default RefundPolicyPage


RefundPolicyPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <CommonLayout>
      {page}
    </CommonLayout>
  )
}







