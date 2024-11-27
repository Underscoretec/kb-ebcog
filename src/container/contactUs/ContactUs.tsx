import React from 'react'
import BreadCrumbs from '@/common/uicomponents/BreadCrumbs'
import AddressMap from '@/components/Contact/AddressMap'
import ContactForm from '@/components/Contact/ContactForm'


const ContactUs = () => {
    return (
        <div>
            <BreadCrumbs routes={[{ name: 'Contact us', href: '/contact-us', current: true }]} />
            <AddressMap />
            <ContactForm />
        </div>
    )
}

export default ContactUs