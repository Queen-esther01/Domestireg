import React, { useEffect }  from 'react'
import { Container } from 'react-bootstrap'
import Aboutus from '../components/home/Aboutus'
import Choice from '../components/home/Choice'
import Footer from '../components/reusable/Footer'
import Howitworks from '../components/home/Howitworks'
import ServiceBouquets from '../components/home/ServiceBouquets'
import Slider from '../components/home/Slider'
import Testimonial from '../components/home/Testimonial'
import Divider from '../components/reusable/Divider'
import Header from '../components/reusable/Header'
import { getBouquets } from '../store/actions/bouquetActions'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'


function Home() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBouquets())
    }, [dispatch])

    const data = useSelector(state => state.bouquet)
    const { bouquets } = data
    //console.log(bouquets)

    return (
        <>
            <Header bouquets={bouquets}/>
            <Slider/>
            <Aboutus/>
            <Howitworks/>
            <Container>
                <Divider styles={{ width: '100%' }}/>
            </Container>
            <ServiceBouquets bouquets={bouquets}/>
            <Testimonial/>
            <Choice/>
            <Footer/>
        </>
    )
}

export default Home
