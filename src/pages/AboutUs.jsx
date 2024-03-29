import React from 'react'
import Info from '../components/aboutus/Info'
import OurStory from '../components/aboutus/OurStory'
import Process from '../components/aboutus/Process'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'

const breadcrumbs = 
    {
        previous: 'Home',
        previousLink: '/',
        current: 'About us'
    }

function AboutUs() {
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='about-us-hero text-white' />
            <Info/>
            <OurStory/>
            <Process/>
            <Footer/>
        </>
    )
}

export default AboutUs
