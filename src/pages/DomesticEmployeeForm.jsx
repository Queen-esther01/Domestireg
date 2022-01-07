import React, { useEffect } from 'react'
import { Alert, Container, Form } from 'react-bootstrap'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Divider from '../components/reusable/Divider'
import Loader from '../components/reusable/Loader'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder, resetState, uploadImage } from '../store/actions/orderActions'
import toast from 'react-hot-toast'
import { redirectUrl } from '../utils/redirectUrl'


const breadcrumbs = {
    previous: 'Cart',
    previousLink: '/cart',
    current: 'Employee Info',
}


function DomesticEmployeeForm() {
    const [employeeImage, setemployeeImage] = useState()

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const schema = yup.object({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        phone: yup.string().min(11).required(),
        email: yup.string().email().required(),
        address: yup.string().required(),
        gender: yup.string().required(),
        date_of_birth: yup.date().required(),
        marital_status: yup.string().required(),
        state: yup.string().required(),
        country: yup.string().required(),
        position: yup.string().required(),
        level_of_education: yup.string().required(),
        image: yup.mixed().required(),
        reason: yup.string().required(),
        severe_illness: yup.boolean().required(),
        staff_copy: yup.boolean().required(),
    }).required();

    const { register, handleSubmit, watch, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) =>{
        if(checks.includes('Background & Criminal Check')){
            data.image = employeeImage
            //console.log(data)
            if(Object.keys(errors).length === 0){
                navigate('/checkoutform/additionalinfo', {
                    state: {
                        data: data,
                        cart_id : location.state.id[0],
                        amount: location.state.amount
                    }
                })
            }
            else{
                //console.log('there are errors')
                return false
            }
        }
        else{
            data.image = employeeImage
            const submitData = {
                cart_id : location.state.id[0],
                amount: location.state.amount,
                redirect_url: redirectUrl,
                domestic : data
            }
            dispatch(createOrder(submitData))
            //console.log(submitData)
        }
    }

    //console.log(location.state)

    const checks = location.state && location.state.cart
    console.log(location)
    
    const onUploadImage = () =>{

        let formData = new FormData()

        const image = watch('image')

        if(image.length !== 0){
            formData.append('avatar', image[0])
            dispatch(uploadImage(formData))
        }
        else{
            toast.error('Please upload an image')
        }
    }

    const imageUploadResponse = useSelector(state => state.order)
    const { orderSucceeded, orderFailed, uploadSucceeded, uploadLoading, loading } = imageUploadResponse
    console.log(orderFailed)
    console.log(orderSucceeded)

    //DISPLAY TOAST IF IMAGE UPLOADED SUCCESSFULLY
    console.log(uploadSucceeded)
    useEffect(() => {
        if(uploadSucceeded.code === 200){
            setemployeeImage(uploadSucceeded.data)
            toast.success('Image has been uploaded successfully')
            dispatch(resetState())
        }
        else if(uploadSucceeded.code === 400){
            toast.error('Image upload failed')
            dispatch(resetState())
        }
    }, [uploadSucceeded, dispatch])


    //DISPLAY TOAST IF ORDER CREATION FAILS OR SUCCEEDS
    useEffect(() => {
        if(orderSucceeded.error === false){
            toast.success('Your order has been created successfully')
            dispatch(resetState())
            setTimeout(() => {
                window.open(orderSucceeded.data.checkout)
            }, 2000);
        }
        else if(orderFailed.status_code === 400 || orderSucceeded.error === true){
            toast.error('Your order failed')
            dispatch(resetState())
        }
    }, [orderSucceeded, orderFailed,  dispatch, navigate])



    if(location.state === null) return <Navigate to='/cart' />
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='cart-hero text-white'/>
            
            <Container fluid='lg'>
                <div className="register-form py-4">
                    {
                        checks.includes('Background & Criminal Check')
                        && <Alert variant='info'>Please ensure you complete this form before moving on to the next </Alert>
                    }
                    <div className="mb-4">
                        <h5>Employee Information</h5>
                        <p className='text-grey mt-3'>Please enter the information of the employee you would like to perform a check for.</p>
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
                            <Form.Label>Gender</Form.Label>
                            <Form.Select {...register('gender')} name='gender'>
                                <option> Please select a gender </option>
                                <option> Female </option>
                                <option> Male </option>
                                <option> Others </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.gender?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control {...register('date_of_birth')} isInvalid={!!errors.date_of_birth} type="date" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.date_of_birth?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Marital Status</Form.Label>
                            <Form.Select {...register('marital_status')} name='marital_status'>
                                <option> Please select a status </option>
                                <option> Single </option>
                                <option> Married </option>
                                <option> Divorced </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.marital_status?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>House Address</Form.Label>
                            <Form.Control {...register('address')} isInvalid={!!errors.address} type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.address?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Country</Form.Label>
                            <Form.Control {...register('country')} isInvalid={!!errors.country} type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.country?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>State</Form.Label>
                            <Form.Control {...register('state')} isInvalid={!!errors.state} type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.state?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Employee Position</Form.Label>
                            <Form.Control {...register('position')} isInvalid={!!errors.position} type="text" placeholder="e.g housekeeper" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.position?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Level Of Education</Form.Label>
                            <Form.Select {...register('level_of_education')} name='level_of_education'>
                                <option> Please select a level of education </option>
                                <option> Bachelors degree </option>
                                <option> OND </option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.level_of_education?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Upload employee picture</Form.Label>
                            <Form.Control {...register('image')} isInvalid={!!errors.image} type="file" accept="image/*" className='' />
                        </Form.Group>
                        <button onClick={onUploadImage} className='border-0 py-2 mt-3 px-2 bg-blue rounded text-white'>
                            { uploadLoading ? <Loader/> : 'Upload image' }
                        </button>
                        <Form.Text className="text-red mb-3">
                            {errors.image?.message}
                        </Form.Text>
                        <Divider styles={{ width: '100%', margin: '30px 0 ' }} />
                        {
                            checks.includes('Medical Check') &&
                            <>
                                <Form.Group className="mt-3" >
                                    <Form.Label>What is your reason for the testing employee?</Form.Label>
                                    <Form.Control {...register('reason')} isInvalid={!!errors.reason} type="text" className='' />
                                </Form.Group>
                                <Form.Text className="text-red mb-3">
                                    {errors.reason?.message}
                                </Form.Text>
                                <Form.Group className="mt-3" >
                                    <Form.Label>Has the employee suffered from any severe illness?</Form.Label>
                                    <Form.Select {...register('severe_illness')} name='severe_illness'>
                                        <option> Please select response </option>
                                        <option value={true}> Yes </option>
                                        <option value={false}> No </option>
                                        <option> I don't know </option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Text className="text-red mb-3">
                                    {errors.severe_illness?.message}
                                </Form.Text>
                                <Divider styles={{ width: '100%', margin: '30px 0 ' }} />
                            </>
                        }
                        <Form.Group className="mt-3" >
                            <Form.Check 
                                {...register('staff_copy')} 
                                label='I would like the vetted staff member to receive a copy as well'
                                name='staff_copy'
                                isInvalid={!!errors.staff_copy}
                            />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.staff_copy?.message}
                        </Form.Text>
                        {
                            checks.includes('Background & Criminal Check')
                            ?   <button className='my-3 border-0 w-100 rounded bg-pink text-white py-3'>
                                    Continue to next step
                                </button>
                            :   <button type={'submit'} className='my-3 border-0 w-100 rounded bg-pink text-white py-3'>
                                    { loading ? <Loader/> : 'Submit' }
                                </button>
                        }
                    </Form>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default DomesticEmployeeForm
