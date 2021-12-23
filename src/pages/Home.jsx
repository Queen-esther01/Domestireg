import React from 'react'
import Aboutus from '../components/home/Aboutus'
import Howitworks from '../components/home/Howitworks'
import ServiceBouquets from '../components/home/ServiceBouquets'
import Slider from '../components/home/Slider'
import Divider from '../components/reusable/Divider'
import Header from '../components/reusable/Header'

function Home() {
    return (
        <>
            <Header/>
            <Slider/>
            <Aboutus/>
            <Howitworks/>
            <Divider/>
            <ServiceBouquets/>
        </>
    )
}

export default Home
