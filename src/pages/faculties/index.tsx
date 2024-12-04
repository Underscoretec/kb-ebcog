import CommonLayout from '@/common/layouts/CommonLayout'
import InternationalFaculty from '@/components/HomeComponets/InternationalFaculty'
import React, { ReactElement } from 'react'

const Faculties = () => {
  return (
    <><InternationalFaculty/></>
  )
}

export default Faculties

Faculties.getLayout = function getLayout(page:ReactElement) {
    return (
      <CommonLayout>
        {page}
      </CommonLayout>
    )
  }