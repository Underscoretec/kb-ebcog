import CommonLayout from '@/common/layouts/CommonLayout'
import PrivacyStatement from '@/container/privacyStatement/PrivacyStatement'
import React, { ReactElement } from 'react'

// import Feedback from '@/src/container/feedback/Feedback'

const PrivacyStatementPage = () => {
  return (
    <PrivacyStatement />
  )
}
export default PrivacyStatementPage

PrivacyStatementPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <CommonLayout>
      {page}
    </CommonLayout>
  )
}  
