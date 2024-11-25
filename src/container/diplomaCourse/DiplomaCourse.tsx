import BreadCrumbs from '@/common/uicomponents/BreadCrumbs'
import Button from '@/common/uicomponents/Button';
import CourseTabSection from '@/components/DiplomaCourse/CourseTabSection';
import InternationalFacultyCard from '@/components/HomeComponets/InternationalFacultyCard';
import React from 'react'
import { MdAccessTimeFilled, MdFileCopy} from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";

const DiplomaCourse = () => {
    const routes = [
        { name: 'Diploma Courses', href: '#', current: false },
        { name: 'Project Nero', href: '#', current: true },
    ];
    return (
        <div className='min-h-[50rem]'>
            <BreadCrumbs routes={routes} />
            <div className='bg-[#290849] flex px-4 xs:px-8 xl:px-16 3xl:px-24 py-12 justify-between text-white'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-Montserrat text-4xl font-bold leading-[43.2px]'>Diploma in Maternal <br/> Medicine</h1>
                    <Button
                        label="Fees & Scholarships"
                        className="w-[60%] py-2 bg-[#E4087F] border border-[#E4087F] font-semibold text-white ${bgColor} rounded-md hover:bg-white hover:text-[#E4087F] focus:outline-none focus:ring-2 focus:ring-[#E4087F] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                    <div className='flex gap-8 font-Montserrat text-base font-medium leading-6 text-[#9D9D9D]'>
                        <div className='flex gap-1 xl:gap-2 items-center'><MdAccessTimeFilled className='text-[#EE7E22]' /> 1 week</div>
                        <div className='flex gap-1 xl:gap-2 items-center'><RiGraduationCapFill className='text-[#EE7E22]' /> 15,674 Learners</div>
                        <div className='flex gap-1 xl:gap-2 items-center'><MdFileCopy className='text-[#EE7E22]' /> 20 Lessons</div>
                    </div>
                </div>
                <div className='relative w-[22%]'>
                    <div className='absolute w-[100%] top-0 rounded-[20px] overflow-hidden'>
                        <InternationalFacultyCard data={{course:'Maternal Medicine By Prof. Frank Louwen', facultyName:'Prof. Frank Louwen (Lead)', courseDuration:'1 Week', totalLearners:"15,674", facultyImage:'/i8.png'}}/>
                    </div>
                </div>
            </div>
            <div className='pl-4 xs:pl-8 xl:pl-16 3xl:pl-24 py-12 w-[70%]'>
                <CourseTabSection />
            </div>
        </div>
    )
}

export default DiplomaCourse