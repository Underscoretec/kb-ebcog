import CommonLayout from '@/common/layouts/CommonLayout'
import MeetUs from '@/container/meetUs/MeetUs'
import React, { ReactElement } from 'react'

const MeetusInPerson = () => {
  return (
    <>
      <MeetUs />
    </>
  )
}

export default MeetusInPerson



MeetusInPerson.getLayout = function getLayout(page: ReactElement) {
  return (
    <CommonLayout>
      {page}
    </CommonLayout>
  )
}