import React from 'react'
import MedicalAddons from '../components/medical/MedicalAddons'
import MedicalChecks from '../components/medical/MedicalChecks'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'

const breadcrumbs = {
    previous: 'Home',
    previousLink: '/',
    current: 'Medical Bouquet'
}

function MedicalBouquet() {
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='medical-hero text-white' />
            <MedicalChecks/>
            <MedicalAddons/>
            <Footer/>
        </>
    )
}

export default MedicalBouquet
