import CommonLayout from '@/common/layouts/CommonLayout'
import ReachOutContainer from '@/container/reachOut/ReachOutContainer'
import React, { ReactElement } from 'react'

const ReachOutPage = () => {
  return (
    <>
      <ReachOutContainer/>
    </>
  )
}

export default ReachOutPage

ReachOutPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
  }
  
