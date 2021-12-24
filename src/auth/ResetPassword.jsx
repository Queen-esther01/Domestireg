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
        current: 'Recover account'
    }
function ResetPassword() {
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='register-hero text-white'/>
            <Container fluid='lg'>
                <div className="register-form py-4">
                    <div className="mb-4">
                        <h4>Reset password</h4>
                        <p className='text-grey mt-3'> Please enter your new password</p>
                    </div>
                    <Form.Group className="mb-4" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" className='' />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="" className='' />
                    </Form.Group>
                    <button className=' mb-4 border-0 w-100 rounded bg-pink text-white py-3'>
                        Reset password
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

export default ResetPassword
