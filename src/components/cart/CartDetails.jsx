import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EmptyCart from '../../assets/images/empty-cart.png'
import Divider from '../reusable/Divider'
import Icons from '../reusable/Icons'

function CartDetails() {
    return (
        <>
            <Container fluid='lg'>
                <div className='text-center mt-5 pt-5'>
                    <div className="m-auto" style={{ width: '80px'}}>
                        <img src={EmptyCart} alt="" className='w-100 h-100 object-fit-cover' />
                    </div>
                    <p className='font-md mt-4'>Your cart is currently empty</p>
                    <button className='border-0 rounded text-white bg-pink px-3 py-2'>
                        <Link to='/' className='remove-link-color text-decoration-none'>Return to home </Link>
                    </button>
                </div>
                <div className="pt-5 cart-wrapper">
                    <Row>
                        <Col xs={12} sm={6} md={6} className='mt-3 cart-item-container'>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Position - <span className="font-bold"> Driver/security guard </span> </p>
                                <Icons icon='x-circle' className={'text-grey'}/>
                            </div>
                            <Divider styles={{ width: '100%' }}/>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Service</p>
                                <h6>Medical check</h6>
                            </div>
                            <Divider styles={{ width: '100%' }}/>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Price</p>
                                <h6>&#8358; 10,000</h6>
                            </div>
                            <Divider styles={{ width: '100%', border: '1px solid black' }}/>
                        </Col>
                        <Col xs={12} sm={6} md={6} className='my-3 cart-item-container'>
                            <div className='px-3 py-4' style={{ border: '2px solid lightgrey'}}>
                                <h4 className='mb-3'>Cart Total</h4>
                                <Divider styles={{ width: '100%' }}/>
                                <div className="my-3 d-flex justify-content-between align-items-center">
                                    <p>Total</p>
                                    <h6>&#8358; 10,000</h6>
                                </div>
                                <button className='rounded w-100 border-0 bg-pink text-white py-2'>Checkout</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default CartDetails
