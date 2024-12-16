import React from 'react'
import FacultyCard from './FacultyCard'

const FacultySection = () => {

    const CoursesFaculty = [
        {
            "id": 0,
            "name": "Maternal Medicine",
            "faculties": [
                {
                    "id": "MM1",
                    "facultyName": "Prof. Frank Louwen",
                    "Role": "Lead",
                    "about": "Head of the Division of Obstetrics and Fetomaternal Medicine at the University Hospital Frankfurt, Goethe University. President of EBCOG & President-Elect FIGO",
                    "image": "/faculty1.png"
                },
                {
                    "id": "MM2",
                    "facultyName": "Prof. Diogo Ayres de Campos",
                    "about": "Chair of the Department of Obstetrics and Gynecology at the Medical School of the University of Lisbon, Portugal. He leads the Department of Obstetrics and Gynecology at Santa Maria University Hospital in Lisbon. Co-invented the Omniview - Sis-Porto® and has served as President of the EAPM and as an Executive Committee Member of the EBCOG.",
                    "image": "/faculty2.png"
                },
                {
                    "id": "MM3",
                    "facultyName": "Prof. Chittaranjan N. Purandare",
                    "about": "Purandare Hospital, served as the President of FIGO and FOGSI and has also been the Dean of the ICOG and the Emeritus Editor for the Journal of Obstetrics and Gynecology of India.",
                    "image": "/faculty3.png"
                },
                {
                    "id": "MM4",
                    "facultyName": "Prof. Stephen Rulisa",
                    "about": "Professor in the Department of Obstetrics and Gynecology at the University of Rwanda. Serving as the Chair of the ECSACOG & National Chair of the MPDSR.",
                    "image": "/faculty4.png"
                },
                {
                    "id": "MM5",
                    "facultyName": "Dr. Amala Nazareth",
                    "about": "Hon. Secretary General AFCOG Obstetrician and Gynecologist Prime Health Group, UAE.",
                    "image": "/faculty5.png"
                },
                {
                    "id": "MM6",
                    "facultyName": "Dr. Komal Chavan",
                    "about": "Senior Consultant, Unit Chief, DNB Teacher V N Desai Hospital, Mumbai Medical Director, Consultant - Chavan Maternity & Nursing Home, Maharashtra, India. Vice President Elect FOGSI 2025.",
                    "image": "/faculty6.png"
                }
            ]
        },
        {
            "id": 1,
            "name": "Reproductive Endocrinology & Infertility",
            "faculties": [
                {
                    "id": "REI1",
                    "facultyName": "Prof. Basil C. Tarlatzis",
                    "Role": "Lead",
                    "about": "Emeritus Professor at the School of Medicine, Aristotle University of Thessaloniki, Greece. Past President of EBCOG, ESHRE, IFFS",
                    // "about": "Professor Emeritus of Obstetrics-Gynecology and Human Reproduction",
                    "image": "/faculty7.png"
                },
                {
                    "id": "REI2",
                    "facultyName": "Prof. Stratics Kolibianakis",
                    "about": "Professor at the Medical School of Aristotle University of Thessaloniki, Greece, and leads the Unit for Human Reproduction. Served as the Chair of the Special Interest Groups Committee of ESH RE from 2017 to 2019.",
                    "image": "/faculty8.png"
                },
                {
                    "id": "REI3",
                    "facultyName": "Dr. Edgar Mocanu",
                    "about": "Consultant Obstetrician and Gynecologist at the Rotunda Hospital in Dublin, Ireland. Honorary Clinical Associate Professor at the Royal College of Surgeons in Ireland (RCSI). Currently serves as President of the Federation of Fertility Societies (IFFS).",
                    "image": "/faculty9.png"
                },
                {
                    "id": "REI4",
                    "facultyName": "Dr. Karunakara Marikinti",
                    "about": "Practiced in the UK, holding significant roles at institutions such as Leeds University, Kent and Canterbury, and Cambridge. Pioneering work at IVF center in Cambridge, alongside Nobel Prize-winning Professor Robert Edwards.",
                    "image": "/faculty10.png"
                },
                {
                    "id": "REI5",
                    "facultyName": "Dr. Rajalaxmi Walavalkar",
                    "about": "Medical Director and IVF Consultant at Cocoon Fertility Pvt Ltd, Member of the MRCOG and the Certificate of Completion of Training (CCT).",
                    "image": "/faculty11.png"
                },
                {
                    "id": "REI6",
                    "facultyName": "Dr. Anagha Karkhanis",
                    "about": "Director and Consultant Gynecologist at Cocoon Fertility Pvt Ltd, Certifications from the DRCOG and MRCPI Memberships of FOGSI, MOGS, and ESHRE",
                    "image": "/faculty11B.png"
                }
            ]
        },
        {
            "id": 2,
            "name": "Gynaecology Endoscopy",
            "faculties": [
                {
                    "id": "GE1",
                    "facultyName": "Dr. Helder Ferreira",
                    "Role": "Lead",
                    "about": "Head Minimally Invasive Gynaecologic Surgery Unit at Centro Hospitalar Universitario de Santo Antonio in Porto, Portugal. Member of the European Society for Gynaecological Endoscopy (ESGE), Chairman of the Young Endoscopists Platform (YEP) and as a member of the ESGE Executive Board.",
                    "image": "/faculty12.png"
                },
                {
                    "id": "GE2",
                    "facultyName": "Dr. Istvan Argay",
                    "about": "Chief Mentor of the Diploma Centre and Course Director at the European Academy of Gynecological Surgery (EAGS) in Leuven, Belgium.",
                    "image": "/faculty13.png"
                },
                {
                    "id": "GE3",
                    "facultyName": "Dr. Hugo Rodrigues Gaspar",
                    "about": "Specialist in Obstetrics and Gynecology Hospital Particular da Madeira and Madeira Medical Center Grupo HPA Saúde network Madeira, Portugal",
                    "image": "/faculty23.png"
                },
                {
                    "id": "GE4",
                    "facultyName": "Dr. Munna Talaak",
                    "about": "Chief Executive Officer of Latifa Hospital for Women and Children in Dubai, President of the International Hospital Federation (IHF), Chief Medical Officer of the Dubai Academic Health Corporation and Vice Provost of Clinical Practice at the Mohammed Bin Rashid University of Medicine and Health Sciences.",
                    "image": "/faculty14.png"
                },
                {
                    "id": "GE5",
                    "facultyName": "Dr. Sandesh Kade",
                    "about": "Gynecologist and laparoscopic surgeon, Burjeel Medical City in Abu Dhabi. Member of the American Association of Gynecological Laparoscopists (AAGL), the Federation of Obstetrics and Gynecology Society of India (FOGSI), and the Indian Association of Gynecological Endoscopists (IAGE).",
                    "image": "/faculty15.png"
                },
                {
                    "id": "GE6",
                    "facultyName": "Dr. Alian Abdallah",
                    "about": "Obstetrician & Gynaecologist Emirates Hospital L.L.C in Jumeirah, Dubai and Emirates Speciality Hospital Fz-Llc in Dubai Healthcare City, Dubai",
                    "image": "/faculty16.png"
                }
            ]
        },
        {
            "id": 3,
            "name": "Fetal Medicine and Ultrasound",
            "faculties": [
                {
                    "id": "FMU1",
                    "facultyName": "Prof. Asma Khalil",
                    "Role": "Lead",
                    "about": "Consultant Obstetrician and Fetal Medicine Specialist, St George's Hospital London, United Kingdom VP, Royal College of Obstetricians and Gynecologists",
                    "image": "/faculty17.png"
                },
                {
                    "id": "FMU2",
                    "facultyName": "Prof. Sebastian Kwiatkowski",
                    "about": "Consultant Obstetrician and Specialist, Feto Maternal Medicine (Perinatology), Pomeranian Medical University, Szczecin, Poland, Polish Delegate, European Board of Obstetrics and Gynaecology",
                    "image": "/faculty18.png"
                },
                {
                    "id": "FMU3",
                    "facultyName": "Prof. Karl Oliver Kagan",
                    "about": "Consultant in Fetal Medicine, Department of Gynaecology and Obstetrics, University of Tuebingen, Germany",
                    "image": "/faculty19.png"
                },
                {
                    "id": "FMU4",
                    "facultyName": "Prof. Justin Konje",
                    "about": "Professor of Obstetrics and Gynaecology Weill Cornell, Medicine, Qatar, Emeritus Professor of Obstetrics and Gynaecology, University of Leicester, United Kingdom",
                    "image": "/faculty20.png"
                },
                {
                    "id": "FMU5",
                    "facultyName": "Prof. Ulrich Honemeyer",
                    "about": "Associate Professor, Dubrovnik International University, Honorary Professor, Pirogov Russian National Research Medical University, Russia",
                    "image": "/faculty21.png"
                },
                {
                    "id": "FMU6",
                    "facultyName": "Prof. Samina Dornan",
                    "about": "AL Zahra Hospital Dubai, Consultant Obstetrician and Gynecologist, Sub-specialist Maternal Fetal Medicine, CCT, United Kingdom",
                    "image": "/faculty22.png"
                }
            ]
        }
    ]

    return (
        <div className='bg-[#290849] text-white px-4 xs:px-8 py-10 md:py-16 xl:p-16 3xl:p-24' id='diplomas'>
            <h1 className='font-oswald text-[35px] xs:text-[40px] md:text-[48px] xl:text-[55px] font-normal leading-[40px] xs:leading-[54px] text-center mb-10 xl:mb-14'>Diploma Leads and Faculty</h1>
            <div className='flex justify-between gap-12 sm:gap-3 2xl:gap-4 flex-wrap'>
                {CoursesFaculty.map((item, index) => {
                    return (<div key={index} className='w-[100%] sm:w-[48%] md:w-[49%] lg:w-[24%] flex flex-col gap-3 xs:gap-5 sm:gap-4 lg:gap-3 2xl:gap-5'>
                        <div className='w-full flex'>
                            <div className='bg-[#F7B7D3] text-[#302F80] p-2 rounded-tr-[50px] rounded-br-[50px] w-[88%] xl:w-[80%] font-montserrat text-sm font-bold leading-5 h-12 xs:h-16 flex items-center'>{item.name}</div>
                            <div className='w-[12%] xl:w-[20%] flex justify-center items-center'>
                                <div className='border-t border-[#888888] w-[99%]'></div>
                                <div className='border-l border-[#888888] h-[40%] w-[2%]'></div>
                            </div>
                        </div>
                        {item.faculties.length > 0 &&
                            item.faculties.map((faculty, i) => {
                                return (
                                    <FacultyCard key={i} faculty={faculty}/>
                                );
                            })}
                    </div>)
                })}
            </div>
        </div>
    )
}

export default FacultySection