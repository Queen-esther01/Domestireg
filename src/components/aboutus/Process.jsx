import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Icons from '../reusable/Icons'

function Process() {
    return (
        <>
            <Container fluid='lg'>
                <Row className='align-items-center'>
                    <Col xs={12} lg={6}>
                        <Row>
                            <Col xs={12} sm={6} md={6}>
                                <div className='shadow-lg text-center py-4 px-2 mt-5 about-us-process' >
                                    <Icons icon='shopping-cart' size={60} className={'text-pink bg-light-pink p-3 mb-3 rounded-circle'} />
                                    <h6>Pick a service</h6>
                                    <p className='text-grey'>Choose from a list of service bouquet and select your preferred check.</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6}>
                                <div className='shadow-lg text-center py-4 px-2 mt-5 about-us-process' >
                                    <Icons icon='shopping-cart' size={60} className={'text-pink bg-light-pink p-3 mb-3 rounded-circle'} />
                                    <h6>Register Domestics</h6>
                                    <p className='text-grey'>Fill the datails of the domestic staff intended to undergo the selected tests.</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6}>
                                <div className='shadow-lg text-center py-4 px-2 mt-5 about-us-process'>
                                    <Icons icon='shopping-cart' size={60} className={'text-pink bg-light-pink p-3 mb-3 rounded-circle'} />
                                    <h6>Secured Payment</h6>
                                    <p className='text-grey'>Pay for the preferred service selected through our secure payment options.</p>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={6}>
                               <div className='shadow-lg text-center py-4 px-2 mt-5 about-us-process'>
                                    <Icons icon='shopping-cart' size={60} className={'text-pink bg-light-pink p-3 mb-3 rounded-circle'} />
                                    <h6>Get Result</h6>
                                    <p className='text-grey'>Get detailed and verified check results within the proposed timeline.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} lg={6}>
                        <div className='our-story-description mt-5'>
                            <span className='about-us-tagline'>Why we do what we do</span>
                            <p className='about-us-text'>At Domestireg we understand hiring a stranger into your home an be quite daunting and sometimes downright hairy, knowing an applicant applicants identity is an incredibly critical part of the employment screening process. Navigating the information to ensure the safety of your family and loved ones is critical, as such we are proud to offer a variety of services to help you do this easily.</p>
                            <p className='about-us-text'>We help you make decisions on hiring the right person faster ,we deliver medical and criminal background checks and real time results as they are available ,accelerate communication between third parties and leverage mobile first technology to speed the decision making time.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Process
