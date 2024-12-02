import React from 'react'

const FacultyExperience = ({data}:any) => {

    // const data = 
    // {
    //     "facultyExperience": [
    //         {
    //             "title": "Early Career:",
    //             "items": [
    //                 "Licensed to practice medicine (1989 - 1994)",
    //                 "Specialized training in gynecology at the University Women's Clinic in Münster",
    //                 "Recognized as a specialist and appointed Senior Physician"
    //             ]
    //         },
    //         {
    //             "title": "Academic Roles:",
    //             "items": [
    //                 "Appointed Professor of Obstetrics and Perinatology at Johann Wolfgang Goethe University, Frankfurt am Main (2002)",
    //                 "Head of Obstetrics and Prenatal Medicine, leading the Perinatal Center at Frankfurt University Hospital"
    //             ]
    //         },
    //         {
    //             "title": "Research Focus:",
    //             "items": [
    //                 "Molecular biochemistry and cell biology (stem cells)",
    //                 "Complications in obesity and hypertensive disorders during pregnancy (preeclampsia, HELLP syndrome)",
    //                 "Care and delivery of multiple pregnancies and breech births",
    //                 "Initiator of the FIGO & WATOG initiative \"Teach the Breech\""
    //             ]
    //         }
    //     ],
    //     "achievements": [
    //         {
    //             "title": "Current Roles:",
    //             "items": [
    //                 "President-Elect of FIGO",
    //                 "President of EBCOG (2023 - 2025)"
    //             ]
    //         },
    //         {
    //             "title": "Academic Contributions:",
    //             "items": [
    //                 "Significant research in hypertensive disorders during pregnancy and breech birth management",
    //                 "Leadership in perinatal care and education"
    //             ]
    //         }
    //     ]
    // }

    return (
        <div className="px-4 md:px-8">
            <div className="flex flex-col gap-8 border-b border-[#E5E7EB] py-8">
                {data?.facultyExperience?.map((section:any, index:any) => (
                    <div key={index}>
                        <div className="font-montserrat text-[16px] font-semibold leading-[20px] pb-1">
                            {section.title}
                        </div>
                        <ul className="text-[#555555] font-montserrat text-[16px] font-normal leading-[24px] list-disc pl-5 pt-1">
                            {section.items.map((item:any, idx:any) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="text-[#290849] font-montserrat text-[19px] font-bold leading-[28.5px] py-8">
                Achievements and Recognition
            </div>
            <div className="flex flex-col gap-8 pb-8">
                {data?.achievements?.map((section:any, index:any) => (
                    <div key={index}>
                        <div className="font-montserrat text-[16px] font-semibold leading-[20px] pb-1">
                            {section.title}
                        </div>
                        <ul className="text-[#555555] font-montserrat text-[16px] font-normal leading-[24px] list-disc pl-5 pt-1">
                            {section.items.map((item:any, idx:any) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacultyExperience