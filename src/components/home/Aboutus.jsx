import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Woman from '../../assets/images/smiling-woman.jpg'
import Fingerprint from '../../assets/images/fingerprint.png'
import Bonike from '../../assets/images/founder.png'

function Aboutus() {
    return (
        <>
            <Container fluid='lg'>
                <Row className='my-5 align-items-center'>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='about-us-image-container mx-auto'>
                            <img src={Fingerprint} className='w-100 h-100 object-fit-cover object-position-top' alt="smiling-lady" />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='about-us-description'>
                            <span className='about-us-tagline'>A few words about us</span>
                            <h2 className='about-us-heading'>With you every step of the way</h2>
                            <p className='about-us-text'>We partner with you to design a plans that fits your needs, or help you choose from our pre-bundled packages.</p>
                            <p className='about-us-text'>Our customer service team is standing by to answer any screening, compliance, or how-to questions that either you or your candidates have, and we keep you both updated about the status of your checks, vets & enquiries.</p>
                            <div className='d-flex align-items-center'>
                                <div className='founder-image-container'>
                                    <img src={Bonike} className='w-100 h-100 rounded-circle object-fit-cover object-position-top' alt="Bonike Thomas-Ojo" />
                                </div>
                                <div className='founder-details mt-4 ms-3'>
                                    <h5>'Bonike Thomas-Ojo</h5>
                                    <p>Founder - <span> Domestireg </span> </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Aboutus
