import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const medicalpackages = [
    {
        id: 1,
        title: 'Home PCR test self-testing (single use)',
        price: '25,000',
    },
    {
        id: 2,
        title: 'Home PCR w/medical (visit)',
        price: '40,000'
    },
    {
        id: 2,
        title: 'Covid 19',
        price: '51,000'
    },
    {
        id: 2,
        title: 'Pregnancy Tests',
        price: '5000'
    },
    {
        id: 2,
        title: 'Drug abuse',
        price: '12,000'
    },
]
function MedicalAddons() {
    return (
        <>
            <Container fluid='lg'>
                <Row className='justify-content-md-center pt-5 service-container'>
                    <h3 className='text-center my-5'>Medical Add-ons</h3>
                   
                    {
                        medicalpackages.map((packages, index) => {
                            return  <Col key={packages.title} xs={12} sm={6} md={4} className=''>
                                        <div className="text-center rounded-img my-3 mx-2 py-5 shadow-lg">
                                            <div className="text-center my-3">
                                                <p>{packages.title}</p>
                                                <h5 className='text-pink my-3'>&#8358;{packages.price}</h5>
                                            </div>
                                            <div className="m-auto d-block">
                                                <button className='button-primary'>Add to cart</button>
                                            </div>
                                        </div>
                                    </Col>
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

export default MedicalAddons
