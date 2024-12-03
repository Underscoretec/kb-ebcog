import React, { useRef } from 'react';
import BannerSection from '@/components/HomeComponets/BannerSection';
import AboutSection from '@/components/HomeComponets/AboutSection';
import ObjectiveSection from '@/components/HomeComponets/ObjectiveSection';
import FacultySection from '@/components/HomeComponets/FacultySection';
import InternationalFaculty from '@/components/HomeComponets/InternationalFaculty';
import FaqSection from '@/components/HomeComponets/FaqSection';
import DotsNavigation from '../../common/uicomponents/DotNavigation';

const HomePage = () => {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const objectiveRef = useRef(null);
  const facultyRef = useRef(null);
  const internationalRef = useRef(null);
  const faqRef = useRef(null);

  const sections = [
    { ref: bannerRef, title: 'Banner' },
    { ref: aboutRef, title: 'About' },
    { ref: objectiveRef, title: 'Objective' },
    { ref: facultyRef, title: 'Faculty' },
    { ref: internationalRef, title: 'International' },
    { ref: faqRef, title: 'FAQ' },
  ];

  return (
    <>
      <div ref={bannerRef}>
        <BannerSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={objectiveRef}>
        <ObjectiveSection />
      </div>
      <div ref={facultyRef}>
        <FacultySection />
      </div>
      <div ref={internationalRef}>
        <InternationalFaculty />
      </div>
      <div ref={faqRef}>
        <FaqSection />
      </div>
      <DotsNavigation sections={sections} />
    </>
  );
};

export default HomePage;
