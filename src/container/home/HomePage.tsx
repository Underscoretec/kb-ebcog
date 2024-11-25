import FaqSection from '@/components/HomeComponets/FaqSection'
import BannerSection from '@/components/HomeComponets/BannerSection'
import FacultySection from '@/components/HomeComponets/FacultySection'
import InternationalFaculty from '@/components/HomeComponets/InternationalFaculty'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <BannerSection/>
      <FacultySection />
      <InternationalFaculty />
      <FaqSection/>
    </>
  )
}

export default HomePage
