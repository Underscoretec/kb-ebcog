import BreadCrumbs from '@/common/uicomponents/BreadCrumbs';
import React from 'react';

const Calendar = () => {

    const calendarData = [
        {
            month: 'FEBRUARY, 2025',
            activities: [
                // 'Commencement Of Academic Programs (2nd, 4th, 6th, 8th, 10th Sem)',
                // 'Enrollment of students',
                // 'Submission of internal-1 (all even semesters)',
                // 'Submission of internal-2 (all even semesters)',
                // 'Submission of internal-3 (all even semesters)',
                // 'Theory Examinations for even semester 2024-25',
            ],
        },
        {
            month: 'MAY, 2025',
            activities: [],
        },
        {
            month: 'AUGUST, 2025',
            activities: [],
        },
        {
            month: 'NOVEMBER, 2025',
            activities: [],
        },
    ];

    return (
        <>
            <div>
                <BreadCrumbs routes={[{ name: 'Academic Calendar', href: '/', current: true }]} />
                <div className="space-y-8 sm:px-6 lg:px- xl:p-16 3xl:p-24 p-4 xs:p-8">
                    {calendarData.map((item, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                            {/* Header */}
                            <div
                                className={`px-2 py-2 text-[#FFFFFF] font-montserrat font-semibold text-[21px] text-center ${index % 2 === 0 ? 'bg-[#E4087F]' : 'bg-[#290849]'}`}
                            >
                                {item.month}
                            </div>
                            {/* Table */}
                            <div className="overflow-x-auto">
                                {item.activities.length === 0 ?
                                    <div className='h-[12rem] bg-[#FFF4F8] flex justify-center flex-col items-center leading-[48.76px] text-[#290849]'>
                                        <div className='text-[27px] xs:text-[50px] font-RobotoCondensed font-normal leading-[50px] capitalize tracking-tighter'>COMING</div>
                                        <div className='text-[27px] xs:text-[41px] font-Yesteryear font-normal leading-[50px] capitalize tracking-tighter'>SOON...</div>
                                    </div>
                                    :
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-[#F9FAFB]">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3 pl-4 pr-3 text-left text-[12px] font-semibold font-montserrat text-[#6B7280] sm:pl-6"
                                                >
                                                    S.N
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3 text-left text-[12px] font-semibold font-montserrat text-[#6B7280]"
                                                >
                                                    ACTIVITIES
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {item.activities.map((activity, activityIndex) => (
                                                <tr key={activityIndex} className="even:bg-[#F9FAFB]">
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-[15px] leading-[20px] font-montserrat font-medium text-[#111827] sm:pl-6">
                                                        {activityIndex + 1}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-[15px] leading-[20px] font-montserrat font-medium text-[#111827]">
                                                        {activity}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Calendar;
