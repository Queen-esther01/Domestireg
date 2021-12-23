import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Service from '../../assets/images/pick_a_service.svg'
import Info from '../../assets/images/provide_info.svg'
import Results from '../../assets/images/get_results.svg'
import LineIndicator from '../../assets/images/line-indicator.png'
import LineIndicatorReverse from '../../assets/images/line-indicator-inverse.png'

function Howitworks() {
    return (
        <>
            <Container fluid='lg'>
                <div className='mt-5 py-5 how-it-works-container'>
                    <h2 className="how-it-works-heading">How Domestireg works</h2>
                    <Row className='justify-content-md-center'>
                        <Col xs={12} sm={6} md={6} lg={4}>
                            <div className='process-container process-one'>
                                <div className='process-icon-container'>
                                    <img src={Service} alt="" className='w-100 h-100 object-fit-cover' />
                                </div>
                                <h6>Pick a service</h6>
                                <p>Choose from a list of service bouquet</p>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={4}>
                            <div className='process-container'>
                                <div className='process-icon-container process-two'>
                                    <img src={Info} alt="" className='w-100 h-100 object-fit-cover' />
                                </div>
                                <h6>Provide staff information</h6>
                                <p>Fill the details of the domestic staff intended to undergo the selected checks</p>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={4}>
                            <div className='process-container'>
                                <div className='process-icon-container'>
                                    <img src={Results} alt="" className='w-100 h-100 object-fit-cover' />
                                </div>
                                <h6>Get Results</h6>
                                <p>Get detailed and verified check results within the proposed timeline</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default Howitworks
