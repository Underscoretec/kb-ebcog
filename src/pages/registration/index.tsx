import CommonLayout from '@/common/layouts/CommonLayout'
import RegistrationCard from '@/components/RegistrationCard/RegistrationCard'
import React, { ReactElement } from 'react'

const RegistrationForm = () => {
  return (
    <><RegistrationCard /></>
  )
}

export default RegistrationForm

RegistrationForm.getLayout = function getLayout(page:ReactElement) {
    return (
      <CommonLayout>
        {page}
      </CommonLayout>
    )
  }