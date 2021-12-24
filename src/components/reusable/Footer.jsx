import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Domestireg.png'
import Divider from './Divider'
import Icons from './Icons'

function Footer() {
    return (
        <>
            <div className='footer-container py-3 text-white'>
                <Container>
                    <Row>
                        <Col xs={12} md={4} lg={3} className='mt-4'>
                            {/* <div className="logo-container">
                                <img src={Logo} alt="domestireg" className='w-100 h-100' />
                            </div>
                            <p>Domestireg is a tested and trusted company, we vet and check so you don't have to.</p> */}
                            <div className="contact-container">
                                <Icons icon='headphones' className='text-pink' size={50} />
                                <div className='contact-details'>
                                    <span>Available 24/7</span>
                                    <h5 className='text-pink mt-1'>(434) 546-4356</h5>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={4} lg={2} className='mt-4 social-icon-container'>
                            <span className='d-block mb-1'>Follow us</span>
                            <Icons icon='facebook' className='text-pink me-2' fill='deeppink' size={20} />
                            <Icons icon='twitter' className='text-pink mx-2' fill='deeppink' size={20} />
                            <Icons icon='instagram' className='text-pink mx-2' size={20} />
                        </Col>
                    </Row>
                    <Divider styles={{ borderBottom: '1px solid #ffffff3a', marginTop: '50px', width: '100%' }}/>
                </Container>
                
                <Container>
                    <Row>
                        <Col xs={12} md={4} lg={3} className='mt-4 address-container'>
                            <h5 className='mb-2'>Location</h5>
                            <span>13 Allan Street, Agungi, Lekki</span>
                            <p><Link to='#' className='remove-link-color'> admin@domestireg.com </Link> </p>
                        </Col>
                        <Col xs={12} md={3} lg={2} className='mt-4 social-icon-container'>
                            <h5 className='mb-3'>Navigation</h5>
                            <p>Home</p>
                            <p><Link to='/about-us' className='remove-link-color text-decoration-none'>About us</Link></p>
                            <p><Link to='/contact-us' className='remove-link-color text-decoration-none'>Contact us</Link></p>
                        </Col>
                        <Col xs={12} md={4} lg={2} className='my-4 social-icon-container'>
                            <h5 className='mb-3'>Privacy</h5>
                            <p>Terms & Conditions</p>
                        </Col>
                    </Row>
                    <p className='mt-5'>Copyright &copy; <span className="fancy-font">Domestireg.</span> All Rights Reserved </p>
                </Container>
            </div>
        </>
    )
}

export default Footer
