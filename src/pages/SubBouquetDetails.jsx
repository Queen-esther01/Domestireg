import React, { useEffect, useState } from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'
import Background from '../assets/images/background-check.jpg'
import { addItemToCart, resetState } from '../store/actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/reusable/Loader'
import toast from 'react-hot-toast'
import cookie from 'react-cookies'
import Login from '../auth/Login'


const breadcrumbs = {
    previous: 'Subbouquet',
    previousLink: '/subbouquet',
    current: 'Service details'
}

function SubBouquetDetails() {

    const [showLoginModal, setshowLoginModal] = useState(false)

    const dispatch = useDispatch()
    const location = useLocation()
    //console.log(location)

    const serviceDetails = location.state.info

    //console.log(serviceDetails)
    const token = cookie.load('dreg')

    const addServiceToCart = (service) => {
        const data = {
            cartItems: {
                subbouquet_id: service._id
            }
        }
        //console.log(service)
        if(token === undefined){
            toast.error('Please login to add item to cart')
            setshowLoginModal(true)
        }
        else{
            dispatch(addItemToCart(data))
        }
    }


    const cart = useSelector(state => state.cart)
    const { addToCartSucceeded, addToCartFailed, addToCartLoading } = cart
    console.log(addToCartSucceeded)
    console.log(addToCartLoading)


    useEffect(() => {
        if(addToCartSucceeded.error === false){

            toast.success(`${serviceDetails.name} has been added to cart.`, {
                id: 'cart-success',
            })

            setTimeout(() => {
                dispatch(resetState())
            }, 1000)
        }
        else if(addToCartFailed.error === true){
            toast.error(addToCartFailed.message)
            dispatch(resetState())
        }
    }, [addToCartSucceeded, addToCartFailed])

    

    return (
        <>
            <Login open={showLoginModal} onClose={()=>setshowLoginModal(false)}/>
            <Header />
            <Hero breadcrumb={breadcrumbs} extraStyle='medical-hero text-white'/>
                <Container fluid='lg'>
                    <Row className='justify-content-md-evenly pt-5 mt-1'>
                        <Col xs={12} sm={6} md={6} lg={6}>
                            <div className='service-container mt-4'>
                                <img src={ Background } className='rounded-img service-details-image w-100 h-100 object-fit-cover ' alt={serviceDetails.title}/>
                            </div>
                        </Col>
                        {/* <Container>
                            <Divider />
                        </Container> */}
                        
                        <Col xs={12} sm={6} md={5} lg={5} className=''>
                            <div className='my-4 service-container'>
                                <Badge bg="info" className='mb-3 py-2'>Starts after payment</Badge>
                                <h4 className=''>{serviceDetails.name}</h4>
                                <h3 className='text-pink font-bold my-3' >&#8358;{serviceDetails.price.toLocaleString('en')}</h3>
                                { serviceDetails.details && <p className="text-grey">{serviceDetails.details}</p> }
                                <h6>Checks included:</h6>
                                <ul>
                                    {
                                        serviceDetails.description.map((test, index) => {
                                            return <li key={index} className='text-grey'>{test} </li>
                                        })
                                    }
                                </ul>
                                <div>
                                    <button className=' mt-2 button-primary' onClick={()=>addServiceToCart(serviceDetails)}>
                                        { addToCartLoading ? <Loader/> : 'Add to cart' }
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            <Footer/>
        </>
    )
}

export default SubBouquetDetails
