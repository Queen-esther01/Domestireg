import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import Woman from '../../assets/images/contact-us-lady.jpg'
import Bonike from '../../assets/images/founder.png'
import Divider from '../reusable/Divider'
import Icons from '../reusable/Icons'

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
                            <h2 className='about-us-heading fancy-font'>We would love to hear from you</h2>
                            <p className='about-us-text'>Please reach out to us using the contact details below, we are always available to help with your screening needs</p>
                            <div className='my-5'>
                                <h6 className='font-xs mb-3'>OUR LOCATION</h6>
                                <div className="d-flex">
                                    <Icons icon='map-pin' />
                                    <p className=''>&nbsp; 13 Allan Street, Agungi, Lekki, Lagos.</p>
                                </div>
                            </div>
                            <div className=''>
                                <h6 className='font-xs mb-3'>CONTACT INFORMATION</h6>
                                <div className="d-flex">
                                    <Icons icon='phone' />
                                    <span className=''>&nbsp; +234 818 838 6357</span>
                                </div>
                                <div className="d-flex align-items-center mt-2">
                                    <Icons icon='mail' />
                                    <span className=''>&nbsp; admin@domestireg.com</span>
                                </div>
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
