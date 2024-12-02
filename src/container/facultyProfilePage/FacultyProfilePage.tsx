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
            "id": "p-0010GE",
            "name": 'Professor Hélder Ferreira',
            "about": "Advanced Laparoscopic Surgery, Robotic Gynecological Surgery, Management of Deep Endometriosis, Gynecologic Oncology,Treatment of Genital Prolapse, Correction of Uterovaginal Malformations",
            "cardData": {
                "facultyName": 'Dr. Helder Ferreira (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "15,674",
                "facultyImage": '/if10.png'
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Advancing gynecological surgery through innovation, education, and the dissemination of minimally invasive techniques to improve patient outcomes."
                },
                {
                    "title": "Message to Students",
                    "content": "Embrace the evolution of gynecological surgery by mastering minimally invasive techniques and committing to continuous learning to enhance patient care and surgical outcomes."
                }
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Leadership Roles:",
                        "items": [
                            "Full Executive Board Member, European Society for Gynaecological Endoscopy (ESGE)",
                            "Advisory Board Member, European Endometriosis League (EEL)",
                            "Board Member, Portuguese Society of Gynecology",
                            "President, Portuguese Society of Minimally Invasive SurgerySpecialized training in gynecology at the University Women's Clinic in Münster",
                        ]
                    },
                    {
                        "title": "Clinical Practice:",
                        "items": [
                            "Specializes in advanced laparoscopic and robotic surgeries for conditions such as endometriosis, gynecologic cancers, genital prolapse, and uterovaginal malformations",
                        ]
                    },
                    {
                        "title": "Academic Contributions:",
                        "items": [
                            "Authored numerous original articles, book chapters, and surgical video publications",
                            "Regular speaker at national, regional, and international scientific meetings and congresses",
                            "Conducted live interactive surgeries and tutored training courses globally",

                        ]
                    }
                ],
                "achievements": [
                    {
                        "title": "Leadership Positions:",
                        "items": [
                            "Full Executive Board Member of ESGE",
                            "Advisory Board Member of EEL"
                        ]
                    },
                    {
                        "title": "Academic Contributions:",
                        "items": [
                            "Published extensively in peer-reviewed journals and contributed to several book chapters",
                            "Presented at numerous international conferences and conducted live surgical demonstrations"
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
                            "title": "Head",
                            "description": "Minimally Invasive Gynecologic Surgery Unit, Centro Hospitalar Universitário, Porto, Portugal",
                        },
                        {
                            "logo": "/logo.png",
                            "title": "Professor of Gynecolog",
                            "description": "University of Porto",
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "logo": "/logo3.png",
                            "title": "Fellowships in Minimally Invasive Gynecological Surgery:",
                            "description": "Under Professor Arnaud Wattiez, France (2009), Under Professor Joerg Keckstein, Austria (2011)",
                        },
                    ],
                },
                {
                    "title": "Why Train Under Professor Frank Louwen?",
                    "items": [
                        {
                            "title": "Expertise:",
                            "description": [
                                "Learn from a leader in minimally invasive gynecological surgery with extensive experience in advanced laparoscopic and robotic procedures.",
                            ],
                        },
                        {
                            "title": "Innovation:",
                            "description": [
                                "Gain insights into the latest surgical techniques and technologies in the field.",
                                "Chairman of the Board, Pro Familia Hessen",
                            ],
                        },
                        {
                            "title": "Global Perspective:",
                            "description": ["Benefit from his active participation in international societies and contributions to global gynecological surgery practices."],
                        },
                    ],
                },
            ]
        },
        {
            "id": "p-0004FMU",
            "name": 'Professor Asma Khalil',
            "about": "Twin and Multiple Pregnancies, Fetal Growth Restriction, Hypertensive Disorders in Pregnancy",
            "cardData": {
                "facultyName": 'Dr. Asma Khalil (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "15,674",
                "facultyImage": '/if4.png'
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Inspiring future practitioners by merging clinical expertise with groundbreaking research and innovation in maternal and fetal medicine."
                },
                {
                    "title": "Message to Students",
                    "content": "The journey of improving maternal and fetal outcomes begins with a commitment to knowledge, precision, and compassionate care. Let’s innovate and create a brighter future for families worldwide."
                }
            ],
            "experience": {
                "facultyExperience": [
                    {
                        // "title": "Early Career:",
                        "items": [
                            "20+ years in Obstetrics and Fetal Medicine",
                            "Established the UK’s first national registry for complicated multiple pregnancies",
                            "Expertise in prenatal care, advanced ultrasound examinations, and fetal therapy procedures, including laser treatment for twin-twin transfusion syndrome"
                        ]
                    }
                ],
                "achievements": [
                    {
                        "items": [
                            "Over 15 national and international awards, including FIGO’s Recognising Female Obstetricians and Gynaecologists Award",
                            "Vice President of The Royal College of Obstetricians and Gynaecologists (RCOG)",
                            "Obstetric Lead for the National Maternity and Perinatal Audit",
                            "Trustee and Treasurer of the International Society of Ultrasound in Obstetrics and Gynecology (ISUOG)",
                            "Editor-in-Chief of Best Practice and Research in Clinical Obstetrics and Gynaecology",
                            "Featured in Channel 4’s series Baby Surgeons: Delivering Miracles",
                        ]
                    },
                ]
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "logo": "/p-logo1.png",
                            "title": "Consultant Obstetrician and Maternal-Fetal Medicine Specialist",
                            "description": "Maternal-Fetal Medicine Specialist",
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "logo": "/logo3.png",
                            "title": "Consultancy and Leadership:",
                            "description": "Consultant at St George’s Hospital, London, Leads the Twin and Multiple Pregnancy Service",
                        },
                        {
                            "logo": "/logo4.png",
                            "title": "Research and Education:",
                            "description": "To Published over 450 peer-reviewed papers, books, and chapters, Focus on twin pregnancies, fetal growth restriction, and pregnancy-related hypertensive disorders",
                        },
                    ],
                },
                {
                    "title": "Why Train Under Professor Asma Khalil?",
                    "items": [
                        {
                            "description": [
                                "Access cutting-edge research and advancements in maternal-fetal medicine",
                                "Learn from a globally recognized expert in managing twin and complicated pregnancies",
                                "Develop precision skills in prenatal screening, diagnosis, and fetal therapy",
                            ],
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
                    "content": "Integrating comprehensive clinical training with innovative research to advance reproductive medicine and improve patient outcomes."
                },
                {
                    "title": "Message to Students",
                    "content": "Advancing reproductive medicine requires a commitment to excellence in both clinical practice and research. Together, we can make significant strides in improving patient care and outcomes."
                }
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Academic Roles:",
                        "items": [
                            "Consultant, Lecturer, Assistant, Associate, and Full Professor in Obstetrics-Gynecology and Human Reproduction at AUTH (1986 - 2008)",
                            "Chairman, 1st Department of Obstetrics and Gynecology, Medical School, AUTH (2008 - 2017)",
                            "Dean and Vice Dean, Medical School, AUTH (2007 - 2013)",
                            "Vice President of the Council, AUTH (2013 - 2016)",
                        ]
                    },
                    {
                        "title": "Clinical Roles:",
                        "items": [
                            "Head of IVF Units at Geniki Kliniki, Thessaloniki (1985 - 2005); Hippokrateion General Hospital, Thessaloniki (1986 - 2004); Papageorgiou General Hospital, Thessaloniki (2005 - 2017)",
                            "Chairman of the Scientific Board, FIVI Fertility & IVF Center, European Interbalkan Medical Center (2020 - present)"
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "President of the European Board and College of Obstetrics and Gynaecology (EBCOG)",
                            "Past Chairman of the European Society of Human Reproduction and Embryology (ESHRE)",
                            "Past President of the International Federation of Fertility Societies (IFFS)",
                            "Recipient of numerous awards, including the Arnaldo Bruno International Award in Gynecology from the Accademia Nazionale dei Lincei, Italy, and the ASRM Service Award from the American Society for Reproductive Medicine",
                            "Honorary Member of multiple international societies and Doctor Honoris Causa from Ovidius University, Romania",
                            "Authored over 350 publications in international peer-reviewed journals and contributed chapters to numerous books"
                        ]
                    },

                ]
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "logo": "/p-logo1.png",
                            "title": "Professor Emeritus of Obstetrics-Gynecology and Human Reproduction",
                            "description": "Obstetrics-Gynecology and Human Reproduction",
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "logo": "/logo3.png",
                            "title": "Medical Degree (1974)",
                            "description": "National and Kapodistrian University of Athens, Greece",
                        },
                        {
                            "logo": "/logo4.png",
                            "title": "Residency  (1977 - 1981)",
                            "description": "Obstetrics and Gynecology, 2nd Department of Obstetrics and Gynecology, Aristotle University of Thessaloniki (AUTH), Greece",
                        },
                        {
                            "logo": "/logo3.png",
                            "title": "Doctorate Degree (PhD) (1982)",
                            "description": "Aristotle University of Thessaloniki, Greece",
                        },
                        {
                            "logo": "/logo4.png",
                            "title": "Postdoctoral Training (1982 - 1985)",
                            "description": "Reproductive Immunology, Groningen University, The Netherlands (1982); Endocrinology/Infertility and Reproductive Medicine, Yale University School of Medicine, USA",
                        },
                    ],
                },
                {
                    "title": "Why Train Under Professor Basil C. Tarlatzis?",
                    "items": [
                        {
                            "description": [
                                "Benefit from his extensive experience in reproductive medicine and assisted reproduction technologies",
                                "Engage in cutting-edge research under his guidance, contributing to advancements in the field",
                                "Learn from a leader who has shaped reproductive health policies and practices both nationally and internationally",
                            ],
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
