import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Woman from '../../assets/images/contact-us-lady.jpg'
import Bonike from '../../assets/images/founder.png'
import Divider from '../reusable/Divider'

function ContactDetails() {
    return (
        <>
            <Container fluid='lg'>
                <Row className='my-5'>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <div className='about-us-image-container mx-auto'>
                            <img src={Woman} className='w-100 h-100 object-fit-cover object-position-center' alt="smiling-lady" />
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={7} >
                        <div className='about-us-description'>
                            <span className='about-us-tagline'></span>
                            <h2 className='about-us-heading'>We would love to hear from you</h2>
                            <p className='about-us-text'>Please reach out to us using the contact details below, we are always available to help with your screening needs</p>
                            <div className='mt-5'>
                                <h6 className='font-xs mb-3'>OUR LOCATION</h6>
                                <p className=''>13 Allan Street, Agungi, Lekki</p>
                            </div>
                            <div className='mt-5'>
                                <h6 className='font-xs mb-3'>CONTACT INFORMATION</h6>
                                <span className=''>(434) 546-4356</span>
                                <p className='mt-1'>admin@domestireg.com</p>
                            </div>
                        </div>
                        <Divider styles={{  width: '100%', margin: '40px 0 0 0' }}/>
                        <Form className='contact-us-form'>
                            <h3 className='my-4 pt-2 pb-3'>Leave a message</h3>
                            <Form.Group className="my-4 form-group" >
                                <Form.Control type="text" placeholder="Your name" className='' />
                            </Form.Group>
                            <Form.Group className="mb-4 form-group" >
                                <Form.Control type="email" placeholder="Email address" className='' />
                            </Form.Group>
                            <Form.Group className="mb-4 form-group" >
                                <Form.Control type="tel" placeholder="Phone number" className='' />
                            </Form.Group>
                            <Form.Group className="mb-4 form-group" >
                                <Form.Control type="text" placeholder="Subject" className='' />
                            </Form.Group>
                            <Form.Group className="mb-3 form-group">
                                <Form.Control as="textarea" rows={3} placeholder='Type in your message here' />
                            </Form.Group>
                            <button className='button-primary mt-3' type="submit">
                                Submit
                            </button>
                        </Form>
                    </Col>
                    
                </Row>
                
            </Container>
        </>
    )
}

export default ContactDetails
