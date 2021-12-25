import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Login from './Login'
import Hero from '../components/reusable/Hero'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Icons from '../components/reusable/Icons'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser, resetState } from '../store/actions/authActions'
import Loader from '../components/reusable/Loader'
import toast from 'react-hot-toast'



function Register() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [inputType, setinputType] = useState('password')
    const [confirmPasswordType, setconfirmPasswordType] = useState('password')
    const [confirmPassword, setconfirmPassword] = useState()
    const [showLoginModal, setshowLoginModal] = useState(false)
    const [passwordMismatch, setpasswordMismatch] = useState(false)


    const handleLoginModal = () =>{
        setshowLoginModal(!showLoginModal)
    }

    const breadcrumbs =  {
        previous: 'Home',
        previousLink: '/',
        current: 'Create account'
    }

    const schema = yup.object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        phone: yup.string().min(11).required(),
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        address: yup.string().required(),
    }).required();

    const { register, handleSubmit, watch, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    //SHOW PASSWORD VALUES
    const togglePasswordVisibility = () =>{
        inputType === 'password' ? setinputType('text') : setinputType('password')
    }

    //SHOW CONFIRM PASSWORD VALUES
    const toggleConfirmPasswordVisibility = () =>{
        confirmPasswordType === 'password' ? setconfirmPasswordType('text') : setconfirmPasswordType('password')
    }

    //GET CONFIRMED PASSWORD
    const getConfirmPassword = (e) =>{
        setconfirmPassword(e.target.value)
    }

    const onSubmit = data => {
        console.log(data);
        if(data.password !== confirmPassword) {
            setpasswordMismatch(true)
            return false
        }
        else{
            setpasswordMismatch(false)
            dispatch(registerUser(data))
        }
    }

    //GET REGISTER RESPONSE DATA
    const registerResponse = useSelector(state => state.user)
    const { registration, loading } = registerResponse
    console.log(registration)

    

    useEffect(() => {
        if(registration.data){

            toast.success('Registration successful. Please sign in verify your account.')

            setTimeout(() => {
                dispatch(resetState())
                setshowLoginModal(true)
                // navigate('/login', {
                //     state: {email: watch('email') }
                // })
            }, 1000)
        }
        else if(registration.code === 401){
            toast.error('Sorry, this user already exists.')
            resetState()
        }
    }, [registration, watch ])

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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="" >
                            <Form.Label>First Name</Form.Label>
                            <Form.Control {...register('firstname')} isInvalid={!!errors.firstname} type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.firstname?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control {...register('lastname')} isInvalid={!!errors.lastname}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.lastname?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control {...register('email')} isInvalid={!!errors.email} type="email" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.email?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control {...register('phone')} isInvalid={!!errors.phone} type="tel" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.phone?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>House Address</Form.Label>
                            <Form.Control {...register('address')} isInvalid={!!errors.address} type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.address?.message}
                        </Form.Text>
                        <Form.Group className="mt-3 position-relative" >
                            <Form.Label>Password</Form.Label>
                            <Form.Control {...register('password')} isInvalid={!!errors.password} type={inputType} placeholder="" className='' />
                            {
                                <p onClick={togglePasswordVisibility} className='pointer position-absolute' style={{ right: 10, bottom: '-9px' }} >
                                    {inputType === 'password' ? <Icons icon='eye-off'/> : <Icons icon='eye'/>}
                                </p>
                            }
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.password?.message}
                        </Form.Text>
                        <Form.Group className="mt-3 position-relative" >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onChange={getConfirmPassword} type={confirmPasswordType} placeholder="" className='' />
                            {
                                <p onClick={toggleConfirmPasswordVisibility} className='pointer position-absolute' style={{ right: 10, bottom: '-9px' }}>
                                    {confirmPasswordType === 'password' ? <Icons icon='eye-off'/> : <Icons icon='eye'/> }
                                </p>
                            }
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            { passwordMismatch ? <p className='text-danger my-3'> Passwords do not match! </p> : null }
                        </Form.Text>
                        <button className='my-3 border-0 w-100 rounded bg-pink text-white py-3'>
                            { loading ? <Loader/> : 'Create account' }
                        </button>
                        <div className="">
                            Already have an account? <Link to='#' onClick={handleLoginModal} className='remove-link-color text-decoration-none text-blue'>Sign in</Link>
                        </div>
                    </Form>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default Register
