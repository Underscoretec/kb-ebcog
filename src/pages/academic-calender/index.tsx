import CommonLayout from '@/common/layouts/CommonLayout'
import AcademicCalendar from '@/container/academicCalendar/AcademicCalendar'
import React, { ReactElement } from 'react'

const AcademicCalendarPage = () => {
  return (
    <>
      <AcademicCalendar/>
    </>
  )
}

export default AcademicCalendarPage

AcademicCalendarPage.getLayout = function getLayout(page: ReactElement) {
  return (
      <CommonLayout>
          {page}
      </CommonLayout>
  )
}
