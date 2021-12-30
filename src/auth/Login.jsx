import React, { useEffect, useState } from 'react'
import { Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import cookie from 'react-cookies'
import Loader from '../components/reusable/Loader';
import toast from 'react-hot-toast';
import { loginUser, resetState } from '../store/actions/authActions';
import Icons from '../components/reusable/Icons';


function Login({ open, onClose }) {
    
    const [inputType, setinputType] = useState('password')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    //SHOW PASSWORD VALUES
    const togglePasswordVisibility = () =>{
        inputType === 'password' ? setinputType('text') : setinputType('password')
    }

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required()
    }).required();

    const { register, handleSubmit, watch, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        dispatch(loginUser(data))
    }

    //GET LOGIN RESPONSE DATA
    const response = useSelector(state => state.user)
    const { login, loading } = response
    //console.log(login)


    useEffect(() => {
        if(login.code === 200){

            toast.success('You have successfully logged in!', {
                id: 'login-success',
            })

            setTimeout(() => {
                localStorage.setItem('dreg', JSON.stringify(login.user))
                cookie.save('dreg', login.token, {maxAge: 86400})
                dispatch(resetState())
                onClose()
                window.location.reload(false)
                // navigate('/', { replace: true })
            }, 1000)
        }
        else if(login.code === 400){
            toast.success('Please verify your account to continue.', {
                id: 'verify',
            })
            dispatch(resetState())
            navigate('/verify', {
                state: { email: login.data.email },
            })
        }
        else if(login.code === 401){
            toast.error('Sorry, your login details are invalid.', {
                id: 'login',
            })
            dispatch(resetState())
        }
    }, [login, watch ])



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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mt-3" >
                            <Form.Label>Email address </Form.Label>
                            <Form.Control {...register('email')} isInvalid={!!errors.email} type="email" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.email?.message}
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
                        <button className=' my-3 border-0 w-100 rounded bg-pink text-white py-3'>
                            { loading ? <Loader/> : 'Sign in' }
                        </button>
                    </Form>
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
