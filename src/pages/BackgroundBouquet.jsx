import React from 'react'
import BackgroundChecks from '../components/medical/BackgroundChecks'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'

const breadcrumbs = {
    previous: 'Home',
    previousLink: '/',
    current: 'Background Bouquet'
}

function BackgroundBouquet() {
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='medical-hero text-white' />
            <BackgroundChecks/>
            <Footer/>
        </>
    )
}

export default BackgroundBouquet