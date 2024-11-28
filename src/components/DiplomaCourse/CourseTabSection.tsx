import React, { useState } from 'react';
import CourseOverview from './CourseOverview';
import CourseFaculty from './CourseFaculty';
import CourseCurriculum from './CourseCurriculum';
import CourseFAQs from './CourseFAQs';

const CourseTabSection = ({courseData}:any) => {
  const [selectedTab, setSelectedTab] = useState('overview');

  const tabs = ['overview', 'curriculum', 'faculty', 'faqs'];  
  

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'overview':
        return <CourseOverview data={courseData?.overview} />;
      case 'curriculum':
        return <CourseCurriculum data={courseData?.curriculum} />;
      case 'faculty':
        return <CourseFaculty data={courseData?.faculty} />;
      case 'faqs':
        return <CourseFAQs data={courseData?.faqs} />;
      default:
        return <CourseOverview data={courseData?.overview} />;
    }
  };

  return (
    <div className="bg-[#FFF4F8] rounded-[20px] mt-6 xl:mt-8 2xl:mt-12">
      <div className="border border-[#EAEAEA] flex font-montserrat text-lg font-bold leading-6 text-center bg-white rounded-tl-[20px] rounded-tr-[20px] cursor-pointer overflow-hidden">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`w-[25%] py-1 xs:py-3 border-r border-[#EAEAEA] text-[12px] xs:text-[16px] lg:text-[18px] ${
              selectedTab === tab ? 'bg-[#FFF4F8] text-[#E4087F]' : ' '
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize tab names */}
          </div>
        ))}
      </div>
      <div className="p-4 md:p-6">{renderTabContent()}</div>
    </div>
  );
};

export default CourseTabSection;
