import FaqSection from '@/components/HomeComponets/FaqSection'
import BannerSection from '@/components/HomeComponets/BannerSection'
import FacultySection from '@/components/HomeComponets/FacultySection'
import InternationalFaculty from '@/components/HomeComponets/InternationalFaculty'
import React from 'react'
import AboutSection from '@/components/HomeComponets/AboutSection'
import ObjectiveSection from '@/components/HomeComponets/ObjectiveSection'

const HomePage = () => {
  return (
    <>
      <BannerSection/>
      <AboutSection/>
      <ObjectiveSection/>
      <FacultySection />
      <InternationalFaculty />
      <FaqSection/>
    </>
  )
}

export default HomePage
