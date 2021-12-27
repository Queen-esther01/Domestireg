import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Woman from '../../assets/images/woman-in-office.jpg'
import Balloons from '../../assets/images/balloons.png'

function Choice() {
    return (
        <>
            <Container fluid='lg'>
                <Row className='my-5 align-items-center'>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='about-us-description'>
                            <span className='about-us-tagline'>Why choose us</span>
                            <h2 className='about-us-heading'>What makes us different</h2>
                            <p className='about-us-text'>We partner with you to design a plans that fits your needs, or help you choose from our pre-bundled packages.</p>
                            <p className='about-us-text'>Our customer service team is standing by to answer any screening, compliance, or how-to questions that either you or your candidates have, and we keep you both updated about the status of your checks, vets & enquiries.</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className='about-us-image-container mx-auto'>
                            <img src={Balloons} className='w-100 h-100 object-fit-cover object-position-center' alt="smiling-lady" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Choice
