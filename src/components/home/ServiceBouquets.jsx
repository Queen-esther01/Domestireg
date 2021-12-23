import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Medical from '../../assets/images/medical-check.jpg'
import Background from '../../assets/images/background-check.jpg'
import Icons from '../reusable/Icons'

function ServiceBouquets() {
    return (
        <>
            <Container fluid='lg'>
                <div className='py-5 mt-5 text-center'>
                    <h2 className='fancy-font'>Service Bouquets</h2>
                    <h3>Select your preferred service bouquet</h3>
                    <Row className='justify-content-md-center mt-4'>
                        <Col xs={12} sm={6} lg={5}>
                            <div className='medicals-image-container mx-auto'>
                                <img src={Medical} className='w-100 h-100 object-fit-cover object-position-top' alt="smiling-lady" />
                            </div>
                            <div className='mt-3'>
                                <h5>Medical Check</h5>
                                <p className='mt-2'>
                                    <Link to='#'>
                                        Select option
                                        <Icons icon='chevrons-right'/>
                                    </Link>
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} lg={5}>
                            <div className='medicals-image-container mx-auto'>
                                <img src={Background} className='w-100 h-100 object-fit-cover object-position-top' alt="smiling-lady" />
                            </div>
                            <div className='mt-3'>
                                <h5>Background & Criminal Check</h5>
                                <p className='mt-2'>
                                    <Link to='#'>
                                        Select option
                                        <Icons icon='chevrons-right'/>
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default ServiceBouquets
