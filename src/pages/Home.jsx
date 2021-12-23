import React from 'react'
import { Container } from 'react-bootstrap'
import Aboutus from '../components/home/Aboutus'
import Choice from '../components/home/Choice'
import Footer from '../components/home/Footer'
import Howitworks from '../components/home/Howitworks'
import ServiceBouquets from '../components/home/ServiceBouquets'
import Slider from '../components/home/Slider'
import Testimonial from '../components/home/Testimonial'
import Divider from '../components/reusable/Divider'
import Header from '../components/reusable/Header'

function Home() {
    return (
        <>
            <Header/>
            <Slider/>
            <Aboutus/>
            <Howitworks/>
            <Container>
                <Divider styles={{ width: '100%' }}/>
            </Container>
            <ServiceBouquets/>
            <Testimonial/>
            <Choice/>
            <Footer/>
        </>
    )
}

export default Home
