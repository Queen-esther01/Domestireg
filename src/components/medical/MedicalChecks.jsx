import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nanny from '../../assets/images/nanny.jpg'
import Divider from '../reusable/Divider'
import Icons from '../reusable/Icons'
import Driver from '../../assets/images/driver.jpg'
import Chef from '../../assets/images/chef.jpg'

function MedicalChecks() {
    return (
        <>
            <Container fluid='lg'>
                <Row className='justify-content-md-center pt-5 service-container'>
                    <Col xs={12} sm={6} md={4} className='my-3'>
                        <div className="bouquet-image position-relative ">
                            <img src={Nanny} alt="nanny" className='w-100 h-100 object-fit-cover' />
                            <Icons icon='shopping-cart' className={'p-3 cart-icon pointer'} size='50' style={{ background: 'white', position: 'absolute', right: 0 }}/>
                        </div>
                        <div className="text-center my-3">
                            <p>Nanny & Househelp Medical Check</p>
                            <h5 className='text-pink'>&#8358;10,000</h5>
                        </div>
                        <Divider styles={{ width: '150px' }}/>
                        <p className='mt-2 text-center'>
                            <Link to='/medical-bouquet' className='remove-link-color font-bold text-decoration-none'>
                                Select service
                                <Icons icon='chevrons-right'/>
                            </Link>
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='my-3'>
                        <div className="bouquet-image position-relative ">
                            <img src={Driver} alt="man-driving-a-car" className='w-100 h-100 object-fit-cover' />
                            <Icons icon='shopping-cart' className={'p-3 cart-icon pointer'} size='50' style={{ background: 'white', position: 'absolute', right: 0 }}/>
                        </div>
                        <div className="text-center my-3">
                            <p>Driver & Security Guard Medical Check</p>
                            <h5 className='text-pink'>&#8358;10,000</h5>
                        </div>
                        <Divider styles={{ width: '150px' }}/>
                        <p className='mt-2 text-center'>
                            <Link to='/medical-bouquet' className='remove-link-color font-bold text-decoration-none'>
                                Select service
                                <Icons icon='chevrons-right'/>
                            </Link>
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={4} className='my-3'>
                        <div className="bouquet-image position-relative ">
                            <img src={Chef} alt="woman-preparing-food" className='w-100 h-100 object-fit-cover' />
                            <Icons icon='shopping-cart' className={'p-3 cart-icon pointer'} size='50' style={{ background: 'white', position: 'absolute', right: 0 }}/>
                        </div>
                        <div className="text-center my-3">
                            <p>Chef Medical Check</p>
                            <h5 className='text-pink'>&#8358;10,000</h5>
                        </div>
                        <Divider styles={{ width: '150px' }}/>
                        <p className='mt-2 text-center'>
                            <Link to='/medical-bouquet' className='remove-link-color font-bold text-decoration-none'>
                                Select service
                                <Icons icon='chevrons-right'/>
                            </Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MedicalChecks
