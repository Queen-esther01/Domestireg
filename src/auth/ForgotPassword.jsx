import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'


const breadcrumbs = 
    {
        previous: 'Home',
        previousLink: '/',
        current: 'Reset password'
    }

function ForgotPassword() {
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='register-hero text-white'/>
            <Container fluid='lg'>
                <div className="register-form py-4">
                    <div className="mb-4">
                        <h5>Forgot password</h5>
                        <p className='text-grey mt-3'> Please enter your username. You will receive a link to create a new password via email.</p>
                    </div>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="" className='' />
                    </Form.Group>
                    <button className=' mb-4 border-0 w-100 rounded bg-pink text-white py-3'>
                        Recover account
                    </button>
                    <div className="">
                        Don't have an account? <Link to='/register' className='remove-link-color text-decoration-none text-blue'>Register</Link>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default ForgotPassword
