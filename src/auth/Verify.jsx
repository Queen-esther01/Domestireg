import React, { useEffect } from 'react'
import { Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { resendVerification, resetState, verifyUser } from '../store/actions/authActions'
import toast from 'react-hot-toast'
import cookie from 'react-cookies'
import Loader from '../components/reusable/Loader'

const breadcrumbs = {
    previous: 'Home',
    previousLink: '/',
    current: 'Verify account'
}


function Verify() {
    const location = useLocation()
    console.log(location)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const schema = yup.object({
        otp: yup.string().min(4).required()
    }).required();

    const { register, handleSubmit, watch, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        data.email = location.state.email
        console.log(data);
        dispatch(verifyUser(data))
    }

    //GET VERIFICATION RESPONSE DATA
    const response = useSelector(state => state.user)
    const { verification, resendVerify, loading } = response
    console.log(verification)
    console.log(resendVerify)


    //RESEND VERIFICATION CODE
    const resendCode = () =>{
        const data = {
            email: location.state.email
        }
        dispatch(resendVerification(data))
    }


    useEffect(() => {
        if(verification.code === 200){

            toast.success('Account verified!')

            setTimeout(() => {
                localStorage.setItem('dreg', JSON.stringify(verification.data))
                cookie.save('dreg', verification.token, {maxAge: 86400})
                dispatch(resetState())
                navigate('/', { replace: true })
            }, 1000)
        }
        else if(resendVerify.code === 200){
            toast.success('Otp resent successfully!')
            dispatch(resetState())
        }
        else if(verification.code === 400){
            toast.error('Invalid verification code!', {
                id: 'verify',
            })
            dispatch(resetState())
        } 
    }, [verification, resendVerify, watch ])



    if(location.state === null) return <Navigate to='/' />
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='register-hero text-white'/>
            <Container fluid='lg'>
                <div className="register-form py-4">
                    <div className="mb-4">
                        <h5>Verify your account</h5>
                        <p className='text-grey mt-3'> Please enter the otp sent to your email to complete the verification process</p>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mt-4" >
                            <Form.Control {...register('otp')} type="number" placeholder="e.g 0000" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.otp?.message}
                        </Form.Text>
                        <button className=' my-4 border-0 w-100 rounded bg-pink text-white py-3'>
                            { loading ? <Loader/> : 'Verify account' }
                        </button>
                    </Form>
                    <div className="">
                        Didn't get code? <span className='text-blue pointer' onClick={resendCode}>resend</span>
                    </div>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default Verify
