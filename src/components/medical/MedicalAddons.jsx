import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'



function MedicalAddons({ medicalAddons }) {

    //console.log(medicalAddons)

    return (
        <>
            <Container fluid='lg'>
                <Row className=' pt-5 service-container'>
                    <h3 className='text-center my-5'>Medical Add-ons</h3>
                   
                    {
                        medicalAddons && medicalAddons.map(addons => {
                            return  <Col key={addons._id} xs={12} sm={6} md={4} className=''>
                                        <div className="text-center rounded-img my-3 mx-2 py-5 shadow-lg">
                                            <div className="text-center my-3">
                                                <p>{addons.description[0]}</p>
                                                <h5 className='text-pink my-3'>&#8358;{addons.price.toLocaleString('en')}</h5>
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
