import React, { useEffect } from 'react'
import { Alert, Col, Container, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Woman from '../../assets/images/contact-us-lady.jpg'
//import Bonike from '../../assets/images/founder.png'
import Divider from '../reusable/Divider'
import Icons from '../reusable/Icons'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Loader from '../reusable/Loader'
import { resetState, userContactAdmin } from '../../store/actions/authActions'
import toast from 'react-hot-toast'


function ContactDetails() {

    const dispatch = useDispatch()

    const schema = yup.object({
        name: yup.string().required(),
        phone: yup.string().min(11).required(),
        email: yup.string().email().required(),
        subject: yup.string().required(),
        message: yup.string().required(),
    }).required();

    const { register, handleSubmit, watch, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        dispatch(userContactAdmin(data))
    }

    //GET RESPONSE DATA
    const response = useSelector(state => state.user)
    const { contact, loading } = response
    console.log(contact)


    useEffect(() => {
        if(contact.data){
            setTimeout(() => {
                reset()
                dispatch(resetState())
            }, 3000)
        }
        else if(contact.code === 401){
            dispatch(resetState())
        }
    }, [contact, watch, reset ])

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
                                    <span className=''>
                                        <a className='text-decoration-none' href='tel:+234 818 838 6357'>
                                            &nbsp; +234 818 838 6357
                                        </a>
                                    </span>
                                </div>
                                <div className="d-flex align-items-center mt-2">
                                    <Icons icon='mail' />
                                    <span className=''>  
                                        <a className='text-decoration-none' href='mailto:admin@domestireg.com'>
                                            &nbsp;&nbsp;admin@domestireg.com
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Divider styles={{  width: '100%', margin: '40px 0 0 0' }}/>
                        <Form onSubmit={handleSubmit(onSubmit)} className='contact-us-form'>
                            <h3 className='my-4 pt-2 pb-3'>Leave a message</h3>
                            { contact.data && <Alert variant='success'>Your message has been sent successfully. We will reach out to you as soon as possible.</Alert> }
                            <Form.Group className="mt-4 form-group" >
                                <Form.Control {...register('name')} isInvalid={!!errors.name} type="text" placeholder="Your name" className='' />
                            </Form.Group>
                            <Form.Text className="text-red mb-3">
                                {errors.name?.message}
                            </Form.Text>
                            <Form.Group className="mt-4 form-group" >
                                <Form.Control {...register('email')} isInvalid={!!errors.email} type="email" placeholder="Email address" className='' />
                            </Form.Group>
                            <Form.Text className="text-red mb-3">
                                {errors.email?.message}
                            </Form.Text>
                            <Form.Group className="mt-4 form-group" >
                                <Form.Control {...register('phone')} isInvalid={!!errors.phone} type="tel" placeholder="Phone number" className='' />
                            </Form.Group>
                            <Form.Text className="text-red mb-3">
                                {errors.phone?.message}
                            </Form.Text>
                            <Form.Group className="mt-4 form-group" >
                                <Form.Control {...register('subject')} isInvalid={!!errors.subject} type="text" placeholder="Subject" className='' />
                            </Form.Group>
                            <Form.Text className="text-red mb-3">
                                {errors.subject?.message}
                            </Form.Text>
                            <Form.Group className="mt-4 form-group">
                                <Form.Control {...register('message')} isInvalid={!!errors.message} as="textarea" rows={3} placeholder='Type in your message here' />
                            </Form.Group>
                            <Form.Text className="text-red mb-3">
                                {errors.message?.message}
                            </Form.Text>
                            <div>
                                <button className='button-primary mt-3' type="submit">
                                    { loading ? <Loader/> : 'Submit' }
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactDetails
