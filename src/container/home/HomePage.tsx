import React, { useRef, useState, useEffect } from 'react';
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

  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { ref: bannerRef, title: 'Banner' },
    { ref: aboutRef, title: 'About' },
    { ref: objectiveRef, title: 'Objective' },
    { ref: facultyRef, title: 'Faculty' },
    { ref: internationalRef, title: 'International' },
    { ref: faqRef, title: 'FAQ' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null, 
      threshold: 0.5, 
    };

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any, index: number) => {
        if (entry.isIntersecting) {
          const activeIndex = sections.findIndex(
            (section) => section.ref.current === entry.target
          );
          setActiveSection(activeIndex);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      // Clean up observer
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [sections]);

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
      <DotsNavigation 
      sections={sections} 
      activeSection={activeSection} 
      />
    </>
  );
};

export default HomePage;
