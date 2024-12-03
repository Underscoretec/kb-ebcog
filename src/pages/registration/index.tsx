import CommonLayout from '@/common/layouts/CommonLayout'
import RegistrationCard from '@/components/RegistrationCard/RegistrationCard'
import RegistrationForm from '@/container/Registration/RegistrationForm'
import React, { ReactElement } from 'react'

const RegistrationFormPage = () => {
  return (
    <>
    <RegistrationForm />
      {/* <RegistrationCard /> */}
    </>
  )
}

export default RegistrationFormPage

RegistrationFormPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <CommonLayout>
      {page}
    </CommonLayout>
  )
}