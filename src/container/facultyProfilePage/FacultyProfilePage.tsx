import BreadCrumbs from '@/common/uicomponents/BreadCrumbs';
import FacultyProfileTabSection from '@/components/FacultyProfile/FacultyProfileTabSection';
import InternationalFacultyCard from '@/components/HomeComponets/InternationalFacultyCard';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const FacultyProfile = () => {
    const router = useRouter();
    const { id } = router.query;
    const [facultyData, setFacultyData] = useState<any | null>(null);

    const data = [
        {
            "id": "p-0009MM",
            "name": 'Professor Frank Louwen',
            "about": "Obstetrics and Perinatology, Maternal-Fetal Medicine, Hypertensive Disorders in Pregnancy, Breech Birth Management.",
            "cardData": {
                "facultyName": 'Prof. Frank Louwen (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "15,674",
                "facultyImage": '/if9.png'
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Advancing women's health through innovative research, comprehensive education, and compassionate clinical practice."
                },
                {
                    "title": "Message to Students",
                    "content": "Commit to lifelong learning and innovation in obstetrics and gynecology to enhance maternal and fetal health outcomes globally."
                }
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Early Career:",
                        "items": [
                            "Licensed to practice medicine (1989 - 1994)",
                            "Specialized training in gynecology at the University Women's Clinic in Münster",
                            "Recognized as a specialist and appointed Senior Physician"
                        ]
                    },
                    {
                        "title": "Academic Roles:",
                        "items": [
                            "Appointed Professor of Obstetrics and Perinatology at Johann Wolfgang Goethe University, Frankfurt am Main (2002)",
                            "Head of Obstetrics and Prenatal Medicine, leading the Perinatal Center at Frankfurt University Hospital"
                        ]
                    },
                    {
                        "title": "Research Focus:",
                        "items": [
                            "Molecular biochemistry and cell biology (stem cells)",
                            "Complications in obesity and hypertensive disorders during pregnancy (preeclampsia, HELLP syndrome)",
                            "Care and delivery of multiple pregnancies and breech births",
                            "Initiator of the FIGO & WATOG initiative \"Teach the Breech\""
                        ]
                    }
                ],
                "achievements": [
                    {
                        "title": "Current Roles:",
                        "items": [
                            "President-Elect of FIGO",
                            "President of EBCOG (2023 - 2025)"
                        ]
                    },
                    {
                        "title": "Academic Contributions:",
                        "items": [
                            "Significant research in hypertensive disorders during pregnancy and breech birth management",
                            "Leadership in perinatal care and education"
                        ]
                    }
                ]
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "logo": "/p-logo1.png",
                            "title": "President-Elect",
                            "description": "International Federation of Gynecology and Obstetrics (FIGO)",
                        },
                        {
                            "logo": "/logo.png",
                            "title": "President",
                            "description":
                                "European Board and College of Obstetrics and Gynecology (EBCOG)",
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "logo": "/logo3.png",
                            "title": "Medical Degree",
                            "description": "University of Münster, Germany",
                        },
                        {
                            "logo": "/logo4.png",
                            "title": "Doctorate (1993)",
                            "description": "Thesis on the definition criteria of HELLP syndrome",
                        },
                    ],
                },
                {
                    "title": "Why Train Under Professor Frank Louwen?",
                    "items": [
                        {
                            "title": "Leadership Experience",
                            "description": [
                                "Extensive involvement in international and national professional societies",
                                "12 years on the board of the German Society of Obstetrics and Gynecology (DGGG)",
                            ],
                        },
                        {
                            "title": "Advocacy and Service",
                            "description": [
                                "Chairman of the Board, German Foundation for Women's Health",
                                "Chairman of the Board, Pro Familia Hessen",
                            ],
                        },
                        {
                            "title": "Innovative Initiatives",
                            "description": ["Development of programs like 'Teach the Breech' to improve clinical practices"],
                        },
                    ],
                },
            ]
        },
        {
            "id": "p-0005RPI",
            "name": 'Prof. Basil C. Tarlatzis (Lead)',
            "about": "Professor Emeritus of Obstetrics-Gynecology and Human Reproduction",
            "cardData": {
                "facultyName": 'Prof. Basil C. Tarlatzis (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "15,674",
                "facultyImage": '/if5.png'
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Advancing women's health through innovative research, comprehensive education, and compassionate clinical practice."
                },
                {
                    "title": "Message to Students",
                    "content": "Commit to lifelong learning and innovation in obstetrics and gynecology to enhance maternal and fetal health outcomes globally."
                }
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Early Career:",
                        "items": [
                            "Licensed to practice medicine (1989 - 1994)",
                            "Specialized training in gynecology at the University Women's Clinic in Münster",
                            "Recognized as a specialist and appointed Senior Physician"
                        ]
                    },
                    {
                        "title": "Academic Roles:",
                        "items": [
                            "Appointed Professor of Obstetrics and Perinatology at Johann Wolfgang Goethe University, Frankfurt am Main (2002)",
                            "Head of Obstetrics and Prenatal Medicine, leading the Perinatal Center at Frankfurt University Hospital"
                        ]
                    },
                    {
                        "title": "Research Focus:",
                        "items": [
                            "Molecular biochemistry and cell biology (stem cells)",
                            "Complications in obesity and hypertensive disorders during pregnancy (preeclampsia, HELLP syndrome)",
                            "Care and delivery of multiple pregnancies and breech births",
                            "Initiator of the FIGO & WATOG initiative \"Teach the Breech\""
                        ]
                    }
                ],
                "achievements": [
                    {
                        "title": "Current Roles:",
                        "items": [
                            "President-Elect of FIGO",
                            "President of EBCOG (2023 - 2025)"
                        ]
                    },
                    {
                        "title": "Academic Contributions:",
                        "items": [
                            "Significant research in hypertensive disorders during pregnancy and breech birth management",
                            "Leadership in perinatal care and education"
                        ]
                    }
                ]
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "logo": "/p-logo1.png",
                            "title": "President-Elect",
                            "description": "International Federation of Gynecology and Obstetrics (FIGO)",
                        },
                        {
                            "logo": "/logo.png",
                            "title": "President",
                            "description":
                                "European Board and College of Obstetrics and Gynecology (EBCOG)",
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "logo": "/logo3.png",
                            "title": "Medical Degree",
                            "description": "University of Münster, Germany",
                        },
                        {
                            "logo": "/logo4.png",
                            "title": "Doctorate (1993)",
                            "description": "Thesis on the definition criteria of HELLP syndrome",
                        },
                    ],
                },
                {
                    "title": "Why Train Under Professor Frank Louwen?",
                    "items": [
                        {
                            "title": "Leadership Experience",
                            "description": [
                                "Extensive involvement in international and national professional societies",
                                "12 years on the board of the German Society of Obstetrics and Gynecology (DGGG)",
                            ],
                        },
                        {
                            "title": "Advocacy and Service",
                            "description": [
                                "Chairman of the Board, German Foundation for Women's Health",
                                "Chairman of the Board, Pro Familia Hessen",
                            ],
                        },
                        {
                            "title": "Innovative Initiatives",
                            "description": ["Development of programs like 'Teach the Breech' to improve clinical practices"],
                        },
                    ],
                },
            ]
        }
    ];

    const handleEnroll = () => {
        router.push('/registration');
    };

    useEffect(() => {
        if (id) {
            const details = data?.find(item => item.id === id);
            setFacultyData(details || null);
        }
    }, [id]);

    if (!facultyData) return <div className='min-h-[50rem] flex justify-center items-center'><CircularProgress style={{ color: '#E4087F' }} /></div>

    return (
        <div className="min-h-[60rem]">
            <BreadCrumbs routes={[{ name: "name", href: `/${id}`, current: true }]} />
            <div className="bg-[#290849] flex gap-8 xs:gap-0 flex-col-reverse xs:flex-row px-4 xs:px-8 xl:px-16 3xl:px-24 py-8 lg:py-12 justify-between text-white">
                <div className="flex flex-col gap-4 w-[100%] xs:w-[47%] md:w-[60%] lg:w-auto">
                    <h1 className="font-montserrat text-[28px] font-bold leading-[33.6px] md:w-[90%] xl:w-[84%]">{facultyData?.name}</h1>
                    <div className="text-[#D1D5DB] font-montserrat text-[16px] font-medium leading-[24px] w-[80%]">{facultyData?.about}</div>
                </div>
                <div className="relative w-[100%] xs:w-[51%] sm:w-[46%] md:w-[32%] lg:w-[30%] xl:w-[26%] 2xl:w-[24%] 3xl:w-[22%]">
                    <div className="md:absolute w-[100%] top-0 rounded-[20px] overflow-hidden">
                        <InternationalFacultyCard data={facultyData?.cardData} btn_label="Enroll" handleClick={handleEnroll} />
                    </div>
                </div>
            </div>
            <div className="px-4 xs:px-8 xs:pr-8 md:pr-0 xl:pl-16 3xl:pl-24 py-4 xs:py-8 sm:py-12 w-[100%] md:w-[64%] lg:w-[68%] xl:w-[70%]">
                <FacultyProfileTabSection facultyData={facultyData} />
            </div>
        </div>
    );
};

export default FacultyProfile;
