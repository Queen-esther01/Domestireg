import React from 'react'
import ContactDetails from '../components/contactus/ContactDetails'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'

const breadcrumbs =
    {
        previous: 'Home',
        previousLink: '/',
        current: 'Contact us'
    }

function ContactUs() {
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='contact-us-hero text-white' />
            <ContactDetails/>
            <Footer/>
        </>
    )
}

export default ContactUs
