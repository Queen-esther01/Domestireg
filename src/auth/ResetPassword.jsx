import React, { useEffect, useState } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Loader from '../components/reusable/Loader';
import toast from 'react-hot-toast';
import { resetState, userForgotPassword, userResetPassword } from '../store/actions/authActions'
import Icons from '../components/reusable/Icons'
import { removeUserData } from '../utils/removeUserData'


const breadcrumbs = {
    previous: 'Home',
    previousLink: '/',
    current: 'Recover account'
}

function ResetPassword() {

    const [inputType, setinputType] = useState('password')
    const [confirmPasswordType, setconfirmPasswordType] = useState('password')
    const [confirmPassword, setconfirmPassword] = useState()
    const [passwordMismatch, setpasswordMismatch] = useState(false)

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

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const location = useLocation()

    const schema = yup.object({
        password: yup.string().min(6).required()
    }).required();

    const { register, handleSubmit, watch, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        data.email = location.state.email
        if(data.password !== confirmPassword) {
            setpasswordMismatch(true)
            return false
        }
        else{
            setpasswordMismatch(false)
            dispatch(userResetPassword(data))
        }
    }

    //GET RESET PASSWORD RESPONSE DATA
    const response = useSelector(state => state.user)
    const { resetPassword, forgotPassword, loading } = response
    // console.log(resetPassword)
    // console.log(location)

    useEffect(() => {
        if(resetPassword.code === 200){
            toast.success('your password has been reset successfully!')
            dispatch(resetState())
            removeUserData()
            navigate('/')
        }
        else if(forgotPassword.code === 200){
            toast.success('a new password reset code has been sent to your email!')
            dispatch(resetState())
        }
        else if(resetPassword.code === 401){
            toast.error('Invalid verification code!', {
                id: 'verify',
            })
            dispatch(resetState())
        }
    }, [resetPassword, forgotPassword, watch ])


    const resendResetPasswordCode = () =>{
        const data = {
            email : location.state.email
        }
        dispatch(userForgotPassword(data))
    }

    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='register-hero text-white'/>
            <Container fluid='lg'>
                <div className="register-form py-4">
                    <div className="mb-4">
                        <h5>Reset password</h5>
                        <p className='text-grey mt-3'> Please enter the code you received and your new password in the fields below</p>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mt-4" >
                            <Form.Label>Code</Form.Label>
                            <Form.Control {...register('token')} isInvalid={!!errors.token} type='text' placeholder="" className='' />
                        </Form.Group>
                        <Form.Group className="mt-4 position-relative" >
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
                        <Form.Group className="mt-4 position-relative" >
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
                        <button className=' my-4 border-0 w-100 rounded bg-pink text-white py-3'>
                            { loading ? <Loader/> : 'Reset password' }
                        </button>
                    </Form>
                    <div className="">
                        Didn't get code or code expired? <span onClick={resendResetPasswordCode} className='pointer text-blue'>resend</span>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default ResetPassword
