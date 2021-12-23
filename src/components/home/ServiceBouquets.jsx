import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function ServiceBouquets() {
    return (
        <>
            <Container fluid='lg'>
                <div className='py-5 mt-5 text-center'>
                    <h2 className='fancy-font'>Service Bouquets</h2>
                    <h3>Select your preferred service bouquet</h3>
                    <Row>
                        <Col xs={12}></Col>
                        <Col xs={12}></Col>
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default ServiceBouquets
