import CommonLayout from '@/common/layouts/CommonLayout'
import PaymentConfirmation from '@/container/paymentConfirmation/PaymentConfirmation'
import React, { ReactElement } from 'react'

const Confirmation = () => {
  return (
    <><PaymentConfirmation /></>
  )
}

export default Confirmation


Confirmation.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}