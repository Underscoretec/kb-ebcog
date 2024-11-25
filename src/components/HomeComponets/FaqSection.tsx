import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const FaqSection = () => {

    const faqs = [
        {
            question: "1. What are the EBCOG Diplomas?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "2. Who are these diplomas designed for?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "3. What topics are covered in the diploma programs?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "4. What are the key benefits of obtaining an EBCOG Diploma?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "5. How are the diploma programs structured?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "6. Is there an assessment or certification for the diplomas?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "7. What is the duration of each diploma program?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "8. What resources are provided during the programs?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "9. How can I apply for an EBCOG Diploma?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "10. What are the eligibility requirements for these diplomas?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "11. Are the diplomas suitable for international applicants?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "12. How much do the diploma programs cost, and are financial aid    options available?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "13. Can I enroll in more than one diploma program?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
        {
            question: "14. What is the significance of EBCOG certification?",
            answer:
                "The EBCOG Diplomas are specialized programs in key areas of obstetrics and gynaecology: Fetal Medicine and Ultrasound, Maternal Medicine, Gynaecological Endoscopy, and Reproductive Endocrinology and Infertility. Each diploma focuses on advanced clinical and practical skills in its respective field.",
        },
    ]

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:py-10 lg:px-8 lg:py-16 bg-[#F9FAFB]">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="flex justify-center text-[50px] font-oswald tracking-tight text-[#290849] sm:text-[55px]">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq,index) => (
                            <Disclosure key={faq.question} as="div" className="pt-6" defaultOpen={index === 0}>
                                <dt>
                                    <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                                        <span className="text-20px font-Montserrat text-black">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            <MdKeyboardArrowDown aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                            <MdKeyboardArrowUp aria-hidden="true" className="size-6 [.group:not([data-open])_&]:hidden" />
                                        </span>
                                    </DisclosureButton>
                                </dt>
                                <DisclosurePanel as="dd" className="mt-2 pr-12">
                                    <p className="text-16px font-Montserrat text-[#6B7280]">{faq.answer}</p>
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