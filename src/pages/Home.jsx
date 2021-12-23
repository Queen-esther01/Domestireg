import React from 'react'
import Aboutus from '../components/home/Aboutus'
import Slider from '../components/home/Slider'
import Header from '../components/reusable/Header'

function Home() {
    return (
        <>
            <Header/>
            <Slider/>
            <Aboutus/>
        </>
    )
}

export default Home
