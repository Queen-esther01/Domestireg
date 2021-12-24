import React from 'react'
import BackgroundChecks from '../components/medical/BackgroundChecks'
import MedicalAddons from '../components/medical/MedicalAddons'
import MedicalChecks from '../components/medical/MedicalChecks'
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
            {/* <MedicalChecks/>
            <MedicalAddons/> */}
            <Footer/>
        </>
    )
}

export default BackgroundBouquet