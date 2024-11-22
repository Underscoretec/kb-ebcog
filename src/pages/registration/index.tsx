import CommonLayout from '@/common/layouts/CommonLayout'
import RegistrationCard from '@/components/RegistrationCard/RegistrationCard'
import React, { ReactElement } from 'react'

const Registration = () => {
  return (
    <><RegistrationCard /></>
  )
}

export default Registration

Registration.getLayout = function getLayout(page:ReactElement) {
    return (
      <CommonLayout>
        {page}
      </CommonLayout>
    )
  }