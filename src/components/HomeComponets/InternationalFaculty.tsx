import InternationalFacultyCard from '@/components/HomeComponets/InternationalFacultyCard'
import React from 'react'
import router from 'next/router';

const InternationalFaculty = () => {

  const FacultyData = [
    {
      id: "p-0001GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Alan Abdallah',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if1.png',
      AboutLink: '#'
    },
    {
      id: "p-0002MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Dr. Amala Nazareth',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if2.png',
      AboutLink: '#'
    },
    {
      id: "p-0003REI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Anagha Karkhanis',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if3.png',
      AboutLink: '#'
    },
    {
      id: "p-0004FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Dr. Asma Khalil',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if4.png',
      AboutLink: '#'
    },
    {
      id: "p-0005RPI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Prof. Basil C. Tarlatzis (Lead)',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if5.png',
      AboutLink: '#'
    },
    {
      id: "p-0006MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Chittaranjan N. Purandare',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if6.png',
      AboutLink: '#'
    },
    {
      id: "p-0007MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Diogo Ayres de Campos',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if7.png',
      AboutLink: '#'
    },
    {
      id: "p-0008REI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Edgar Mocanu',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if8.png',
      AboutLink: '#'
    },
    {
      id: "p-0009MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Frank Louwen (Lead)',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if9.png',
      AboutLink: '#'
    },
    {
      id: "p-0010GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Helder Ferreira',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if10.png',
      AboutLink: '#'
    },
    {
      id: "p-0024GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Hugo Rodrigues Gaspar',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if24.png',
      AboutLink: '#'
    },
    {
      id: "p-0011GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Istvan Argay',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if11.png',
      AboutLink: '#'
    },
    {
      id: "p-0012FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Justin Konje',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if12.png',
      AboutLink: '#'
    },
    {
      id: "p-0013FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Karl Oliver Kagan',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if13.png',
      AboutLink: '#'
    },
    {
      id: "p-0014REI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Karunakara Marikinti',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if15.png',
      AboutLink: '#'
    },
    {
      id: "p-0015MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Dr. Komal Chavan',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if14.png',
      AboutLink: '#'
    },
    {
      id: "p-0016GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Prof. Munna Talak',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if16.png',
      AboutLink: '#'
    },
    {
      id: "p-0017REI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Dr. Rajalaxmi Walavalkar',
      courseDuration: '1 week',
      totalLearners: '154',
      facultyImage: '/if17.png',
      AboutLink: '#'
    },
    {
      id: "p-006FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Samina Dornan',
      courseDuration: '1 week',
      totalLearners: '156',
      facultyImage: '/if22.png',
      AboutLink: '#'
    },
    {
      id: "p-0021GE",
      course: "Diploma in Gynaecology Endoscopy",
      facultyName: 'Dr. Sandesh Kade',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if20.png',
      AboutLink: '#'
    },
    {
      id: "p-0022FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Sebastian Kwiatkowski',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if21.png',
      AboutLink: '#'
    },
    {
      id: "p-0019MM",
      course: "Diploma in Maternal Medicine",
      facultyName: 'Prof. Stephen Rulisa',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if18.png',
      AboutLink: '#'
    },
    {
      id: "p-0020RFI",
      course: "Diploma in Reproductive Endocrinology & Infertility",
      facultyName: 'Prof. Stratics kolibianakis',
      courseDuration: '1 week',
      totalLearners: '15,674',
      facultyImage: '/if19.png',
      AboutLink: '#'
    },
    {
      id: "p-0007FMU",
      course: "Diploma in Fetal Medicine and Ultrasound",
      facultyName: 'Prof. Ulrich Honemeyer',
      courseDuration: '1 week',
      totalLearners: '156',
      facultyImage: '/if23.png',
      AboutLink: '#'
    },
  ]

  const handleClick = (id: string) => {
    router.push(`/${id}`);
  };

  return (
    <div className='px-4 xs:px-8 xl:px-16 3xl:px-24 py-12 md:py-16'>
      <div className='text-[#290849] font-oswald text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] 2xl:text-[55px] font-normal leading-[32px] sm:leading-[45px] 2xl:leading-[54px] mb-6 xs:mb-8 lg:mb-12'>Popular EBCOG Diploma Faculties</div>
      <div className='flex flex-wrap gap-3 xs:gap-1 sm:gap-3 xl:gap-5'>
        {FacultyData.map((item, index) => {
          return (
            <div key={index} className='w-[100%] xs:w-[49%] sm:w-[48.5%] md:w-[32%] lg:w-[24%] xl:w-[23.5%] 3xl:w-[24%]'>
              <InternationalFacultyCard key={index} data={item} btn_label="Know More" handleClick={() => handleClick(item?.id)} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InternationalFaculty