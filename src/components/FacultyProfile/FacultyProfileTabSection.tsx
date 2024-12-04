import React, { useState } from 'react';
import FacultyExperience from './FacultyExperience';
import FacultyPhilosophy from './FacultyPhilosophy';
import FacultyPersonalDetails from './FacultyPersonalDetails';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from 'next/router';

const FacultyProfileTabSection = ({ facultyData }: any) => {
    const [selectedTab, setSelectedTab] = useState('Personal Details');
    const tabs = ['Personal Details', 'Professional Experience', 'Teaching Philosophy'];
    const router = useRouter();
    const source = router.query.source;

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

    const handleBack = () => {
        if (source === 'faculties') {
            router.push('/faculties');
        } else {    
            router.push(`/diploma/${facultyData.department}?section=faculty`);
        }
    }

    return (
        <>
            <div className='flex gap-2 items-center font-montserrat text-[16px] font-semibold leading-[19.2px] text-[#290849] cursor-pointer hover:text-[#000]' onClick={handleBack}> <MdOutlineArrowBackIos />Back to faculty</div>
            <div className="bg-[#FFF4F8] rounded-[20px] mt-6 xl:mt-8 2xl:mt-12">
                <div className="border border-[#EAEAEA] flex font-montserrat text-lg font-bold leading-6 text-center bg-white rounded-tl-[20px] rounded-tr-[20px] cursor-pointer overflow-hidden">
                    {tabs.map((tab, index) => (
                        <div
                            key={tab}
                            className={`px-1 flex items-center justify-center w-[33.3%] py-2 sm:py-4 font-montserrat font-bold leading-[24px] text-[13px] md:text-[15px] xl:text-[17px] 2xl:text-[20px] ${selectedTab === tab ? 'bg-[#FFF4F8] text-[#E4087F]' : ''} ${index < tabs.length - 1 ? 'border-r border-[#EAEAEA]' : ''}`}
                            onClick={() => setSelectedTab(tab)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </div>
                    ))}
                </div>
                <div>{renderTabContent()}</div>
            </div>
        </>

    );
};

export default FacultyProfileTabSection;
