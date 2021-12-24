import React from 'react'
import { Form, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login({ open, onClose }) {

    if(!open) return null
    return (
        <>
            <Modal show={open} onHide={onClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton className='px-4'>
                    <Modal.Title className='' id="contained-modal-title-vcenter">
                        Sign in
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-4 mb-2'>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address or username</Form.Label>
                        <Form.Control type="email" placeholder="Your name" className='' />
                    </Form.Group>
                    <Form.Group className="mb-4" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Email address" className='' />
                    </Form.Group>
                    <button className=' mb-4 border-0 w-100 rounded bg-pink text-white py-3'>
                        Login
                    </button>
                    <div className="d-flex justify-content-between">
                        <Link to='/forgot-password' className='remove-link-color text-decoration-none text-blue'>Lost your password?</Link>
                        <Link to='/register' className='remove-link-color text-decoration-none text-blue'>Create an account</Link>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login
