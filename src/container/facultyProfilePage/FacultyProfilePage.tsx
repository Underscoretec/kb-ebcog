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
            "name": 'Prof. Frank Louwen',
            "about": "Obstetrics and Perinatology, Maternal-Fetal Medicine, Hypertensive Disorders in Pregnancy, Breech Birth Management.",
            "department":'maternal-medical',
            "cardData": {
                "facultyName": 'Prof. Frank Louwen (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "70",
                "facultyImage": '/if9.png'
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "President-Elect",
                            "description": ["International Federation of Gynecology and Obstetrics (FIGO)"],
                        },
                        {
                            "title": "President",
                            "description": ["European Board and College of Obstetrics and Gynecology (EBCOG)"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree",
                            "description": ["University of Münster, Germany"],
                        },
                        {
                            "title": "Doctorate (1993)",
                            "description": ["Thesis on the definition criteria of HELLP syndrome"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Prof. Frank Louwen?",
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
        },
        {
            "id": "p-0010GE",
            "name": 'Dr. Helder Ferreira',
            "about": "Advanced Laparoscopic Surgery, Robotic Gynecological Surgery, Management of Deep Endometriosis, Gynecologic Oncology,Treatment of Genital Prolapse, Correction of Uterovaginal Malformations",
            "department":'gynaecology-endoscopy',
            "cardData": {
                "facultyName": 'Dr. Helder Ferreira (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "70",
                "facultyImage": '/if10.png'
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Head",
                            "description": ["Minimally Invasive Gynecologic Surgery Unit, Centro Hospitalar Universitário, Porto, Portugal"],
                        },
                        {
                            "title": "Professor of Gynecolog",
                            "description": ["University of Porto"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Fellowships in Minimally Invasive Gynecological Surgery:",
                            "description": ["Under Professor Arnaud Wattiez, France (2009)", "Under Professor Joerg Keckstein, Austria (2011)"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Dr. Helder Ferreira?",
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
                            ],
                        },
                        {
                            "title": "Global Perspective:",
                            "description": ["Benefit from his active participation in international societies and contributions to global gynecological surgery practices."],
                        },
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Leadership Roles:",
                        "items": [
                            "Full Executive Board Member, European Society for Gynaecological Endoscopy (ESGE)",
                            "Advisory Board Member, European Endometriosis League (EEL)",
                            "Board Member, Portuguese Society of Gynecology",
                            "President, Portuguese Society of Minimally Invasive Surgery",
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
                            "Advisory Board Member of EEL",
                            "President of the Portuguese Society of Minimally Invasive Surgery"
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
        },
        {
            "id": "p-0004FMU",
            "name": 'Prof. Asma Khalil',
            "about": "Twin and Multiple Pregnancies, Fetal Growth Restriction, Hypertensive Disorders in Pregnancy",
            "department":'fetal-medicine-and-ultrasound',
            "cardData": {
                "facultyName": 'Prof. Asma Khalil (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "70",
                "facultyImage": '/if4.png'
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Consultant Obstetrician and Maternal-Fetal Medicine Specialist",
                            "description": ["Maternal-Fetal Medicine Specialist"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Consultancy and Leadership:",
                            "description": ["Consultant at St George’s Hospital, London", "Leads the Twin and Multiple Pregnancy Service"],
                        },
                        {
                            "title": "Research and Education:",
                            "description": ["Published over 450 peer-reviewed papers, books, and chapters", "Focus on twin pregnancies, fetal growth restriction, and pregnancy-related hypertensive disorders"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Prof. Asma Khalil",
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
            ],
            "experience": {
                "facultyExperience": [
                    {
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
        },
        {
            "id": "p-0005RPI",
            "name": 'Prof. Basil C. Tarlatzis',
            "about": "Professor Emeritus of Obstetrics-Gynecology and Human Reproduction",
            "department":'reproductive-endocrinology',
            "cardData": {
                "facultyName": 'Prof. Basil C. Tarlatzis (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "70",
                "facultyImage": '/if5.png'
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Professor",
                            "description": ["Emeritus of Obstetrics-Gynecology and Human Reproduction"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree (1974)",
                            "description": ["National and Kapodistrian University of Athens, Greece"],
                        },
                        {
                            "title": "Residency (1977 - 1981)",
                            "description": ["Obstetrics and Gynecology, 2nd Department of Obstetrics and Gynecology, Aristotle University of Thessaloniki (AUTH), Greece"],
                        },
                        {
                            "title": "Doctorate Degree (PhD) (1982)",
                            "description": ["Aristotle University of Thessaloniki, Greece"],
                        },
                        {
                            "title": "Postdoctoral Training (1982 - 1985)",
                            "description": ["Reproductive Immunology, Groningen University, The Netherlands (1982); Endocrinology/Infertility and Reproductive Medicine, Yale University School of Medicine, USA"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Prof. Basil C. Tarlatzis?",
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
        },
        {
            "id": "p-0001GE",
            "name": 'Dr. Alian Abdallah',
            "about": "Minimally Invasive/Laparoscopic Surgeries",
            "department":'gynaecology-endoscopy',
            "cardData": {
                "facultyName": 'Dr. Alian Abdallah',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if1.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            // "title": "",
                            "description": ["Obstetrician and Gynecologist"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree",
                            "description": ["American University of Beirut Medical Center, Lebanon"],
                        },
                        {
                            "title": "Fellowship",
                            "description": ["Minimally Invasive Gynecological Surgery at CHR de Liège, Belgium"],
                        },
                        {
                            "title": "Diploma",
                            "description": [" Minimally Invasive Gynecological Surgery, European Society of Gynecological Endoscopy"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Dr. Alian Abdallah?",
                    "items": [
                        {
                            "description": [
                                "Learn advanced minimally invasive surgical techniques that prioritize patient outcomes, including aesthetic results, shorter recovery times, and minimal scarring",
                                "Gain insight into managing complex gynecological and obstetric cases with a compassionate, detail-oriented approach",
                                "Access real-world experience in both surgical and obstetric care from a highly skilled and empathetic practitioner",
                            ],
                        },
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Extensive expertise in managing complex gynecological conditions, including ovarian cysts, uterine fibroids, and endometriosis",
                            "Specialist in advanced laparoscopic and hysteroscopic surgeries",
                            "Performed numerous fertility-enhancing procedures, pelvic floor surgeries, and treatments for urinary incontinence",
                            "Successfully handled hundreds of normal and high-risk pregnancies, including vaginal and caesarean deliveries",
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "Diploma in Minimally Invasive Gynecological Surgery from a leading European society",
                            "Recognized for his gentle and patient-focused approach to healthcare, earning trust and appreciation from patients globally"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Empowering future practitioners with evidence-based knowledge, practical expertise, and a patient-centric approach to care."
                },
                {
                    "title": "Message to Students",
                    "content": "Every patient is unique, and our care must reflect that individuality. By combining advanced techniques with empathy and attention to detail, we can redefine what it means to deliver exceptional healthcare."
                }
            ],
        },
        {
            "id": "p-0002MM",
            "name": 'Dr. Amala Nazareth',
            "about": "High-Risk Obstetrics, Operative Gynecology, Infertility Treatments, and Minimally Invasive Surgeries",
            "department":'maternal-medical',
            "cardData": {
                "facultyName": 'Dr. Amala Nazareth',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if2.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "description": ["Senior Consultant in Obstetrics and Gynecology"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree (1974)",
                            "description": ["Lokamanya Tilak Municipal Medical College, Sion Mumbai (Graduated with distinction)"],
                        },
                        {
                            "title": "D.G.O",
                            "description": ["College of Physicians and Surgeons, Mumbai"],
                        },
                        {
                            "title": "M.D",
                            "description": ["Sir J.J. Group of Hospitals and Grant Medical College"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Dr. Amala Nazareth?",
                    "items": [
                        {
                            "description": [
                                "Learn from a highly experienced practitioner with advanced training from leading global institutions",
                                "Gain in-depth knowledge of managing high-risk obstetric cases and modern gynecological surgeries",
                                "Benefit from her active research experience and involvement in national and international forums, fostering a global perspective in healthcare"
                            ],
                        },
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "15+ years of experience in Obstetrics and Gynecology",
                            "Specialist in managing high-risk pregnancies, hormonal disorders, menopause, and infertility treatments",
                            "Expert in operative gynecology, including hysteroscopic and laparoscopic surgeries",
                            "Active participation in global workshops and conferences through the Emirates ObGYN and Fertility Forum (EOGFF)"
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "Recognized for her contributions to women’s healthcare through numerous presentations and publications",
                            "Organizer and participant in international workshops and conferences aimed at advancing Obstetrics and Gynecology"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Educating future healthcare providers to combine clinical expertise with compassionate, patient-centered care to achieve excellence in women's health."
                },
                {
                    "title": "Message to Students",
                    "content": "Empowering women begins with understanding their unique healthcare needs. Together, we will build a future where knowledge, skill, and compassion transform lives."
                }
            ],
        },
        {
            "id": "p-0003REI",
            "name": "Dr. Anagha Karkhanis",
            "about": 'Reproductive Medicine, Infertility Management, Minimal Access Surgery, and Advanced Gynecological Endoscopy',
            "department":'reproductive-endocrinology',
            "cardData": {
                "facultyName": 'Dr. Anagha Karkhanis',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if3.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            // "title": "",
                            "description": ["Gynecologist and Reproductive Medicine Specialist"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree",
                            "description": ["MBBS"],
                        },
                        {
                            "title": "Postgraduate Qualification",
                            "description": ["MRCP in Obstetrics and Gynecology"],
                        },
                        {
                            "title": "Diploma in Reproductive Medicine",
                            "description": [" Germany"],
                        },
                        {
                            "title": "Fellowships",
                            "description": ["Endoscopy & Minimal Access Surgery, ICOG", "Advanced Infertility Management, Mumbai"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Dr. Anagha Karkhanis?",
                    "items": [
                        {
                            "description": [
                                "Gain in-depth knowledge of reproductive medicine and advanced fertility techniques",
                                "Learn from a seasoned trainer for MRCOG courses and a recognized authority in gynecological endoscopy",
                                "Exposure to the latest developments in robotic surgery and minimal access techniques"
                            ],
                        },
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "19 years of experience, including 12 years as a specialist",
                            "Expert in managing infertility, reproductive medicine, and advanced gynecological surgeries",
                            "Trainer and mentor for emerging specialists in reproductive health and gynecology",
                        ]
                    },
                    {
                        "title": "Professional Training and Accreditations:",
                        "items": [
                            "Accredited in Ultrasound Scanning, Mumbai",
                            "ICH-GCP Course (Royal Holloway University of London, UK)",
                            "GCP Trainer in India",
                            "MRCOG Part 1 Trainer, RCOG-ICOG",
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "Winner of the ‘SUILI Rudra Prize’ for the best paper on Endoscopy at AICOG 2013",
                            "Multiple scholarships for academic excellence during her training",
                            "Invited speaker at national conferences on Robotic Surgery and Advanced Fertility Techniques"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Combining cutting-edge techniques with an evidence-based approach to empower students and ensure excellence in reproductive healthcare."
                },
                {
                    "title": "Message to Students",
                    "content": "Innovation and precision are the cornerstones of modern reproductive healthcare. Together, we will explore the latest advancements and shape the future of women’s health."
                }
            ],
        },
        {
            "id": "p-0006MM",
            "name": "Prof. Chittaranjan N. Purandare",
            "about": "Maternal Health, Women's Health, Obstetrics, Gynecology",
            "department":'maternal-medical',
            "cardData": {
                "facultyName": 'Prof. Chittaranjan N. Purandare',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if6.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            // "title": "",
                            "description": ["Senior Obstetrician and Gynecologist"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "MBBS(1974)",
                            "description": ["T.N. Medical College and Nair Hospital"],
                        },
                        {
                            "title": "MD in Obstetrics and Gynecology(1978)",
                            "description": ["T.N. Medical College and Nair Hospital"],
                        },
                        {
                            "title": "Masters in the Art of Obstetrics (MAO)",
                            "description": [" National university of Ireland"],
                        },
                        {
                            "title": "Fellowships",
                            "description": ["RCOG,ACOG, Germany"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Prof. Chittaranjan N. Purandare?",
                    "items": [
                        {
                            "description": [
                                "Learn from a leader with extensive experience in maternal health and women's health",
                                "Gain insights from his involvement in national and international health programs",
                                "Benefit from his commitment to improving healthcare through education and social service projects"
                            ],
                        },
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Over 40 years of experience in obstetrics and gynecology",
                            "Honorary Professor at Grant Medical College and J.J. Hospital, Mumbai",
                            "President of the Mumbai Obstetrics and Gynecological Society, 2004",
                            "President of the Federation of Obstetric and Gynecological Societies of India (FOGSI), 2009-2010",
                            "President of the International Federation of Gynecology and Obstetrics (FIGO), 2015-2018"
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "Dr. B. C. Roy Award for medico-social work",
                            "Rashtriya Gaurav Award",
                            "Lifetime Achievement Awards from FOGSI and the Indian Fertility Society",
                            "Laxmibai Adik Award",
                            "Ganatra Award",
                            "B. N. Purandare Excellence Award"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Dedicated to advancing maternal and women's health through education, research, and compassionate clinical practice."
                },
                {
                    "title": "Message to Students",
                    "content": "Advancing women's health requires dedication, compassion, and continuous learning. Together, we can make a significant impact on maternal and women's health."
                }
            ],
        },
        {
            "id": "p-0007MM",
            "name": "Prof. Diogo Ayres de Campos",
            "about": "Intrapartum Fetal Monitoring, Obstetric Simulation",
            "department":'maternal-medical',
            "cardData": {
                "facultyName": 'Prof. Diogo Ayres de Campos',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if7.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Full Professor and Chair",
                            "description": ["Department of Obstetrics and Gynecology, Medical School, University of Lisbon"],
                        },
                        {
                            "title": "Chair",
                            "description": ["Department of Obstetrics and Gynecology, Santa Maria University Hospital, Lisbon"],
                        },

                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree(1998)",
                            "description": ["University of Porto Faculty of Medicine, Portugal"],
                        },
                        {
                            "title": "PhD in Medicine (2001)",
                            "description": ["University of Porto Faculty of Medicine, Portugal"],
                        },
                        {
                            "title": "Aggregation in Medicine (2007)",
                            "description": [" University of Porto Faculty of Medicine, Portugal"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Prof. Diogo Ayres de Campos?",
                    "items": [
                        {
                            "title": "Pioneering Research:",
                            "description": [
                                "Learn from a leading expert in intrapartum fetal monitoring and obstetric simulation.",
                            ],
                        },
                        {
                            "title": "Innovative Practices",
                            "description": [
                                "Gain insights into the development and application of advanced obstetric technologies.",
                            ],
                        },
                        {
                            "title": "Global Perspective",
                            "description": [
                                "Benefit from his extensive involvement in international guidelines and consensus panels.",
                            ],
                        },
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Academic Roles:",
                        "items": [
                            "Full Professor and Chair, Department of Obstetrics and Gynecology, Medical School, University of Lisbon",
                            "Former Associate Professor, University of Porto Medical School",
                        ]
                    },
                    {
                        "title": "Clinical Roles:",
                        "items": [
                            "Chair, Department of Obstetrics and Gynecology, Santa Maria University Hospital, Lisbon",
                            "Former Senior Consultant, S. João Hospital, Porto",
                        ]
                    },
                    {
                        "title": "Research and Innovation:",
                        "items": [
                            "Co-inventor of the “Omniview-SisPorto®” program for computer analysis of fetal monitoring signals",
                            "Medical consultant for the development of the “Lucina®” obstetric simulator",
                        ]
                    },

                ],
                "achievements": [
                    {
                        "title": "Publications:",
                        "items": [
                            "Over 150 papers in international Medline-indexed journals; editor of two international books.",
                        ]
                    },
                    {
                        "title": "Leadership Roles:",
                        "items": [
                            "President, European Association of Perinatal Medicine (EAPM)",
                            "Executive Committee Member, European Board and College of Obstetrics and Gynecology (EBCOG)",
                            "Coordinator, EBCOG Part 2 Fellowship Exam"
                        ]
                    },
                    {
                        "title": "Guideline Development:",
                        "items": [
                            "Coordinated the 2015 revision of the FIGO guidelines on intrapartum fetal monitoring.",
                        ]
                    },
                    {
                        "title": "International Collaboration:",
                        "items": [
                            "Participated in WHO consensus panels on antenatal care and reduction of unnecessary cesarean sections.",
                        ]
                    },
                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Integrating technological innovation with clinical practice to enhance maternal and fetal healthcare outcomes."
                },
                {
                    "title": "Message to Students",
                    "content": "Embrace innovation and evidence-based practices to advance the field of obstetrics and gynecology, ensuring the highest standards of care for mothers and their babies."
                }
            ],
        },
        {
            "id": "p-0008REI",
            "name": "Dr. Edgar Mocanu",
            "about": "Reproductive Medicine and Surgery, Infertility Treatment, Reproductive Endocrinology",
            "department":'reproductive-endocrinology',
            "cardData": {
                "facultyName": 'Dr. Edgar Mocanu',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if8.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Consultant",
                            "description": ["Obstetrician and Gynecologist"],
                        },
                        {
                            "title": "Honorary",
                            "description": [" Clinical Associate Professor, Royal College of Surgeons in Ireland"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree (1993)",
                            "description": ["Iuliu Hațieganu University of Medicine and Pharmacy, Cluj-Napoca, Romania"],
                        },
                        {
                            "title": "Residency",
                            "description": ["Obstetrics and Gynecology at Coombe Women’s Hospital, National Maternity Hospital, and Rotunda Hospital, Dublin, Ireland"],
                        },
                        {
                            "title": "Subspecialty Training",
                            "description": [" Reproductive Medicine and Surgery, Royal College of Obstetricians and Gynaecologists (RCOG), London"],
                        },
                        {
                            "title": "Diploma in Ethics of Medical Research and Biotechnology (2008)",
                            "description": ["Keele University, UK"],
                        },
                        {
                            "title": "Doctor of Medicine (MD) (2011)",
                            "description": ["Trinity College Dublin, Ireland "],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Dr. Edgar Mocanu?",
                    "items": [
                        {
                            "title": "Comprehensive Expertise:",
                            "description": [
                                "Benefit from extensive experience in reproductive medicine, infertility treatments, and reproductive surgery.",
                            ],
                        },
                        {
                            "title": "Ethical Focus:",
                            "description": [
                                "Gain insights into the ethical considerations of medical research and biotechnology.",
                            ],
                        },
                        {
                            "title": "Global Perspective:",
                            "description": [
                                "Learn from active participation in international reproductive health organizations and policy development.",
                            ]
                        },
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Consultant Obstetrician and Gynecologist at the Rotunda Hospital, Dublin",
                            "Fellow of the Royal College of Obstetricians and Gynaecologists (RCOG) and the Royal College of Physicians of Ireland (RCPI)",
                            "Active involvement in teaching undergraduate and postgraduate students at the Royal College of Surgeons in Ireland (RCSI) and RCPI",
                            "Examiner for the RCSI Medical School",
                            "Participation in RCPI educational programs, including ethics workshops and minimal access surgery training",
                        ]
                    },
                ],
                "achievements": [
                    {
                        "title": "Leadership Roles:",
                        "items": [
                            "Past Secretary and President of the Irish Fertility Society (IFS)",
                            "National Representative and Chair of various committees within the European Society of Human Reproduction and Embryology (ESHRE)",
                            "Chair of the Reproductive Endocrinology and Infertility Committee of the International Federation of Gynecology and Obstetrics (FIGO)",
                            "Treasurer and President (since 2022) of the International Federation of Fertility Societies (IFFS)",
                        ]
                    },
                    {
                        "title": "Editorial Contributions:",
                        "items": [
                            "Deputy Editor-in-Chief of the International Journal of Gynecology and Obstetrics (IJGO)",
                        ]
                    },
                    {
                        "title": "Research Contributions:",
                        "items": [
                            "Active research portfolio with publications in the field of reproductive medicine",
                        ]
                    },
                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Combining clinical excellence with ethical practice and innovative research to advance reproductive healthcare."
                },
                {
                    "title": "Message to Students",
                    "content": "Advancing reproductive health requires a commitment to ethical practice, continuous learning, and global collaboration. Together, we can make a meaningful impact on patients' lives."
                }
            ],
        },
        {
            "id": "p-0024GE",
            "name": "Dr. Hugo Rodrigues Gaspar",
            "about": "Gynecological Oncology, Surgical Anatomy in Pelvic Gynecology,Genetic Mutations in Ovarian Cancer",
            "department":'gynaecology-endoscopy',
            "cardData": {
                "facultyName": 'Dr. Hugo Rodrigues Gaspar',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if24.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            // "title": "",
                            "description": ["Specialist in Gynecology and Obstetrics", "Consultant at Hospital Particular da Madeira, Grupo HPA Saúde"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree",
                            "description": ["Affiliated with Universidade da Madeira, Centro de Ciências da Vida"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Dr. Hugo Rodrigues Gaspar?",
                    "items": [
                        {
                            "title": "Research Excellence:",
                            "description": [
                                "Published extensively on topics such as BRCA1/2 mutations and gynecological cancer.",
                            ],
                        },
                        {
                            "title": "Clinical Expertise:",
                            "description": [
                                "Offers advanced insights into surgical techniques and oncology care in gynecology.",
                            ],
                        },
                        {
                            "title": "Global Perspective:",
                            "description": [
                                "Active involvement in collaborative studies, shaping international standards in gynecological healthcare.",
                            ],
                        }
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Specialist Consultant in Gynecology and Obstetrics at Grupo HPA Saúde",
                            "Contributor to several national and international studies on gynecological oncology",
                        ]
                    },
                ],
                "achievements": [
                    {
                        "title": "Co-author of key publications, including:",
                        "items": [
                            "Prevalence Study of BRCA1/2 Mutations in Portuguese Patients with Non-Mucinous Ovarian Cancer (2021)",
                            "Surgical Anatomy in Pelvic Gynecologic Oncology (2019)",
                            "National Consensus on Gynecological Cancer (2020)",
                            "Contributor to the development of innovative diagnostic and therapeutic approaches in gynecological oncology",
                        ]
                    },
                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Advancing women's healthcare through rigorous research, education, and patient-focused clinical practice."
                },
                {
                    "title": "Message to Students",
                    "content": "Through dedicated research and compassionate care, we can revolutionize the field of gynecology and improve outcomes for women worldwide."
                }
            ],
        },
        {
            "id": "p-0011GE",
            "name": "Dr. Istvan Argay",
            "about": "Laparoscopic Surgery, Endoscopic Gynecology, Obstetrics and Gynecology",
            "department":'gynaecology-endoscopy',
            "cardData": {
                "facultyName": 'Dr. Istvan Argay',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if11.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Assistant Lecturer",
                            "description": ["University of Debrecen Department of Obstetrics and Gynecology"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree (2007)",
                            "description": ["Faculty of Medicine, University of Debrecen", "Graduated with Cum Laude honors"],
                        },
                        {
                            "title": "PhD Studies:",
                            "description": ["Six semesters at the University of Debrecen (Thesis: Importance of Cervical Length Measured by Ultrasound in Risk Assessment of Premature Delivery"],
                        },
                        {
                            "title": 'Specialization Exam:',
                            "description": ["Obstetrics and Gynecology (2012) with excellent results"],
                        }
                    ],
                },
                {
                    "title": "Why Train Under Dr. Istvan Argay?",
                    "items": [
                        {
                            "title": "Hands-On Experience:",
                            "description": [
                                "Specialist in laparoscopic techniques for gynecological procedures",
                            ],
                        },
                        {
                            "title": "Global Expertise:",
                            "description": [
                                "Fellowship training under world-renowned Professor Wattiez",
                            ],
                        },
                        {
                            "title": "Academic Contributions:",
                            "description": [
                                "Active researcher and contributor to peer-reviewed journals",
                            ],
                        },
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Assistant Lecturer:",
                        "items": [
                            "University of Debrecen Department of Obstetrics and Gynecology (since October 2015)",
                        ]
                    },
                    {
                        "title": "Fellowship:",
                        "items": [
                            " IRCAD France under Professor Wattiez (2014 - 2015)",
                        ]
                    },
                    {
                        "title": "Previous Roles:",
                        "items": [
                            "Maternity Private Clinic for Obstetrics and Gynecology (2013)",
                            "Department of Obstetrics and Gynecology, B.-A.-Z. County Hospital and University Teaching Hospital (2007 - 2013)",
                        ]
                    },
                ],
                "achievements": [
                    {
                        "title": "Publication:",
                        "items": [
                            "Co-author of Impact of Laparoscopic Surgical Management of Deep Endometriosis on Pregnancy Rate (Journal of Minimally Invasive Gynecology,2016)"
                        ]
                    },
                    {
                        "title": "Courses Completed:",
                        "items": [
                            "Bachelor in Endoscopy",
                            "IRCAD Brasil Suturing Course",
                            "Gynecological Endoscopist Exam, Porto Heli (2014)"
                        ]
                    },
                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Bridging the gap between advanced surgical techniques and patient-centered care to improve maternal and reproductive health outcomes."
                },
                {
                    "title": "Message to Students",
                    "content": "Mastering the art of minimally invasive surgery is not just about technical skills but also about understanding its profound impact on patient recovery and quality of life."
                }
            ],
        },
        {
            "id": "p-0012FMU",
            "name": "Prof. Justin Konje",
            "about": "High-Risk Pregnancies (including diabetes), Fetal Medicine, Endometriosis and Chronic Pelvic Pain, Recurrent Pregnancy Loss, Menstrual Disorders, Reproductive Endocrinology,Family Planning",
            "department":'fetal-medicine-and-ultrasound',
            "cardData": {
                "facultyName": 'Prof. Justin Konje',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if12.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Professor of Obstetrics and Gynaecology",
                            "description": ["Weill Cornell Medicine - Qatar"],
                        },
                        {
                            "title": "Emeritus Professor of Obstetrics and Gynaecology",
                            "description": ["University of Leicester, UK"],
                        },
                    ],
                },
                {
                    "title": "Why Train Under Prof. Justin Konje?",
                    "items": [
                        {
                            "title": "Extensive Clinical Experience",
                            "description": [
                                "Over three decades in managing complex obstetric and gynecological cases"
                            ]
                        },
                        {
                            "title": "Research Excellence",
                            "description": [
                                "Prolific author with significant contributions to medical literature"
                            ]
                        },
                        {
                            "title": "Leadership in Women's Health",
                            "description": [
                                "Held pivotal roles in leading healthcare institutions, shaping women's health services"
                            ]
                        }
                    ]
                }

            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Sidra Medicine, Qatar",
                        "items": [
                            "Division Chief of Research, Women’s Services",
                            "Executive Chairman, Women’s Clinical Services Management Group"
                        ]
                    },
                    {
                        "title": "University Hospitals of Leicester, UK",
                        "items": [
                            "Consultant Obstetrician and Gynaecologist (16 years)",
                            "Director, Feto-Maternal Services (10 years)",
                            "Lead, Endometriosis and Recurrent Pregnancy Loss Service (12 years)"
                        ]
                    },
                    {
                        "title": "Academic Contributions:",
                        "items": [
                            "Authored over 200 peer-reviewed papers",
                            "Published several textbooks",
                            "Member of various international societies",
                            "Editorial roles in several medical journals"
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "Winner of the ‘SUILI Rudra Prize’ for the best paper on Endoscopy at AICOG 2013",
                            "Multiple scholarships for academic excellence during her training",
                            "Invited speaker at national conferences on Robotic Surgery and Advanced Fertility Techniques"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Dedicated to advancing women's health through evidence-based practice, innovative research, and comprehensive education."
                },
                {
                    "title": "Message to Students",
                    "content": "Pursue excellence in women's health by integrating clinical expertise with compassionate care and a commitment to lifelong learning."
                }
            ],
        },
        {
            "id": "p-0013FMU",
            "name": "Prof. Karl Oliver Kagan",
            "about": "Prenatal Diagnostics, Fetal Medicine, High-Risk Pregnancies, Ultrasound Diagnostics",
            "department":'fetal-medicine-and-ultrasound',
            "cardData": {
                "facultyName": 'Prof. Karl Oliver Kagan',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if13.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            // "title": "",
                            "description": ["Head of Prenatal Medicine", "University Professor of Prenatal Medicine"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree (2002)",
                            "description": ["Eberhard Karls University of Tübingen, Germany "]
                        },
                        {
                            "title": "Doctorate (2004)",
                            "description": ["Eberhard Karls University of Tübingen, Germany "]
                        },
                        {
                            "title": "Diploma in Fetal Medicine (2007)",
                            "description": ["The Fetal Medicine Foundation, London, UK"]
                        }
                    ]
                },
                {
                    "title": "Why Train Under Prof. Karl Oliver Kagan?",
                    "items": [
                        {
                            "title": "Innovative Research",
                            "description": [
                                "Developed new prenatal screening algorithms for chromosomal abnormalities"
                            ]
                        },
                        {
                            "title": "Clinical Expertise",
                            "description": [
                                "Extensive experience in managing high-risk pregnancies and complex prenatal cases"
                            ]
                        },
                        {
                            "title": "Leadership",
                            "description": [
                                "Leads a prominent prenatal and maternal-fetal medicine unit, contributing to advancements in the field"
                            ]
                        }
                    ]
                }
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Research Fellow",
                        "items": [
                            "Harris Birthright Centre, King’s College Hospital, London (2004–2007)"
                        ]
                    },
                    {
                        "title": "Senior Consultant",
                        "items": [
                            "University Women's Clinic, Tübingen (2008 - present)"
                        ]
                    },
                    {
                        "title": "Head of Prenatal and Maternal-Fetal Medicine",
                        "items": [
                            "University Women's Clinic, Tübingen"
                        ]
                    }
                ],
                "achievements": [
                    {
                        "title": "Habilitation",
                        "items": [
                            "Eberhard Karls University of Tübingen (2009)"
                        ]
                    },
                    {
                        "title": "DEGUM Level II Accreditation",
                        "items": [
                            "German Society for Ultrasound in Medicine (2009)"
                        ]
                    },
                    {
                        "title": "W1-Professorship",
                        "items": [
                            "Prenatal Medicine, Eberhard Karls University of Tübingen (2012)"
                        ]
                    }

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Integrating advanced prenatal diagnostic techniques with compassionate patient care to improve maternal and fetal health outcomes."
                },
                {
                    "title": "Message to Students",
                    "content": "Pursue excellence in prenatal care by combining rigorous scientific inquiry with empathetic patient interactions to make a meaningful impact in obstetrics and gynecology."
                }
            ],
        },
        {
            "id": "p-0014REI",
            "name": "Dr. Karunakara Marikinti",
            "about": "Infertility Treatments , In Vitro Fertilization (IVF) , Recurrent Miscarriage Management , Advanced Ultrasound Diagnostics , Minimally Invasive Gynecological Procedures",
            "department":'reproductive-endocrinology',
            "cardData": {
                "facultyName": 'Dr. Karunakara Marikinti',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if15.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Consultant Gynecologist",
                            "description": ["Infertility/IVF & Obstetrics"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree (MD)",
                            "description": ["All India Institute of Medical Sciences (AIIMS), New Delhi, India"]
                        },
                        {
                            "title": "Diplomate of National Board (DNB)",
                            "description": ["Obstetrics and Gynecology, AIIMS, New Delhi"]
                        },
                        {
                            "title": "Diploma in Ultrasound (Obstetric Ultrasound)",
                            "description": ["Royal College of Obstetricians and Gynaecologists (RCOG) and Royal College of Radiologists (RCR), UK"]
                        },
                        {
                            "title": "MSc in Reproductive Medicine",
                            "description": ["Valencia University, Spain"]
                        },
                        {
                            "title": "Certificate of Advanced Ultrasound Skills (Obstetrics & Gynecology)",
                            "description": ["King’s College, London"]
                        },
                        {
                            "title": "Certification of Specialist Training in Obstetrics and Gynecology",
                            "description": ["General Medical Council (GMC), UK"]
                        }
                    ]

                },
                {
                    "title": "Why Train Under Dr. Karunakara Marikinti?",
                    "items": [
                        {
                            "title": "Comprehensive Expertise",
                            "description": [
                                "Extensive experience in managing complex infertility cases, recurrent IVF failures, and recurrent miscarriages."
                            ]
                        },
                        {
                            "title": "Innovative Techniques",
                            "description": [
                                "Proficient in advanced ultrasound diagnostics, 3D/4D ultrasound, office hysteroscopy, and minimally invasive gynecological procedures."
                            ]
                        },
                        {
                            "title": "Global Perspective",
                            "description": [
                                "Trained and practiced in leading medical institutions across India, the UK, and the UAE, bringing a diverse and comprehensive approach to patient care."
                            ]
                        }
                    ]
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Early Career",
                        "items": [
                            "Completed a six-year residency in Obstetrics and Gynecology at AIIMS, New Delhi"
                        ]
                    },
                    {
                        "title": "UK Practice",
                        "items": [
                            "Migrated to the UK in 1992, gaining extensive experience in the National Health Service (NHS) in West Yorkshire, including:",
                            "Fetal Medicine Fellowship: Leeds General Infirmary",
                            "Collaboration with Pioneers: Joined the team at Bourn Hall Cambridge under Professor Robert Edwards, the creator of the world's first IVF baby, initiating the first hysteroscopy service and leading several research projects (2001 - 2008)",
                            "Recurrent Miscarriage Fellowship: St Mary’s Hospital, London, at the world's largest miscarriage center, completing four original research projects"
                        ]
                    },
                    {
                        "title": "Consultant Roles",
                        "items": [
                            "Sessional Consultant at Care Fertility UK, specializing in cases with the highest implantation rates (from 2010)",
                            "Medical Director and Senior Consultant Gynecologist and IVF Specialist at New Hope Gynecology & Fertility Hospital, Sharjah, UAE",
                            "Consultant Obstetrician and Gynecologist at Prime Hospital, Dubai",
                            "Consultant Obstetrician and Gynecologist at Lifeline Clinic, Dubai"
                        ]
                    }
                ],
                "achievements": [
                    {
                        "title": "Fellowship",
                        "items": [
                            "Fellow of the Royal College of Obstetricians and Gynaecologists (FRCOG), UK"
                        ]
                    },
                    {
                        "title": "Accredited Trainer",
                        "items": [
                            "International Faculty of the International Society of Ultrasound in Obstetrics and Gynecology (ISUOG)"
                        ]
                    },
                    {
                        "title": "Research Contributions",
                        "items": [
                            "Led several research projects in the field of reproductive medicine and gynecology"
                        ]
                    },
                    {
                        "title": "Multilingual Proficiency",
                        "items": [
                            "Fluent in English, Hindi, Telugu, Tamil, Urdu, and partial proficiency in Malayalam"
                        ]
                    }
                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Delivering patient-centered, evidence-based care while advancing the field of reproductive medicine through continuous learning and innovation."
                },
                {
                    "title": "Message to Students",
                    "content": "Embrace the evolving landscape of reproductive medicine with a commitment to lifelong learning and compassionate patient care. Together, we can overcome the challenges of infertility and enhance the quality of life for our patients."
                }
            ],
        },
        {
            "id": "p-0015MM",
            "name": "Dr. Komal Chavan",
            "about": "Gynecology and Obstetrics, Infertility Treatment, Gynecological Endoscopy, Preventive Oncology, Postnatal Care",
            "department":'maternal-medical',
            "cardData": {
                "facultyName": 'Dr. Komal Chavan',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if14.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Consultant Gynecologist",
                            "description": ["Obstetrician, and Infertility Specialist"],
                        },
                        {
                            "title": "Senior Consultant",
                            "description": ["Senior Consultant at Chavan Maternity & Nursing Home, Andheri West, Mumbai"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree",
                            "description": ["MBBS: Topiwala National Medical College & BYL Nair Charitable Hospital, 1997"]
                        },
                        {
                            "title": "Diploma in Obstetrics and Gynecology (DGO)",
                            "description": ["Lokmanya Tilak Municipal Medical College, Sion, Mumbai, 2000"]
                        },
                        {
                            "title": "FCPS (Midwifery & Gynecology)",
                            "description": ["Lokmanya Tilak Municipal Medical College, Sion, Mumbai, 2001"]
                        },
                        {
                            "title": "DNB",
                            "description": ["National Board of Examinations, New Delhi, 2001"]
                        },
                        {
                            "title": "MNAMS (General Surgery)",
                            "description": ["National Academy of Medical Sciences"]
                        },
                        {
                            "title": "MD (Obstetrics & Gynaecology)",
                            "description": []
                        }
                    ]
                },
                {
                    "title": "Why Train Under Dr. Komal Chavan?",
                    "items": [
                        {
                            "title": "Comprehensive Expertise",
                            "description": [
                                "Extensive experience in gynecology, obstetrics, and infertility treatments."
                            ]
                        },
                        {
                            "title": "Academic Leadership",
                            "description": [
                                "Former Assistant Professor with a commitment to medical education."
                            ]
                        },
                        {
                            "title": "Patient-Centered Approach",
                            "description": [
                                "Focuses on individualized care and patient empowerment."
                            ]
                        }
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Assistant Professor",
                        "items": [
                            "G.S. Medical College & KEM Hospital, Mumbai (2003 - 2008)"
                        ]
                    },
                    {
                        "title": "Honorary Consultant",
                        "items": [
                            "Dr. R.N. Cooper Municipal General Hospital, Mumbai (2013 - Present)"
                        ]
                    },
                    {
                        "title": "Senior Consultant",
                        "items": [
                            "Chavan Maternity & Nursing Home, Andheri West, Mumbai"
                        ]
                    }
                ],
                "achievements": [
                    {
                        "title": "Awards:",
                        "items": [
                            "First Prize for Best Paper at the International Conference on High-Risk Pregnancy (2005)"
                        ]
                    },
                    {
                        "title": "Memberships:",
                        "items": [
                            "Fellow of the College of Physicians and Surgeons (FCPS), Member of the National Academy of Medical Sciences (MNAMS), Member of the Federation of Obstetric and Gynaecological Societies of India (FOGSI), Member of the Mumbai Obstetric and Gynaecological Society (MOGS)"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Empowering patients through education and compassionate care, ensuring informed decisions and holistic well-being."
                },
                {
                    "title": "Message to Students",
                    "content": "Dedication to continuous learning and compassionate care is the cornerstone of excellence in women's health."
                }
            ],
        },
        {
            "id": "p-0016GE",
            "name": "Prof. Munna Talak",
            "about": "Obstetrics and Gynecology, Minimally Invasive Surgery, High-Risk Pregnancies",
            "department":'gynaecology-endoscopy',
            "cardData": {
                "facultyName": 'Prof. Munna Talak',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if16.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": "Chief Executive Officer",
                            "description": ["Latifa Women and Children Hospital Chief Medical Officer, Dubai Academic Health Corporation Vice Provost Clinical Practice, Mohammed Bin Rashid University of Medicine and Health Sciences"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree",
                            "description": ["Royal College of Surgeons in Ireland, 1997"]
                        },
                        {
                            "title": "Residency",
                            "description": ["Johns Hopkins Hospital, USA"]
                        },
                        {
                            "title": "American Board Certification",
                            "description": ["Obstetrics and Gynecology, 2005"]
                        },
                        {
                            "title": "Executive Master of Public Administration",
                            "description": ["Mohammed Bin Rashid School of Government, 2020"]
                        }
                    ]
                },
                {
                    "title": "Why Train Under Prof. Munna Talak?",
                    "items": [
                        {
                            "description": [
                                "Learn from a pioneering leader in women's health and hospital administration",
                                "Gain insights into the development and implementation of minimally invasive surgical techniques",
                                "Benefit from her extensive experience in managing high-risk pregnancies and advancing women's healthcare services"
                            ],
                        },
                    ],
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Consultant Obstetrician and Gynecologist in the USA (2004 - 2006)",
                            "Joined Latifa Women and Children Hospital in 2006 as Consultant Obstetrician/Gynecologist",
                            "Developed minimally invasive surgery services and established outpatient office hysteroscopy procedures at Latifa Hospital",
                            "Director of Obstetrics and Gynecology Residency Program at Dubai Health Authority (2007 - 2010)",
                            "Elected President of the International Hospital Federation (IHF) in October 2023, becoming the first Arab woman to hold this position"
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "First Emirati woman to specialize in obstetrics and gynecology at Johns Hopkins Hospital",
                            "Fellow of the American Congress of Obstetrics and Gynecology",
                            "Adjunct Faculty at Mohammed Bin Rashid University",
                            "Regular speaker at international conferences and recipient of various awards for excellence in her field"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Empowering future healthcare professionals through innovative education and compassionate patient care."
                },
                {
                    "title": "Message to Students",
                    "content": "Dedication to continuous learning and compassionate care is essential to advancing women's health and making a meaningful impact in our communities."
                }
            ],
        },
        {
            "id": "p-0017REI",
            "name": "Dr. Rajalaxmi Walavalkar",
            "about": "Reproductive Medicine, Infertility Treatment, Gynecological Endoscopy",
            "department":'reproductive-endocrinology',
            "cardData": {
                "facultyName": 'Dr. Rajalaxmi Walavalkar',
                "courseDuration": '1 week',
                "totalLearners": '154',
                "facultyImage": '/if17.png',
            },
            "PersonalDetails": [
                    {
                        "title": "Designation",
                        "items": [
                            {
                                "title": "Medical Director and IVF Consultant",
                                "description": ["Medical Director and IVF Consultant at Cocoon Fertility"],
                            },
                        ],
                    },
                    {
                        "title": "Academic Background",
                        "items": [
                            {
                                "title": "MBBS:",
                                "description": ["University of Mumbai, 1996"]
                            },
                            {
                                "title": "DGO:",
                                "description": ["College of Physicians and Surgeons Mumbai, 2001"]
                            },
                            {
                                "title": "FCPS in Midwifery & Gynecology: ",
                                "description": ["College of Physicians and Surgeons Mumbai, 2002"]
                            },
                            {
                                "title": "MRCOG:",
                                "description": ["Royal College of Obstetricians and Gynaecologists, UK"]
                            },
                            {
                                "title": "DNB in Obstetrics & Gynecology:",
                                "description": ["National Board of Examinations"]
                            }
                        ]

                    },
                    {
                        "title": "Why Train Under Dr. Rajalaxmi Walavalkar?",
                        "items": [
                            {
                                "description": [
                                    "Benefit from her extensive experience in reproductive medicine and infertility treatments",
                                    "Learn advanced gynecological endoscopy techniques",
                                    "Gain insights from her international training and practice",
                                    "Engage with a leader committed to ethical and empathetic patient care",
                                ],
                            },
                        ],
                    },
                ],
                "experience": {
                    "facultyExperience": [
                        {
                            "items": [
                                "Over 28 years in Obstetrics and Gynecology, with 22 years as a specialist",
                                "Extensive training in India and the UK, including Completion of Consultant Training (CCT)",
                                "Fellowship in Reproductive Medicine and Surgery at Guy's and St Thomas' Hospital, London",
                                "Post-CCT Research Fellowship at Homerton University Hospital, London",
                                "Co-founder of Cocoon Fertility, a leading chain of IVF clinics in India"
                            ]
                        },
                    ],
                    "achievements": [
                        {
                            "items": [
                                "Authored multiple postgraduate book chapters",
                                "Delivered over 50 invited talks at regional, national, and international conferences",
                                "Awarded the Leading IVF Consultant at Times Power Women 2018",
                                "Featured in media for contributions to fertility treatments"
                            ]
                        },

                    ]
                },
                "philosophy": [
                    {
                        "title": "Teaching Philosophy",
                        "content": "Empowering patients through education and compassionate care, while advancing reproductive medicine through continuous learning and innovation."
                    },
                    {
                        "title": "Message to Students",
                        "content": "Dedication to patient-centered care and continuous learning is key to advancing in reproductive medicine. Together, we can help families achieve their dreams."
                    }
                ],
        },
        {
            "id": "p-006FMU",
            "name": "Prof. Samina Dornan",
            "about": "Maternal and Fetal Medicine , Prenatal Diagnosis and Fetal Therapy , High-Risk Pregnancy Management , Fetal Genetic Disorders and Structural Abnormalities",
            "department":'fetal-medicine-and-ultrasound',
            "cardData": {
                "facultyName": 'Prof. Samina Dornan',
                "courseDuration": '1 week',
                "totalLearners": '156',
                "facultyImage": '/if22.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "description": ["Consultant Obstetrician and Gynecologist", "Specialist in Maternal and Fetal Medicine"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "MBBS:",
                            "description": ["University of Punjab, Pakistan (1991)"]
                        },
                        {
                            "title": "MD:",
                            "description": ["Queen's University Belfast, Northern Ireland"]
                        },
                        {
                            "title": "Subspecialty Training:",
                            "description": ["Maternal and Fetal Medicine, Royal College of Obstetricians and Gynecologists, UK"]
                        },
                        {
                            "title": "Fellowship:",
                            "description": ["Royal College of Obstetricians and Gynecologists, London (2017)"]
                        }
                    ]
                },
                {
                    "title": "Why Train Under Prof. Samina Dornan?",
                    "items": [
                        {
                            "title": "Comprehensive Expertise:",
                            "description": [
                                "Extensive experience in managing high-risk pregnancies and complex fetal conditions."
                            ]
                        },
                        {
                            "title": "Global Perspective:",
                            "description": [
                                "Trained and practiced in leading international medical institutions."
                            ]
                        },
                        {
                            "title": "Innovative Techniques:",
                            "description": [
                                "Expertise in prenatal diagnostics, genetic counseling, and advanced fetal therapy."
                            ]
                        }
                    ]
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Consultant at St. George's Hospital, London (2009)",
                            "Lead Clinician at the Royal Maternity Hospital, Belfast",
                            "Consultant Maternal and Fetal Medicine Specialist at Al Zahra Hospital, Dubai"
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "First female specialist in Maternal and Fetal Medicine from the Royal College of Obstetricians and Gynecologists to practice in Dubai.",
                            "Lead roles in prestigious hospitals such as St. George’s Hospital, London, and the Royal Maternity Hospital, Belfast.",
                            "Pioneering contributions to prenatal diagnosis and management of twin pregnancies."
                        ]

                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Providing compassionate, patient-centered care while empowering future healthcare providers to excel in maternal and fetal medicine."
                },
                {
                    "title": "Message to Students",
                    "content": "By blending advanced clinical knowledge with compassionate care, we can transform outcomes for mothers and their unborn babies."
                }
            ],
        },
        {
            "id": "p-0021GE",
            "name": "Dr. Sandesh Kade",
            "about": "Advanced Laparoscopic Surgeries , Fertility-Enhancing Surgeries , Treatment of Endometriosis , Pelvic Floor Repair Surgeries , Hysteroscopy",
            "department":'gynaecology-endoscopy',
            "cardData": {
                "facultyName": 'Dr. Sandesh Kade',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if20.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "description": ["Consultant Gynecologist and Laparoscopic Surgeon", "Senior Consultant at Burjeel Medical City, Abu Dhabi"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "MBBS:",
                            "description": ["Shivaji University, Kolhapur"]
                        },
                        {
                            "title": "DNB (Obstetrics and Gynecology):",
                            "description": ["National Board of Examinations, India"]
                        },
                        {
                            "title": "Postgraduate Diploma:",
                            "description": ["Obstetrics & Gynaecology (DGO)"]
                        },
                        {
                            "title": "Diploma in Family Planning (DFP):",
                            "description": ["India"]
                        }
                    ]
                },
                {
                    "title": "Why Train Under Dr. Sandesh Kade?",
                    "items": [
                        {
                            "title": "Comprehensive Expertise:",
                            "description": [
                                "Extensive experience in advanced laparoscopic and minimally invasive techniques."
                            ]
                        },
                        {
                            "title": "Global Exposure:",
                            "description": [
                                "Trained and practiced in diverse healthcare environments across multiple countries."
                            ]
                        },
                        {
                            "title": "Innovative Techniques:",
                            "description": [
                                "Pioneered laparoscopic neovaginoplasty and contributed to groundbreaking uterine transplant surgeries."
                            ]
                        }
                    ]
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Over 22 years of experience across India, France, Nigeria, and the UAE",
                            "Performed more than 10,000 gynecological surgeries",
                            "Member of India's pioneering uterine transplant team"
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "Member of the world's first laparoscopically assisted uterine transplant team in India",
                            "First in India to perform laparoscopic neovaginoplasty using uterine buds",
                            "Recipient of Best Video Awards at AAGL and ISGE Conferences",
                            "Published research on uterine transplant in the Journal of Minimally Invasive Gynecology",
                            "Co-authored a chapter on uterine artery ligation in a hysterectomy textbook"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Empowering healthcare professionals with hands-on expertise and evidence-based knowledge to revolutionize women's healthcare."
                },
                {
                    "title": "Message to Students",
                    "content": "Mastering minimally invasive gynecology requires dedication to innovation, precision, and patient-centric care. Together, we can redefine the standards of women's health."
                }
            ],
        },
        {
            "id": "p-0022FMU",
            "name": "Prof. Sebastian Kwiatkowski",
            "about": "Maternal-Fetal Medicine (Perinatology) , Placental Pathology and Obstetric Complications , Prenatal Care and Diagnostics",
            "department":'fetal-medicine-and-ultrasound',
            "cardData": {
                "facultyName": 'Prof. Sebastian Kwiatkowski',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if21.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": 'Deputy Dean',
                            "description": ["Faculty of Medicine and Dentistry, Pomeranian Medical University, Szczecin"],
                        },
                        {
                            "title": 'Deputy Head',
                            "description": ["Department of Obstetrics and Gynecology, Pomeranian Medical University"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree",
                            "description": ["Pomeranian Medical University, Szczecin, Poland"]
                        },
                        {
                            "title": "Postdoctoral Habilitation (Dr. Hab.)",
                            "description": ["Advanced research in obstetrics and gynecology"]
                        },
                    ]
                },
                {
                    "title": "Why Train Under Prof. Sebastian Kwiatkowski",
                    "items": [
                        {
                            "title": "Research Leadership:",
                            "description": [
                                "Co-authored 167 scientific papers with a cumulative impact factor of 274, focusing on placental pathology and prenatal complications."
                            ]
                        },
                        {
                            "title": "Educational Excellence:",
                            "description": [
                                "Founder of PRENATALPROJEKT, an innovative educational platform for obstetrics and gynecology."
                            ]
                        },
                        {
                            "title": "Global Recognition:",
                            "description": [
                                "Holds leadership positions in national and European obstetric societies, shaping future guidelines and standards."
                            ]
                        }
                    ]
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Deputy Dean and faculty leader at Pomeranian Medical University, advancing medical education and research",
                            "Member of the Main Board of the Polish Society of Gynecologists and Obstetricians",
                            "Board Member of the European Board & College of Obstetricians and Gynecologists (EBCOG)"
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "Awarded the title of Professor by the President of the Republic of Poland in 2022 for significant contributions to medical science",
                            "Developer of key educational and clinical guidelines in maternal-fetal medicine",
                            "Actively involved in international collaborations through EBCOG"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Promoting evidence-based practices and fostering innovation in obstetrics and gynecology to improve patient outcomes."
                },
                {
                    "title": "Message to Students",
                    "content": "Through rigorous research and education, we can unravel the complexities of maternal and fetal health, ensuring safer outcomes for mothers and babies worldwide."
                }
            ],
        },
        {
            "id": "p-0019MM",
            "name": "Prof. Stephen Rulisa",
            "about": "Maternal and Child Health , Infectious Diseases in Reproductive Health, Epidemiology and Health Systems Strengthening",
            "department":'maternal-medical',
            "cardData": {
                "facultyName": 'Prof. Stephen Rulisa',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if18.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": 'Professor of Obstetrics and Gynecology',
                            "description": ["University of Rwanda"],
                        },
                        {
                            "title": 'National Chair',
                            "description": [" Maternal, Perinatal & Child Death Surveillance and Response (MPDSR) Committee, Rwanda"],
                        },
                        {
                            "title": 'Chair',
                            "description": ["Education, Research, and Scientific Committee, ECSACOG"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "PhD in Public Health",
                            "description": ["Focus on infectious diseases and maternal health"]
                        },
                        {
                            "title": "Founding Chair",
                            "description": ["Department of Education and Research, University Teaching Hospital of Kigali"]
                        },
                    ]
                },
                {
                    "title": "Why Train Under Prof. Stephen Rulisa?",
                    "items": [
                        {
                            "title": "Comprehensive Expertise:",
                            "description": [
                                "Extensive knowledge in maternal health, reproductive medicine, and infectious diseases."
                            ]
                        },
                        {
                            "title": "Innovative Research:",
                            "description": [
                                "Published over 100 peer-reviewed articles in international journals."
                            ]
                        },
                        {
                            "title": "Leadership and Mentorship:",
                            "description": [
                                "Founding fellow and active contributor to ECSACOG, shaping the future of obstetrics and gynecology education."
                            ]
                        }
                    ]
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "title": "Academic Leadership:",
                        "items": [
                            "Dean of the School of Medicine and Pharmacy, University of Rwanda",
                            "Head of the Department of Obstetrics and Gynecology, University of Rwanda"
                        ]
                    },
                    {
                        "title": "National Initiatives:",
                        "items": [
                            "Chair of the MPDSR Committee, spearheading efforts to monitor and mitigate maternal and perinatal mortality in Rwanda"
                        ]
                    },
                    {
                        "title": "Research Contributions:",
                        "items": [
                            "Led multiple research projects focusing on maternal health at the policy and patient care levels"
                        ]
                    }
                ],
                "achievements": [
                    {
                        "items": [
                            "National Chair of Rwanda’s MPDSR Committee",
                            "Founding Fellow of the East, Central, and Southern African College of Obstetricians and Gynecologists (ECSACOG)",
                            "Associate Editor and Board Member of prominent journals, including BMC Pregnancy and Childbirth and the Rwanda Medical Journal"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Advancing maternal and child health through evidence-based practices, education, and transformative healthcare policies."
                },
                {
                    "title": "Message to Students",
                    "content": "Through research, education, and compassionate care, we can create systems that save lives and elevate the quality of maternal and child health worldwide."
                }
            ],
        },
        {
            "id": "p-0020RFI",
            "name": "Prof. Stratics kolibianakis",
            "about": "Assisted Reproduction , Reproductive Endocrinology , Infertility Treatment , Ovarian Stimulation",
            "department":'reproductive-endocrinology',
            "cardData": {
                "facultyName": 'Prof. Stratics kolibianakis',
                "courseDuration": '1 week',
                "totalLearners": '70',
                "facultyImage": '/if19.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": 'Professor of Obstetrics',
                            "description": ["Gynecology, and Assisted Reproduction, Aristotle University of Thessaloniki (AUTH)"],
                        },
                        {
                            "title": 'Scientific Fellow',
                            "description": ["FIVI Fertility & IVF Center, European Interbalkan Medical Center"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree (1991)",
                            "description": ["Aristotle University of Thessaloniki, Greece "]
                        },
                        {
                            "title": "PhD and MSc",
                            "description": ["Dutch-speaking Brussels Free University, Center for Reproductive Medicine, Specialized training in Obstetrics and Gynecology in the UK"]
                        },
                    ]
                },
                {
                    "title": "Why Train Under Prof. Stratics kolibianakis?",
                    "items": [
                        {
                            "title": "Comprehensive Expertise:",
                            "description": [
                                "Extensive knowledge in managing patients with reduced ovarian reserve and simplifying ovarian stimulation."
                            ]
                        },
                        {
                            "title": "Research Leadership:",
                            "description": [
                                "Authored over 165 research papers and co-edited textbooks, providing unmatched insights into infertility treatment."
                            ]
                        },
                        {
                            "title": "Global Influence:",
                            "description": [
                                "Past leadership roles in ESHRE and ongoing contributions to major journals like Human Reproduction and Fertility and Sterility."
                            ]
                        }
                    ]
                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Scientific Fellow at FIVI Fertility & IVF Center (since 2019)",
                            "Director of the Master's Program in Human Reproduction at AUTH",
                            "Coordinator of the IVF Unit at AUTH, accredited as a European Centre for subspecialty training in Reproductive Medicine",
                            "Past Coordinator of the Special Interest Group in Reproductive Endocrinology, ESHRE (2013 - 2015)",
                            "Past Chair of the Special Interest Groups Committee, ESHRE"
                        ]

                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "Excellence Awards in Health and Research from Aristotle University (2008, 2015, 2017, 2018)",
                            "Multiple awards for outstanding scientific presentations at international conferences",
                            "Recognized as an exceptional peer reviewer for leading reproductive medicine journals"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Integrating cutting-edge research with practical clinical applications to improve outcomes in reproductive medicine."
                },
                {
                    "title": "Message to Students",
                    "content": "Dedication to innovative research and patient-centered care can transform the landscape of infertility treatment and reproductive health."
                }
            ],
        },
        {
            "id": "p-0007FMU",
            "name": "Prof. Ulrich Honemeyer",
            "about": "Advanced Ultrasonography, Maternal-Fetal Medicine, Fetal Neurological Development",
            "department":'fetal-medicine-and-ultrasound',
            "cardData": {
                "facultyName": 'Prof. Ulrich Honemeyer',
                "courseDuration": '1 week',
                "totalLearners": '156',
                "facultyImage": '/if23.png',
            },
            "PersonalDetails": [
                {
                    "title": "Designation",
                    "items": [
                        {
                            "title": 'Consultant in Obstetrics',
                            "description": ["Gynecology, and Fetal Medicine"],
                        },
                    ],
                },
                {
                    "title": "Academic Background",
                    "items": [
                        {
                            "title": "Medical Degree (MD)",
                            "description": ["Freie Universität Berlin, Germany"]
                        },
                        {
                            "title": "Master's in Advanced Ultrasound in Obstetrics and Gynecology",
                            "description": ["Dubrovnik International University"]
                        },
                        {
                            "title": "International Master in Maternal and Fetal Medicine",
                            "description": ["University of Barcelona, Spain"]
                        },
                        {
                            "title": "MBA",
                            "description": ["Swiss Business School"]
                        }
                    ]

                },
                {
                    "title": "Why Train Under Prof. Ulrich Honemeyer?",
                    "items": [
                        {
                            "title": "Comprehensive Expertise:",
                            "description": [
                                "Specializes in advanced diagnostic ultrasonography and maternal-fetal care."
                            ]
                        },
                        {
                            "title": "Research Leadership:",
                            "description": [
                                "Prolific author with a strong focus on fetal behavior and neurological development."
                            ]
                        },
                        {
                            "title": "Global Perspective:",
                            "description": [
                                "Extensive international training and practice in leading medical institutions."
                            ]
                        }
                    ]

                },
            ],
            "experience": {
                "facultyExperience": [
                    {
                        "items": [
                            "Consultant at King's College Hospital, Dubai",
                            "Former Consultant at Royal Hospital NMC and Al Zahra Hospital"
                        ]
                    },
                ],
                "achievements": [
                    {
                        "items": [
                            "Honorary Professor at Pirogov Russian Medical State University",
                            "Associate Member of the International Academy of Perinatal Medicine",
                            "Authored 39 peer-reviewed publications and 15 book chapters"
                        ]
                    },

                ]
            },
            "philosophy": [
                {
                    "title": "Teaching Philosophy",
                    "content": "Advancing maternal and fetal care through precision diagnostics and a compassionate approach to patient well-being."
                },
                {
                    "title": "Message to Students",
                    "content": "Empowering the next generation of maternal-fetal medicine specialists through evidence-based practice and innovation in diagnostic care."
                }
            ],
        },
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
            <BreadCrumbs routes={[{ name: facultyData?.name, href: `/${id}`, current: true }]} />
            <div className="bg-[#290849] flex gap-8 sm:gap-0 flex-col-reverse sm:flex-row px-4 xs:px-8 xl:px-16 3xl:px-24 py-8 lg:py-12 justify-between text-white">
                <div className="flex flex-col gap-4 w-[100%] sm:w-[47%] md:w-[62%] lg:w-[70%]">
                    <h1 className="font-montserrat text-[28px] font-bold leading-[33.6px] lg:w-[90%] xl:w-[84%]">{facultyData?.name}</h1>
                    <div className="text-[#D1D5DB] font-montserrat text-[16px] font-medium leading-[24px] w-[100%] sm:w-[90%] lg:w-[80%]">{facultyData?.about}</div>
                </div>
                <div className="relative w-[100%] xs:w-[51%] sm:w-[46%] md:w-[36%] lg:w-[30%] xl:w-[26%] 2xl:w-[24%] 3xl:w-[22%]">
                    <div className="lg:absolute w-[100%] top-0 rounded-[20px] overflow-hidden">
                        <InternationalFacultyCard data={facultyData?.cardData} btn_label="Enroll" handleClick={handleEnroll} />
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-8 sm:pr-8 lg:pr-0 xl:pl-16 3xl:pl-24 py-4 xs:py-8 sm:py-12 w-[100%] lg:w-[68%] xl:w-[70%]">
                <FacultyProfileTabSection facultyData={facultyData} />
            </div>
        </div>
    );
};

export default FacultyProfile;
