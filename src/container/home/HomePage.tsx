import React from 'react';
import BannerSection from '@/components/HomeComponets/BannerSection';
import AboutSection from '@/components/HomeComponets/AboutSection';
import ObjectiveSection from '@/components/HomeComponets/ObjectiveSection';
import FacultySection from '@/components/HomeComponets/FacultySection';
import InternationalFaculty from '@/components/HomeComponets/InternationalFaculty';
import FaqSection from '@/components/HomeComponets/FaqSection';
import DotsNavigation from '../../common/uicomponents/DotNavigation'; // Import your dots component

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <ObjectiveSection />
      <FacultySection />
      <InternationalFaculty />
      <FaqSection />
      <DotsNavigation /> {/* Add it here */}
    </>
  );
};

export default HomePage;
