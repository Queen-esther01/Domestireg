import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Loader from '../components/reusable/Loader';
import toast from 'react-hot-toast';
import { resetState, userForgotPassword } from '../store/actions/authActions'

const breadcrumbs = {
    previous: 'Home',
    previousLink: '/',
    current: 'Reset password'
}

function ForgotPassword() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const schema = yup.object({
        email: yup.string().email().required()
    }).required();

    const { register, handleSubmit, watch, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        dispatch(userForgotPassword(data))
    }

    //GET FORGOT PASSWORD RESPONSE DATA
    const response = useSelector(state => state.user)
    const { forgotPassword, loading } = response
    console.log(forgotPassword)

    useEffect(() => {
        if(forgotPassword.code === 200){
            toast.success('Password reset link has been sent to your email!')
        }
        else if(forgotPassword.code === 401){
            toast.error('Your account has not been verified, please verify to continue.', {
                id: 'verify',
            })
            dispatch(resetState())
            navigate('/verify', {
                state: { email: watch('email') },
            })
        }
    }, [forgotPassword, watch ])

    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='register-hero text-white'/>
            <Container fluid='lg'>
                <div className="register-form py-4">
                    <div className="mb-4">
                        <h5>Forgot password</h5>
                        <p className='text-grey mt-3'> Please enter your email address. You will receive a link to create a new password via email.</p>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mt-3" >
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" {...register('email')} isInvalid={!!errors.email} placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.email?.message}
                        </Form.Text>
                        <button className=' my-4 border-0 w-100 rounded bg-pink text-white py-3'>
                            { loading ? <Loader/> : 'Recover account' }
                        </button>
                    </Form>
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
