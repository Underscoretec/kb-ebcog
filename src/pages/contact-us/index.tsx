import CommonLayout from '@/common/layouts/CommonLayout'
import ContactUs from '@/container/contactUs/ContactUs'
import React, { ReactElement } from 'react'

const ContactPage = () => {
    return (
        <>
            <ContactUs />
        </>
    )
}

export default ContactPage

ContactPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <CommonLayout>
            {page}
        </CommonLayout>
    )
}