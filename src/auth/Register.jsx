import React, { useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Login from './Login'
import Hero from '../components/reusable/Hero'

function Register() {
    const [showLoginModal, setshowLoginModal] = useState(false)

    const handleLoginModal = () =>{
        setshowLoginModal(!showLoginModal)
    }

    const breadcrumbs = 
    {
        previous: 'Home',
        previousLink: '/',
        current: 'Create account'
    }

    return (
        <>
            <Login open={showLoginModal} onClose={handleLoginModal}/>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='register-hero text-white'/>
            <Container fluid='lg'>
                <div className="register-form py-4">
                    <div className="mb-4">
                        <h5>Register</h5>
                        <p className='text-grey mt-3'>Create your account. It's free and only takes a minute</p>
                    </div>
                    <Form.Group className="mb-3" >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="" className='' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="" className='' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="" className='' />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="" className='' />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="" className='' />
                    </Form.Group>
                    <button className=' mb-4 border-0 w-100 rounded bg-pink text-white py-3'>
                        Create account
                    </button>
                    <div className="">
                        Already have an account? <Link to='#' onClick={handleLoginModal} className='remove-link-color text-decoration-none text-blue'>Sign in</Link>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default Register
