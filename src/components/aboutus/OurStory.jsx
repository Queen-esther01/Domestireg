import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Domestireg from '../../assets/images/domestireg-d.png'
import Bonike from '../../assets/images/founder.png'


function OurStory() {
    return (
        <>
            <Container fluid='lg'>
                <Row className='my-5 py-5 align-items-center'>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='our-story-image-container mx-auto'>
                            <img src={Domestireg} className='w-100 h-100 object-fit-cover object-position-top' alt="smiling-lady" />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='our-story-description'>
                            <span className='about-us-tagline'>Our Story</span>
                            <h6 className='mb-3 lh-large'>As a domestic employer myself and a Human Resource director for over 20 years dealing with personnel and asking investigative questions comes naturally, I realized many of us were less stringent and careful when hiring into our homes.</h6>
                            <p className='about-us-text'>We must register, report and warn others from hiring these people,we could save many from harm, the trauma of theft, living with a potentially infectious or dangerous person and create awareness within the community, it was with this passion Domestireg was started</p>
                            <p className='about-us-text'>We support this with our strong committmet to customer service ,timeliness,legal compliance all delivered via innovative technology Many Providers will claim to be exactly what you are looking for By choosing DOMESTIREG you can be confident we will get it right every time.</p>
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

export default OurStory
