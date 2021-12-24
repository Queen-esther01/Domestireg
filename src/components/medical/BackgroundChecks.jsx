import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Divider from '../reusable/Divider'
import Icons from '../reusable/Icons'

const backgroundpackages = [
    {
        id: 1,
        title: 'Basic Check',
        price: '20,000',
        tests: [
            'Birth & origin', 'Credentials', 'Guarantors & referees', 'Certificates', 'Criminal incident records'
        ],
        color: 'brown'
    },
    {
        id: 2,
        title: 'Intermediate Check',
        price: '30,000',
        tests: [
            'Birth & origin', 'Credentials', 'Guarantors & referees', 'Certificates', 'Criminal incident records', 'Education', 'Last employment'
        ],
        color: 'silver'
    },
    {
        id: 3,
        title: 'Comprehensive Check',
        price: '40,000',
        tests: [
            'Birth & origin', 'Credentials', 'Guarantors & referees', 'Certificates', 'Criminal incident records', 'Education', 'Past 3 employments', 'Residence'
        ],
        color: 'gold'
    },
    {
        id: 4,
        title: 'Advanced Check',
        price: '50,000',
        tests: [
            'Birth & origin', 'Credentials', 'Guarantors & referees', 'Certificates', 'Criminal incident records', 'Education', 'Past 5 employments', 'Residence', `International background check (if applicable)`
        ],
        color: '#5F5C5B'
    },
]
function BackgroundChecks() {
    const navigate = useNavigate()

    const showMedicalCheckDetails = (info) =>{
        navigate(
            `/background-bouquet/${info.id}`, 
            {
                state: { info },
                replace: false
            },
        )
    }
    return (
        <>
            <Container fluid='lg'>
                <Row className='justify-content-md-center pt-5 service-container'>
                    {
                        backgroundpackages.map((packages, index) => {
                            return  <Col key={packages.title} xs={12} sm={6} lg={3} className=''>
                                        <div className="position-relative text-center rounded-img my-3 mx-2 py-4 shadow-lg">
                                            <Icons icon='shopping-cart' className={'p-3 cart-icon pointer'} size='50' style={{ background: 'white', position: 'absolute', right: 0, top: 0 }}/>
                                            <div className="text-center my-3">
                                                <Icons icon='star' size={50} fill='white' className="mb-3 text-white text-center p-3 rounded-circle mx-auto mb-2" style={{ background: packages.color}} />
                                                <p>{packages.title}</p>
                                                <h5 className='text-pink' style={{ margin: '-10px 0 0 0'}}>&#8358;{packages.price}</h5>
                                            </div>
                                            <Divider styles={{ width: '150px' }}/>
                                            <p onClick={()=>showMedicalCheckDetails(packages)} className='pointer mt-2 text-center font-bold'>
                                                Service details
                                                <Icons icon='chevrons-right'/>
                                            </p>
                                        </div>
                                    </Col>
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default BackgroundChecks
