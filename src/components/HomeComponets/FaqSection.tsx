import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const FaqSection = () => {

    const faqs = [
        {
            question: "1. What are the EBCOG Diplomas?",
            answer: "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "2. Who are these diplomas designed for?",
            answer: "The diplomas are designed for obstetricians, gynecologists, and other healthcare professionals who wish to gain specialized expertise in these fields. Applicants should have relevant medical qualifications and experience to maximize their learning."
        },
        {
            question: "3. What topics are covered in the diploma programs?",
            answer: "Each diploma focuses on its specific area:",
            subItems: [
                'Fetal Medicine and Ultrasound: Advanced Fetal diagnosis and ultrasound techniques.',
                'Maternal Medicine: Managing medical conditions in pregnancy.',
                'Gynaecological Endoscopy: Minimally invasive gynaecological surgical procedures.',
                'Reproductive Endocrinology and Infertility: Infertility treatments and reproductive hormonal disorders.'
            ]
        },
        {
            question: "4. What are the key benefits of obtaining an EBCOG Diploma?",
            answer: "The diplomas offer advanced clinical training, practical expertise, and recognition by EBCOG. They enhance professional credentials and career opportunities in specialized fields of obstetrics and gynaecology.",
        },
        {
            question: "5. How are the diploma programs structured?",
            answer: "The programs combine theoretical knowledge, case-based learning, firsthand workshops, and possible mentorship from experts. Each diploma includes practical training relevant to its specialization.",
        },
        {
            question: "6. Is there an assessment or certification for the diplomas?",
            answer: "Yes, participants must complete written and/or practical assessments to earn their diplomas. Certification is recognized by EBCOG and DHA.",
        },
        {
            question: "7. What is the duration of each diploma program?",
            answer: "Specific timelines and schedules are provided during the application process or upon inquiry.",
        },
        {
            question: "8. What resources are provided during the programs?",
            answer: "Participants receive access to simulation, case studies, and expert mentorship (one on one interaction) tailored to their chosen diploma.",
        },
        {
            question: "9. How can I apply for an EBCOG Diploma?",
            answer: "Applications can be submitted online via the EBCOG portal. Required documents include proof of medical qualifications, a professional short CV, and any other specified credentials.",
        },
        {
            question: "10. What are the eligibility requirements for these diplomas?",
            answer: "Applicants should have a background in obstetrics, gynaecology, or a related field. Some diplomas may require prior clinical experience in their respective specializations.",
        },
        {
            question: "11. Are the diplomas suitable for international applicants?",
            answer: "Yes, the diplomas are internationally recognized and suitable for candidates worldwide. The training and certification adhere to global standards.",
        },
        {
            question: "12. Can I enroll in more than one diploma program?",
            answer: "Yes, candidates can choose to enroll in multiple diploma programs sequentially, depending on their professional goals and schedules.",
        },
        {
            question: "13. What is the significance of EBCOG certification?",
            answer: "EBCOG certification signifies a high standard of expertise and training in obstetrics and gynaecology. It is recognized internationally and adds value to a professional’s qualifications.",
        },
    ]

    return (
        <div className="bg-[#F9FAFB]" id='faq'>
            <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="flex justify-center text-[50px] font-oswald tracking-tight text-[#290849] sm:text-[55px]">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq, index) => (
                            <Disclosure key={faq.question} as="div" className="pt-6" defaultOpen={index === 0}>
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-20px font-montserrat text-black">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <MdKeyboardArrowDown aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MdKeyboardArrowUp aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-16px font-montserrat text-[#6B7280]">{faq.answer}</p>
                                    {faq.subItems?.length ? (
                                        <ul className="pl-6 mt-2 list-disc">
                                            {faq.subItems.map((item, index) => (
                                                <li key={index} className="text-16px font-montserrat text-[#6B7280]">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : null}
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default FaqSection