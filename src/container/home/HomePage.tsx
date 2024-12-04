import React, { useState, useEffect } from 'react';
import BannerSection from '@/components/HomeComponets/BannerSection';
import AboutSection from '@/components/HomeComponets/AboutSection';
import ObjectiveSection from '@/components/HomeComponets/ObjectiveSection';
import FacultySection from '@/components/HomeComponets/FacultySection';
import InternationalFaculty from '@/components/HomeComponets/InternationalFaculty';
import FaqSection from '@/components/HomeComponets/FaqSection';
import DotsNavigation from '../../common/uicomponents/DotNavigation';

const HomePage = () => {
  const sections = [
    { id: 'banner', title: 'Banner' },
    { id: 'ebcog', title: 'About' },
    { id: 'objective', title: 'Objective' },
    { id: 'diplomas', title: 'Faculty' },
    { id: 'international', title: 'International' },
    { id: 'faq', title: 'FAQ' },
    { id: 'footer', title: 'Footer' },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <>
      <div id="banner"><BannerSection /></div>
      <div id="ebcog"><AboutSection /></div>
      <div id="objective"><ObjectiveSection /></div>
      <div id="diplomas"><FacultySection /></div>
      <div id="international"><InternationalFaculty /></div>
      <div id="faq"><FaqSection /></div>
      <DotsNavigation sections={sections} activeSection={activeSection} />
    </>
  );
};

export default HomePage;
