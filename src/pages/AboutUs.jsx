import React from 'react'
import Info from '../components/aboutus/Info'
import OurStory from '../components/aboutus/OurStory'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'

const breadcrumbs = [
    {
        previous: 'Home',
        previousLink: '/',
        current: 'About us'
    }
]
function AboutUs() {
    return (
        <>
            <Header/>
            <Hero heading={'About us'} breadcrumbs={breadcrumbs}/>
            <Info/>
            <OurStory/>
        </>
    )
}

export default AboutUs
