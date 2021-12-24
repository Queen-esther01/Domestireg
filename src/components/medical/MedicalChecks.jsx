import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Nanny from '../../assets/images/nanny.jpg'
import Divider from '../reusable/Divider'
import Icons from '../reusable/Icons'
import Driver from '../../assets/images/driver.jpg'
import Chef from '../../assets/images/chef.jpg'

const medicalpackages = [
    {
        id: 1,
        title: 'Housekeeper/Nanny/Chef Medical Check',
        price: '25,000',
        tests: [
            'HIV', 'Hep B', 'Hep C', 'T/B-Typhoid', 'Chest Xray'
        ],
        description: 'This check is a basic test carried out to ensure that the individual does not carry any of the harmful diseases listed below that are easily transferrable.',
        image: Nanny
    },
    {
        id: 2,
        title: 'Driver/Security Guard Medical Check (Basic)',
        price: '30,000',
        tests: [
            'TB Sputum test', 'Hearing', 'Vision', 'Hep B'
        ],
        description: 'This check is a basic test carried out to ensure that the individual has optimum eyesight, does not suffer a hearing loss or carry any harmful diseases that are easily transferrable.',
        image: Driver
    },
    {
        id: 3,
        title: 'Driver/Security Guard Medical Check (Comprehensive)',
        price: '55,000',
        tests: [
            'HIV', 'T/B-Typhoid', 'Hep B', 'Hep C', 'Hearing', 'Vision', 'Chest X-ray'
        ],
        description: 'This check is a comprehensive test carried out to ensure that the individual has optimum eyesight, does not suffer a hearing loss or carry any of the harmful diseases listed below that are easily transferrable.',
        image: Driver
    }
]

function MedicalChecks() {
    const navigate = useNavigate()

    const showMedicalCheckDetails = (info) =>{
        navigate(
            `/medical-bouquet/${info.id}`, 
            {
                state: { info },
                replace: false
            },
        )
    }

    return (
        <>
            <Container fluid='lg'>
                <div className="w-70 mx-auto text-center py-5 mt-3" style={{ maxWidth: '430px'}}>
                    <p>Packages have been put together to make it easy for you ,but all medical tests can be customized to 
                        suit your needs and budget, the add-ons can also be included with any test package or done as a 
                        stand-alone service request.
                    </p>
                </div>
                <Row className='justify-content-md-center service-container'>
                    {
                        medicalpackages.map((packages, index) => {
                            return  <Col key={packages.title} xs={12} sm={6} md={4} className='my-3'>
                                        <div className="bouquet-image position-relative ">
                                            <img src={packages.image} alt="nanny" className='w-100 h-100 object-fit-cover' />
                                            <Icons icon='shopping-cart' className={'p-3 cart-icon pointer'} size='50' style={{ background: 'white', position: 'absolute', right: 0 }}/>
                                        </div>
                                        <div className="text-center my-3">
                                            <p>{packages.title}</p>
                                            <h5 className='text-pink'>&#8358;{packages.price}</h5>
                                        </div>
                                        <Divider styles={{ width: '150px' }}/>
                                        <p onClick={()=>showMedicalCheckDetails(packages)} className='pointer mt-2 text-center font-bold'>
                                            Service details
                                            <Icons icon='chevrons-right'/>
                                        </p>
                                    </Col>
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default MedicalChecks
