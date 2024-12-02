import React, { useState } from 'react';
import FacultyExperience from './FacultyExperience';
import FacultyPhilosophy from './FacultyPhilosophy';
import FacultyPersonalDetails from './FacultyPersonalDetails';

const FacultyProfileTabSection = ({ facultyData }: any) => {
    const [selectedTab, setSelectedTab] = useState('Personal Details');

    const tabs = ['Personal Details', 'Professional Experience', 'Teaching Philosophy'];

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'Personal Details':
                return <FacultyPersonalDetails data={facultyData?.PersonalDetails} />;
            case 'Professional Experience':
                return <FacultyExperience data={facultyData?.experience} />;
            case 'Teaching Philosophy':
                return <FacultyPhilosophy data={facultyData?.philosophy} />;
            default:
                return <FacultyPersonalDetails data={facultyData?.PersonalDetails} />;
        }
    };

    return (
        <div className="bg-[#FFF4F8] rounded-[20px] mt-6 xl:mt-8 2xl:mt-12">
            <div className="border border-[#EAEAEA] flex font-montserrat text-lg font-bold leading-6 text-center bg-white rounded-tl-[20px] rounded-tr-[20px] cursor-pointer overflow-hidden">
                {tabs.map((tab, index) => (
                    <div
                        key={tab}
                        className={`w-[33.3%] py-2 xs:py-4 font-montserrat font-bold leading-[24px] text-[12px] xs:text-[17px] lg:text-[20px] ${selectedTab === tab ? 'bg-[#FFF4F8] text-[#E4087F]' : ''} ${index < tabs.length - 1 ? 'border-r border-[#EAEAEA]' : ''}`}
                        onClick={() => setSelectedTab(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)} {/* Capitalize tab names */}
                    </div>
                ))}
            </div>
            <div>{renderTabContent()}</div>
        </div>
    );
};

export default FacultyProfileTabSection;
