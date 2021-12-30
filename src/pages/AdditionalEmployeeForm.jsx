import React from 'react'
import { Container, Form } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Header from '../components/reusable/Header';
import Hero from '../components/reusable/Hero';
import Footer from '../components/reusable/Footer';
import Divider from '../components/reusable/Divider';

const breadcrumbs = {
    previous: 'Employee Info',
    previousLink: '/checkoutform',
    current: 'Extra Info',
}

function AdditionalEmployeeForm() {

    const location = useLocation()

    //console.log(location.state)
    const requiredData = location.state

    const schema = yup.object({
        fathers_name: yup.string().required(),
        mothers_name: yup.string().required(),
        fathers_origin_address: yup.string().required(),
        mothers_origin_address: yup.string().required(),
        sibling_name: yup.string().required(),
        sibling_phone: yup.string().min(11).required(),
        no_of_children: yup.string().required(),
        employee1_name: yup.string().required(),
        employee2_name: yup.string().required(),
        employee1_phone: yup.string().min(11).required(),
        employee2_phone: yup.string().min(11).required(),
        employee1_address: yup.string().required(),
        employee2_address: yup.string().required(),
        employment1_salary: yup.string().required(),
        employment2_salary: yup.string().required(),
        reference_name: yup.string().required(),
        reference_current_job: yup.string().required(),
        reference_phone: yup.string().min(11).required(),
        reference_address: yup.string().required()
    }).required();

    const { register, handleSubmit, watch, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) =>{
        const allData = {
            ...requiredData,
            ...data
        }
        console.log(allData)
        console.log(errors)
    }

    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='cart-hero text-white'/>
            <Container fluid='lg'>
                <div className="register-form py-4">
                    <div className="mb-4">
                        <h5>Additional Employee Information</h5>
                        <p className='text-grey mt-3'>Please enter the additional information of employee to assist in a thorough background check.</p>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="" >
                            <Form.Label>Fathers Full Name</Form.Label>
                            <Form.Control {...register('fathers_name')} isInvalid={!!errors.fathers_name} type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.fathers_name?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Mothers Full Name</Form.Label>
                            <Form.Control {...register('mothers_name')} isInvalid={!!errors.mothers_name}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.mothers_name?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Fathers Origin Address</Form.Label>
                            <Form.Control {...register('fathers_origin_address')} isInvalid={!!errors.fathers_origin_address}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.fathers_origin_address?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Mothers Origin Address</Form.Label>
                            <Form.Control {...register('mothers_origin_address')} isInvalid={!!errors.mothers_origin_address}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.mothers_origin_address?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Sibling Full Name</Form.Label>
                            <Form.Control {...register('sibling_name')} isInvalid={!!errors.sibling_name}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.sibling_name?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Sibling Phone Number</Form.Label>
                            <Form.Control {...register('sibling_phone')} isInvalid={!!errors.sibling_phone}  type="tel" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.sibling_phone?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Number of children (if any)</Form.Label>
                            <Form.Control {...register('no_of_children')} isInvalid={!!errors.no_of_children}  type="text" placeholder="if none, enter " className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.no_of_children?.message}
                        </Form.Text>
                        <Divider styles={{ width: '100%', margin: '30px 0 ' }} />
                        <Form.Group className="mt-3" >
                            <Form.Label>Employee 1 Full Name</Form.Label>
                            <Form.Control {...register('employee1_name')} isInvalid={!!errors.employee1_name}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.employee1_name?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Employee 2 Full Name</Form.Label>
                            <Form.Control {...register('employee2_name')} isInvalid={!!errors.employee2_name}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.employee2_name?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Employee 1 Phone Number</Form.Label>
                            <Form.Control {...register('employee1_phone')} isInvalid={!!errors.employee1_phone}  type="tel" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.employee1_phone?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Employee 2 Phone Number</Form.Label>
                            <Form.Control {...register('employee2_phone')} isInvalid={!!errors.employee2_phone}  type="tel" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.employee2_phone?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Employee 1 Full Address</Form.Label>
                            <Form.Control {...register('employee1_address')} isInvalid={!!errors.employee1_address}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.employee1_address?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Employee 2 Full Address</Form.Label>
                            <Form.Control {...register('employee2_address')} isInvalid={!!errors.employee2_address}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.employee2_address?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Employment 1 Salary</Form.Label>
                            <Form.Control {...register('employment1_salary')} isInvalid={!!errors.employment1_salary}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.employment1_salary?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Employment 2 Salary</Form.Label>
                            <Form.Control {...register('employment2_salary')} isInvalid={!!errors.employment2_salary}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.employment2_salary?.message}
                        </Form.Text>
                        <Divider styles={{ width: '100%', margin: '30px 0 ' }} />
                        <Form.Group className="mt-3" >
                            <Form.Label>Reference Full Name</Form.Label>
                            <Form.Control {...register('reference_name')} isInvalid={!!errors.reference_name}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.reference_name?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Reference Current Job</Form.Label>
                            <Form.Control {...register('reference_current_job')} isInvalid={!!errors.reference_current_job}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.reference_current_job?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Reference Phone Number</Form.Label>
                            <Form.Control {...register('reference_phone')} isInvalid={!!errors.reference_phone}  type="tel" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.reference_phone?.message}
                        </Form.Text>
                        <Form.Group className="mt-3" >
                            <Form.Label>Reference Address</Form.Label>
                            <Form.Control {...register('reference_address')} isInvalid={!!errors.reference_address}  type="text" placeholder="" className='' />
                        </Form.Group>
                        <Form.Text className="text-red mb-3">
                            {errors.reference_address?.message}
                        </Form.Text>
                        <Divider styles={{ width: '100%', margin: '30px 0 ' }} />
                        <button className='my-3 border-0 w-100 rounded bg-pink text-white py-3'>Submit</button>
                    </Form>
                </div>
            </Container>
            <Footer/>
        </>
    )
}

export default AdditionalEmployeeForm
