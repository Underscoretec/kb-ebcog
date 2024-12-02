import BreadCrumbs from '@/common/uicomponents/BreadCrumbs'
import Button from '@/common/uicomponents/Button';
import CourseTabSection from '@/components/DiplomaCourse/CourseTabSection';
import InternationalFacultyCard from '@/components/HomeComponets/InternationalFacultyCard';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { MdAccessTimeFilled, MdFileCopy } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { useRouter } from 'next/navigation';

interface DiplomaCourseProps {
    courseId: string;
  }

const DiplomaCourse = ({ courseId }: DiplomaCourseProps) => {
    const router = useRouter();
    const [courseData, setcourseData] = useState<any | null>(null);

    const data = [
        {
            "id": "maternal-medical",
            "courseName": 'Diploma in Maternal Medicine',
            "duration": '1 week',
            "learners": "15,674",
            "lessons": '20',
            "cardData": {
                "facultyName": 'Prof. Frank Louwen (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "15,674",
                "facultyImage": '/if9.png'
            },
            "overview": {
                "text": "The EBCOG Maternal Medicine Diploma provides a rigorous and comprehensive training in maternal medicine, addressing the full spectrum of normal and complicated pregnancies. This program is structured to empower healthcare professionals with advanced skills and knowledge to manage and improve outcomes in both labor and delivery and maternal medical disorders.",
                "title": "Why Train with Us?",
                "reasons": [
                    {
                        "heading": "Expert Faculty",
                        "description": "Learn from leading specialists with global experience."
                    },
                    {
                        "heading": "Facilities",
                        "description": "Get trained on advance equipments with latest techniques."
                    },
                    {
                        "heading": "Career Advancement",
                        "description": "Gain credentials that elevate your professional standing and expertise."
                    }
                ]
            },
            "curriculum": {
                "curriculumSections": [
                    {
                        "title": "Labor and Delivery",
                        "items": [
                            "Advanced Delivery Techniques",
                            "Innovative Tools",
                            "Surgical Skills"
                        ]
                    },
                    {
                        "title": "Medical Disorders in Pregnancy",
                        "items": [
                            "Comprehensive Patient Care",
                            "Neurological and Respiratory Considerations",
                            "Postpartum Management"
                        ]
                    },
                    {
                        "title": "Special / High-Risk Conditions in Pregnancy",
                        "items": [
                            "Fetal Care",
                            "Pregnancy Complications",
                            "Nutritional and Metabolic Health"
                        ]
                    },
                    {
                        "title": "Critical Care in Obstetrics",
                        "items": [
                            "Emergency Management",
                            "Severe Complications"
                        ]
                    },
                    {
                        "title": "Workstations / Hands-on Training",
                        "items": [
                            "Practical Skills Development",
                            "Innovative Tools",
                            "Real-World Application"
                        ]
                    }
                ]
            },
            "faculty": [
                {
                    "id": "p-0009MM",
                    "name": "Prof. Frank Louwen",
                    "role": "Lead",
                    "description": "Head of the Division of Obstetrics and Fetomaternal Medicine at the University Hospital Frankfurt, Goethe University. President of EBCOG & President-Elect FIGO",
                    "image": "/faculty1.png"
                },
                {
                    "id": "p-0009MM",
                    "name": "Prof. Diogo Ayres de Campos",
                    "description": "Chair of the Department of Obstetrics and Gynecology at the Medical School of the University of Lisbon, Portugal. He leads the Department of Obstetrics and Gynecology at Santa Maria University Hospital in Lisbon. Co-invented the 'Omniview -SisPorto®' and has served as President of the EAPM and as an Executive Committee Member of the EBCOG",
                    "image": "/faculty2.png"
                },
                {
                    "id": "p-0009MM",
                    "name": "Prof. Chittaranjan N. Purandare",
                    "description": "Purandare Hospital. Served as the President of FIGO and FOGSI. Also been the Dean of the ICOG and the Emeritus Editor for the Journal of Obstetrics and Gynecology of India.",
                    "image": "/faculty3.png"
                },
                {
                    "id": "p-0009MM",
                    "name": "Prof. Stephen Rulisa",
                    "description": "Professor in the Department of Obstetrics and Gynecology at the University of Rwanda. Serving as the Chair of the ECSACOG & National Chair of the MPDSR",
                    "image": "/faculty4.png"
                },
                {
                    "id": "p-0009MM",
                    "name": "Dr. Amala Nazareth",
                    "description": "Hon. Secretary General AFCOG. Obstetrician and Gynecologist at Prime Health Group, UAE",
                    "image": "/faculty5.png"
                },
                {
                    "id": "p-0009MM",
                    "name": "Dr. Komal Chavan",
                    "description": "Head of the Division of Obstetrics and Fetomaternal Medicine at the University Hospital Frankfurt, Goethe University. President of EBCOG & President-Elect FIGO",
                    "image": "/faculty6.png"
                }
            ],
            "faqs": [
                {
                    "question": "1. What is the focus of the Maternal Medicine course?",
                    "answer": "This course provides comprehensive training in maternal medicine, focusing on the management of medical disorders during pregnancy and the postpartum period. It equips healthcare professionals with advanced knowledge to improve outcomes for mothers and infants."
                },
                {
                    "question": "2. Who is eligible to apply for the course?",
                    "answer": "The course is open to obstetricians, gynecologists, internists, and other healthcare providers specializing in managing medical conditions in pregnant women. Applicants with relevant medical qualifications and experience are encouraged to apply."
                },
                {
                    "question": "3. What topics are covered in the course?",
                    "answer": "The curriculum includes management of medical disorders in pregnancy, such as hypertension, diabetes, cardiac conditions, and hematological issues. It also covers the physiological changes in pregnancy and evidence-based practices for maternal care."
                },
                {
                    "question": "4. What are the key learning objectives?",
                    "answer": "Participants will develop a deep understanding of the physiological and pathological changes in pregnancy, refine their diagnostic skills, and learn to manage complex medical cases during pregnancy and postpartum effectively."
                },
                {
                    "question": "5. How is the course delivered?",
                    "answer": "The course uses a mix of lectures, case-based discussions, and hands-on workshops. Interactive sessions focus on practical problem-solving and collaborative learning, guided by experts in maternal medicine."
                },
                {
                    "question": "6. Is there an assessment or certification upon completion?",
                    "answer": "Yes, participants will undergo assessments, including written exams and practical evaluations. Successful candidates will receive a certification recognized by EBCOG (European Board and College of Obstetrics and Gynaecology) and DHA (Dubai Health Authority)."
                },
                {
                    "question": "7. What are the benefits of completing this course?",
                    "answer": "Completing this course provides advanced clinical skills in maternal medicine, enhancing participants' ability to manage complex cases. The certification is a significant professional credential that can support career advancement in obstetrics and maternal healthcare."
                },
                {
                    "question": "8. How long is the course, and what is the schedule like?",
                    "answer": "The course duration and schedule may vary. Detailed timelines, including start dates and session timings, are provided upon acceptance into the program or can be inquired about during the application process."
                },
                {
                    "question": "9. What resources are available to support learning during the course?",
                    "answer": "Participants will have access to course materials and mentorship from experienced professionals. Additional tools and references for managing maternal medical conditions will be provided."
                },
                {
                    "question": "10. How can I apply for the course?",
                    "answer": "Applications can be submitted online through the official course portal. Applicants must provide their medical credentials, a professional CV, and other required documents."
                },
                {
                    "question": "11. Are there any prerequisites for taking this course?",
                    "answer": "A background in obstetrics, gynecology, or internal medicine is recommended. Previous clinical experience in maternal or general medicine will enhance the learning experience."
                },
                {
                    "question": "12. How much does the course cost, and are there any financial aid options?",
                    "answer": "Detailed fee structures can be obtained through the official course website. Some sponsorship or financial aid options may be available for eligible candidates."
                }
            ]
        },
        {
            "id": "reproductive-endocrinology",
            "courseName": 'Diploma in Reproductive Endocrinology & Infertility',
            "duration": '1 week',
            "learners": "15,674",
            "lessons": '20',
            "cardData": {
                "facultyName": 'Prof. Basil C. Tarlatzis (Lead)',
                "courseDuration": '1 Week',
                "totalLearners": "15,674",
                "facultyImage": '/if5.png'
            },
            "overview": {
                "text": "The EBCOG Maternal Medicine Diploma provides a rigorous and comprehensive training in maternal medicine, addressing the full spectrum of normal and complicated pregnancies. This program is structured to empower healthcare professionals with advanced skills and knowledge to manage and improve outcomes in both labor and delivery and maternal medical disorders.",
                "title": "Why Train with Us?",
                "reasons": [
                    {
                        "heading": "Expert Faculty",
                        "description": "Learn from leading specialists with global experience."
                    },
                    {
                        "heading": "Facilities",
                        "description": "Get trained on advance equipments with latest techniques."
                    },
                    {
                        "heading": "Career Advancement",
                        "description": "Gain credentials that elevate your professional standing and expertise."
                    }
                ]
            },
            "curriculum": {
                "curriculumSections": [
                    {
                        "items": [
                            "Fundamentals of Fertility",
                            "Diagnosing and Understanding Causes of Infertility",
                            "Treatment Strategies",
                            "Assisted Reproductive Techniques",
                            "Advanced Topics and Ethical Considerations ",
                        ]
                    },
                ]
            },
            "faculty": [
                {
                    "id": "p-0005RPI",
                    "name": "Prof. Basil C. Tarlatzis",
                    "role": "Lead",
                    "description": "Emeritus Professor at the School of Medicine, Aristotle University of Thessaloniki, Greece. Past President of EBCOG, ESH RE, IFFS.",
                    "image": "/faculty7.png"
                },
                {
                    "id": "p-0005RPI",
                    "name": "Prof. Stratics Kolibianakis",
                    "description": "Professor at the Medical School of Aristotle University of Thessaloniki, Greece, and leads the Unit for Human Reproduction. Served as the Chair of the Special Interest Groups Committee of ESH RE from 2017 to 2019.",
                    "image": "/faculty8.png"
                },
                {
                    "id": "p-0005RPI",
                    "name": "Dr. Edgar Mocanu",
                    "description": "Consultant Obstetrician and Gynecologist at the Rotunda Hospital in Dublin, Ireland. Honorary Clinical Associate Professor at the Royal College of Surgeons in Ireland (RCSI). Currently serves as President of the Federation of Fertility Societies (IFFS).",
                    "image": "/faculty9.png"
                },
                {
                    "id": "p-0005RPI",
                    "name": "Dr. Karunakara Marikinti",
                    "description": "Practiced in the UK, holding significant roles at institutions such as Leeds University, Kent and Canterbury, and Cambridge. Pioneering work at IVF center in Cambridge, alongside Nobel Prize-winning Professor Robert Edwards.",
                    "image": "/faculty10.png"
                },
                {
                    "id": "p-0005RPI",
                    "name": "Dr. Rajalaxmi Walavalkar",
                    "description": "Medical Director and IVF Consultant at Cocoon Fertility Pvt Ltd, Member of the MRCOG and the Certificate of Completion of Training (CCT).",
                    "image": "/faculty11.png"
                },
                {
                    "id": "p-0005RPI",
                    "name": "Dr. Anagha Karkhanis",
                    "description": "Director and Consultant Gynecologist at Cocoon Fertility Pvt Ltd,Certifications from the DRCOG and MRCPI Memberships of FOGSI, MOGS, and ESH RE",
                    "image": "/faculty11B.png"
                }
            ],
            "faqs": [
                {
                    "question": "1. What is the focus of the Reproductive Endocrinology and Fertility course?",
                    "answer": "This course provides advanced training in reproductive endocrinology and infertility, covering diagnostic and therapeutic approaches to managing infertility and hormonal disorders. It emphasizes both clinical and laboratory aspects of fertility treatment."
                },
                {
                    "question": "2. Who is eligible to apply for the course?",
                    "answer": "The course is designed for obstetricians, gynecologists, and healthcare professionals specializing in reproductive medicine. Applicants with experience or training in gynecology and endocrinology are encouraged to apply."
                },
                {
                    "question": "3. What topics are covered in the course?",
                    "answer": "Topics include the evaluation and management of infertility, advanced assisted reproductive technologies (ART), hormonal disorders affecting reproduction, polycystic ovary syndrome (PCOS), and strategies for preserving fertility in cancer patients."
                },
                {
                    "question": "4. What are the key learning objectives?",
                    "answer": "Participants will gain expertise in diagnosing and managing infertility and reproductive endocrine disorders, develop advanced skills in ART, and understand evidence-based approaches to optimizing patient outcomes in reproductive medicine."
                },
                {
                    "question": "5. How is the course delivered?",
                    "answer": "The course combines theoretical lectures, case-based discussions, hands-on training in ART techniques, and practical exposure to fertility clinics and labs. Faculty members include experienced specialists in reproductive endocrinology and fertility."
                },
                {
                    "question": "6. Is there an assessment or certification upon completion?",
                    "answer": "Yes, participants are assessed through written tests and practical evaluations. Successful candidates receive a certificate recognized by EBCOG (European Board and College of Obstetrics and Gynaecology) and DHA (Dubai Health Authority)."
                },
                {
                    "question": "7. What are the benefits of completing this course?",
                    "answer": "The course equips participants with specialized skills in reproductive endocrinology and infertility, making them highly qualified to handle complex cases. Certification enhances professional credibility and opens new career opportunities in reproductive medicine."
                },
                {
                    "question": "8. How long is the course, and what is the schedule like?",
                    "answer": "Applicants will receive detailed information on timelines and session formats upon enrollment or by contacting the course organizers."
                },
                {
                    "question": "9. What resources are available to support learning during the course?",
                    "answer": "Participants gain access to state-of-the-art reproductive labs, training simulators for ART, a library of educational materials, and mentorship from leaders in the field."
                },
                {
                    "question": "10. How can I apply for the course?",
                    "answer": "Applications can be made online via the official course website. Candidates are required to submit their medical qualifications, CV, and any additional supporting documents."
                },
                {
                    "question": "11. Are there any prerequisites for taking this course?",
                    "answer": "A background in obstetrics, gynecology, or endocrinology is recommended. Prior experience in managing fertility or hormonal disorders will enhance the learning experience."
                },
                {
                    "question": "12. How much does the course cost, and are there any financial aid options?",
                    "answer": "The course fee details are available on the official program website or upon inquiry. Financial aid or sponsorship opportunities may be available for eligible participants."
                }
            ]
        },
        {
            "id": "gynaecology-endoscopy",
            "courseName": 'Diploma in Gynaecology Endoscopy',
            "duration": '1 week',
            "learners": "156",
            "lessons": '20',
            "cardData": {
                // "course": 'Gynaecology Endoscopy By Dr Helder Ferreira',
                "facultyName": 'Dr. Helder Ferreira',
                "courseDuration": '1 Week',
                "totalLearners": "156",
                "facultyImage": '/if10.png'
            },
            "overview": {
                "text": "The EBCOG Maternal Medicine Diploma provides a rigorous and comprehensive training in maternal medicine, addressing the full spectrum of normal and complicated pregnancies. This program is structured to empower healthcare professionals with advanced skills and knowledge to manage and improve outcomes in both labor and delivery and maternal medical disorders.",
                "title": "Why Train with Us?",
                "reasons": [
                    {
                        "heading": "Expert Faculty",
                        "description": "Learn from leading specialists with global experience."
                    },
                    {
                        "heading": "Facilities",
                        "description": "Get trained on advance equipments with latest techniques."
                    },
                    {
                        "heading": "Career Advancement",
                        "description": "Gain credentials that elevate your professional standing and expertise."
                    }
                ]
            },
            "curriculum": {
                "curriculumSections": [
                    {
                        "title": "Introduction to Gynaecology Endoscopy",
                        "items": [
                            "Core Skills and Techniques",
                            "Operational Foundations",
                            "Hysteroscopy Focus"
                        ]
                    },
                    {
                        "title": "Operative Laparoscopy for Benign Conditions ",
                        "items": [
                            "Surgical Techniques and Patient Care ",
                            "Practical Skills Development ",
                        ]
                    },
                    {
                        "title": "Advanced Operative Techniques",
                        "items": [
                            "Complex Surgical Procedures",
                            "Advanced Simulation Training"
                        ]
                    },
                    {
                        "title": "Managing Complications in Laparoscopic Surgery",
                        "items": [
                            "Intraoperative Challenges ",
                            "Practical Skills Development ",
                        ]
                    },
                    {
                        "title": "From classroom to real cases",
                        "items": [
                            "Case Presentations and Discussions",
                            "Real-Life Case Scenarios and Expert Panel Discussions"
                        ]
                    },
                ]
            },
            "faculty": [
                {
                    "id": "p-0010GE",
                    "name": "Dr. Helder Ferreira",
                    "role": "Lead",
                    "description": "Head Minimally Invasive Gynaecologic Surgery Unit at Centro Hospitalar Universitario de Santo Antonio in Porto, Portugal. Member of the European Society for Gynaecological Endoscopy (ESGE), Chairman of the Young Endoscopists Platform (YEP) and as a member of the ESGE Executive Board.",
                    "image": "/faculty12.png"
                },
                {
                    "id": "p-0010GE",
                    "name": "Dr. Istvan Argay",
                    "description": "Chief Mentor of the Diploma Centre and Course Director at the European Academy of Gynecological Surgery (EAGS) in Leuven, Belgium.",
                    "image": "/faculty13.png"
                },
                {
                    "id": "p-0010GE",
                    "name": "Dr. Munna Talaak",
                    "description": "Dr. Muna Tahlak Chief Executive Officer of Latifa Hospital for Women and Children in Dubai President of the International Hospital Federation (IHF) Chief Medical Officer of the Dubai Academic Health Corporation and Vice Provost of Clinical Practice at the Mohammed Bin Rashid University of Medicine and Health Sciences.",
                    "image": "/faculty14.png"
                },
                {
                    "id": "p-0010GE",
                    "name": "Dr. Sandesh Kade",
                    "description": "Gynecologist and laparoscopic surgeon Burjeel Medical City in Abu Dhabi. Member of the American Association of Gynecological Laparoscopists (AAGL), the Federation of Obstetrics and Gynecology Society of India (FOGSI), and the Indian Association of Gynecological Endoscopists (IAGE).",
                    "image": "/faculty15.png"
                },
                {
                    "id": "p-0010GE",
                    "name": "Dr. Alan Abdallah",
                    "description": "Obstetrician & Gynaecologist Emirates Hospital L.L.C in Jumeirah, Dubai and Emirates Speciality Hospital Fz-Llc in Dubai Healthcare City, Dubai",
                    "image": "/faculty16.png"
                }
            ],
            "faqs": [
                {
                    "question": "1. What is the focus of the Gynaecological Endoscopy course?",
                    "answer": "This course emphasizes advanced training in gynaecological endoscopy, including diagnostic and therapeutic techniques in minimally invasive surgery. It aims to enhance skills in managing a range of gynaecological conditions using endoscopic procedures."
                },
                {
                    "question": "2. Who is eligible to apply for the course?",
                    "answer": "The course is designed for gynecologists, surgeons, and healthcare professionals specializing in gynaecological surgery. Applicants should have a background in Gynecology and a basic understanding of endoscopic procedures."
                },
                {
                    "question": "3. What topics are covered in the course?",
                    "answer": "The curriculum includes laparoscopic and hysteroscopic procedures, management of endometriosis, fibroids, ovarian cysts, and minimally invasive approaches to gynaecological cancers. Training also includes operative techniques, safety protocols, and advancements in endoscopic technology."
                },
                {
                    "question": "4. What are the key learning objectives?",
                    "answer": "Participants will gain expertise in performing advanced gynaecological endoscopic surgeries, learn about the latest technologies in minimally invasive surgery, and develop skills for diagnosing and managing complex gynaecological conditions effectively."
                },
                {
                    "question": "5. How is the course delivered?",
                    "answer": "The course integrates theoretical lectures, live surgical demonstrations, firsthand training with simulators, and case-based discussions. It is led by experienced endoscopic surgeons and trainers in gynaecological surgery."
                },
                {
                    "question": "6. Is there an assessment or certification upon completion?",
                    "answer": "Yes, participants are assessed through practical evaluations and/or theoretical exams. Upon successful completion, a certificate recognized by EBCOG (European Board and College of Obstetrics and Gynaecology) and DHA (Dubai Health Authority) is awarded."
                },
                {
                    "question": "7. What are the benefits of completing this course?",
                    "answer": "This course provides participants with advanced surgical skills in gynaecological endoscopy, positioning them as specialists in minimally invasive procedures. Certification adds significant value to professional credentials and career opportunities in gynaecological surgery."
                },
                {
                    "question": "8. How long is the course, and what is the schedule like?",
                    "answer": "Full details regarding the timetable and format are provided upon acceptance into the program or can be obtained by contacting the course coordinators."
                },
                {
                    "question": "9. What resources are available to support learning during the course?",
                    "answer": "Participants have access to endoscopic surgical simulators, video libraries of procedures, case discussions, and guidance from mentors experienced in gynaecological endoscopy."
                },
                {
                    "question": "10. How can I apply for the course?",
                    "answer": "Applications are submitted online through the official program portal. Prospective participants need to provide their qualifications, professional experience, and any required supporting documents."
                },
                {
                    "question": "11. Are there any prerequisites for taking this course?",
                    "answer": "Applicants should have prior training or experience in Gynecology and a foundational knowledge of endoscopic techniques. This ensures they can fully engage with the advanced content of the course."
                },
                {
                    "question": "12. How much does the course cost, and are there any financial aid options?",
                    "answer": "Course fees are provided on the official website or by contacting the course administrators. Some financial aid or sponsorship opportunities may be available for eligible applicants."
                }
            ]
        },
        {
            "id": "fetal-medicine-and-ultrasound",
            "courseName": 'Diploma in Fetal Medicine and Ultrasound',
            "duration": '1 week',
            "learners": "15,674",
            "lessons": '20',
            "cardData": {
                "facultyName": 'Prof. Asma Khalil',
                "courseDuration": '1 Week',
                "totalLearners": "15,674",
                "facultyImage": '/if4.png'
            },
            "overview": {
                "text": "The EBCOG Maternal Medicine Diploma provides a rigorous and comprehensive training in maternal medicine, addressing the full spectrum of normal and complicated pregnancies. This program is structured to empower healthcare professionals with advanced skills and knowledge to manage and improve outcomes in both labor and delivery and maternal medical disorders.",
                "title": "Why Train with Us?",
                "reasons": [
                    {
                        "heading": "Expert Faculty",
                        "description": "Learn from leading specialists with global experience."
                    },
                    {
                        "heading": "Facilities",
                        "description": "Get trained on advance equipments with latest techniques."
                    },
                    {
                        "heading": "Career Advancement",
                        "description": "Gain credentials that elevate your professional standing and expertise."
                    }
                ]
            },
            "curriculum": {
                "curriculumSections": [
                    {
                        "title": "Fundamentals of Ultrasound Imaging",
                        "items": [
                            "Physics and technology behind ultrasound and Doppler imaging",
                            "Techniques for early pregnancy assessment and anomaly detection"
                        ]
                    },
                    {
                        "title": "Comprehensive Fetal Assessment",
                        "items": [
                            "Sono-embryology covering key organ systems",
                            "Detailed fetal biometry for accurate gestational age and growth estimation"
                        ]
                    },
                    {
                        "title": "Advanced Diagnostic Techniques",
                        "items": [
                            "In-depth exploration of fetal brain and facial anomalies",
                            "Specialized sessions on fetal echocardiography and prenatal genetic testing"
                        ]
                    },
                    {
                        "title": "Management of Fetal Conditions",
                        "items": [
                            "Strategies for managing intrauterine growth restriction, macrosomia, and fetal tumors",
                            "Insights into placental abnormalities and amniotic fluid assessment"
                        ]
                    },
                    {
                        "title": "Hands-On Procedures",
                        "items": [
                            "Training in ultrasound-guided invasive procedures such as amniocentesis and CVS",
                            "Operative fetoscopy and innovative techniques in prenatal therapy"
                        ]
                    },
                    {
                        "title": "Special Topics",
                        "items": [
                            "Application of AI in fetal cardiology",
                            "Handling of twin and multiple pregnancies, including complications like Twin-Twin Transfusion Syndrome"
                        ]
                    }
                ]
            },
            "faculty": [
                {
                    "id": "p-0004FMU",
                    "name": "Prof. Asma Khalil",
                    "role": "Lead",
                    "description": "Consultant Obstetrician and Fetal Medicine Specialist St George's Hospital London, United Kingdom VP Royal College of Obstetricians and Gynecologists",
                    "image": "/faculty17.png"
                },
                {
                    "id": "p-0004FMU",
                    "name": "Prof. Sebastian Kwiatkowski",
                    "description": "Consultant Obstetrician and Specialist Feto Maternal Medicine (Perinatology) Pomeranian Medical University, Szczecin, Poland Polish Delegate, European Board of Obstetrics and Gynaecology",
                    "image": "/faculty18.png"
                },
                {
                    "id": "p-0004FMU",
                    "name": "Prof. Karl Oliver Kagan",
                    "description": "Consultant in Fetal Medicine Department of Gynaecology and Obstetrics University ofTuebingen, Germany Prof. Justin Konje Professor of Obstetrics and Gynaecology Weill Cornell Medicine, Qatar Emeritus Professor of Obstetrics and Gynaecology University of Leicester, United Kingdom",
                    "image": "/faculty19.png"
                },
                {
                    "id": "p-0004FMU",
                    "name": "Prof. Justin Konje",
                    "description": "Professor of Obstetrics and Gynaecology Weill Cornell Medicine, Qatar Emeritus Professor of Obstetrics and Gynaecology University of Leicester, United Kingdom",
                    "image": "/faculty20.png"
                },
                {
                    "id": "p-0004FMU",
                    "name": "Prof. Ulrich Honemeyer",
                    "description": "Associate Professor Dubrovnik International University Honorary Professor Pirogov Russian National Research Medical University, Russia",
                    "image": "/faculty21.png"
                },
                {
                    "id": "p-0004FMU",
                    "name": "Prof. Samina Dornan",
                    "description": "l Zahra Hospital Dubai Consultant Obstetrician and Gynecologist Sub-specialist Maternal Fetal Medicine, CCT, United Kingdom",
                    "image": "/faculty22.png"
                }
            ],
            "faqs": [
                {
                    "question": "1. What is the focus of the Fetal Medicine and Ultrasound course?",
                    "answer": "This course covers in-depth knowledge and skills in fetal medicine and ultrasound, aimed at healthcare professionals who are interested in improving maternal and fetal outcomes. It emphasizes practical and theoretical training in diagnostic and therapeutic procedures related to fetal care.&nbsp;"
                },
                {
                    "question": "2. Who is eligible to apply for the course?",
                    "answer": "The course is designed for obstetricians, gynecologists, and other healthcare professionals specializing in fetal medicine and ultrasound. Applicants should have a background in obstetrics and gynecology or a related field to fully benefit from the curriculum."
                },
                {
                    "question": "3. What topics are covered in the course?",
                    "answer": "The curriculum includes essential topics such as prenatal screening, diagnosis of fetal anomalies, fetal growth restriction, multiple pregnancies, and advanced fetal ultrasound techniques. Therapeutic approaches, including fetal interventions, are also explored."
                },
                {
                    "question": "4. What are the key learning objectives?",
                    "answer": "Participants will gain a comprehensive understanding of fetal physiology, enhance their diagnostic ultrasound skills, and learn evidence-based management strategies for various fetal conditions. The course aims to prepare practitioners to make informed, high-quality clinical decisions in fetal medicine."
                },
                {
                    "question": "5. How is the course delivered?",
                    "answer": "The course combines lectures, hands-on, and case-based discussions. Interactive sessions focus on real-world applications of ultrasound techniques and fetal diagnosis, with opportunities to practice under the guidance of experienced instructors."
                },
                {
                    "question": "6. Is there an assessment or certification upon completion?",
                    "answer": "Yes, participants are assessed through practical exams and/or written tests. Upon successful completion, a certificate recognized by EBCOG (European Board and College of Obstetrics and Gynaecology) is awarded, enhancing professional credibility in fetal medicine and ultrasound. Along with Dubai Health Authority CME accreditation."
                },
                {
                    "question": "7. What are the benefits of completing this course?",
                    "answer": "Completing this course equips practitioners with advanced skills in fetal diagnosis and management, making them better prepared for complex cases in fetal medicine. The certification is also a significant credential for career advancement in maternal-fetal medicine.&nbsp;"
                },
            ]
        },]
    
    const handleEnroll = () =>{
        router.push('/registration');
    }

    
    useEffect(() => {
        if (courseId) {
            const diplomaCourse = data?.find(item => item.id === courseId);
            setcourseData(diplomaCourse || null);
        }
    }, [courseId]);

    if (!courseData) return <div className='min-h-[50rem] flex justify-center items-center'><CircularProgress style={{ color: '#E4087F' }} /></div>

    return (
        <div className='min-h-[70rem]'>
            <BreadCrumbs routes = {[{ name: 'Diploma Courses', href: '/', current: false },{ name: courseData?.courseName, href: courseData?.id, current: true }]}/>
            <div className='bg-[#290849] flex gap-8 xs:gap-0 flex-col-reverse xs:flex-row px-4 xs:px-8 xl:px-16 3xl:px-24 py-8 lg:py-12 justify-between text-white'>
                <div className='flex flex-col gap-4 w-[100%] xs:w-[47%] md:w-[60%] lg:w-auto'>
                    <h1 className='font-montserrat text-[24px] xs:text-[20px] sm:text-[28px] lg:text-[30px] xl:text-[36px] font-bold leading-[34px] xs:leading-[30px] sm:leading-[38px] lg:leading-[45px] md:w-[90%] xl:w-[84%]'>{courseData?.courseName}</h1>
                    <Button
                        label="Fees & Scholarships"
                        className="w-[12rem] sm:w-[16rem] lg:w-[20rem] py-1 lg:py-2 bg-[#E4087F] font-semibold text-white rounded-md hover:bg-[#ac0660]"
                    />
                    <div className='flex flex-col md:flex-row gap-2 md:gap-8 font-montserrat text-base font-medium leading-6 text-[#9D9D9D]'>
                        <div className='flex gap-1 xl:gap-2 items-center'><MdAccessTimeFilled className='text-[#EE7E22]' /> {courseData?.duration}</div>
                        <div className='flex gap-1 xl:gap-2 items-center'><RiGraduationCapFill className='text-[#EE7E22]' /> {courseData?.learners} Learners</div>
                        <div className='flex gap-1 xl:gap-2 items-center'><MdFileCopy className='text-[#EE7E22]' /> {courseData?.lessons} Lessons</div>
                    </div>
                </div>
                <div className='relative w-[100%] xs:w-[51%] sm:w-[46%] md:w-[32%] lg:w-[30%] xl:w-[26%] 2xl:w-[24%] 3xl:w-[22%]'>
                    <div className='md:absolute w-[100%] top-0 rounded-[20px] overflow-hidden'>
                        <InternationalFacultyCard data={courseData?.cardData} btn_label="Enroll" handleClick={handleEnroll} />
                    </div>
                </div>
            </div>
            <div className='px-4 xs:px-8 xs:pr-8 md:pr-0 xl:pl-16 3xl:pl-24 py-4 xs:py-8 sm:py-12 w-[100%] md:w-[64%] lg:w-[68%] xl:w-[70%]'>
                <CourseTabSection courseData={courseData} />
            </div>
        </div>
    )
}

export default DiplomaCourse