import CommonLayout from '@/common/layouts/CommonLayout'
import FacultyProfile from '@/container/facultyProfilePage/FacultyProfilePage'
import React, { ReactElement } from 'react'

const FacultyProfilePage = () => {

  return (
    <>
        <FacultyProfile />
    </>
  )
}

export default FacultyProfilePage


FacultyProfilePage.getLayout = function getLayout(page:ReactElement) {
    return (
      <CommonLayout>
        {page}
      </CommonLayout>
    )
  }
  