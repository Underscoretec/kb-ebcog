import CommonLayout from '@/common/layouts/CommonLayout'
import FeeOptionPage from '@/container/feeOptions/FeeOptionPage'
import { useRouteProtection } from '@/utils/pathChecker';
import React, { ReactElement } from 'react'

const FeeOptions = () => {
  useRouteProtection();

  return (
    <div><FeeOptionPage /></div>
  )
}

export default FeeOptions

FeeOptions.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}