import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Medical from '../../assets/images/medical-check.jpg'
import Background from '../../assets/images/background-check.jpg'
import Icons from '../reusable/Icons'
import { useNavigate } from 'react-router-dom'



function ServiceBouquets({ bouquets }) {

    const navigate = useNavigate()

    const images = [ Medical, Background]

    const showSubBouquets = (data) => {
        //console.log(data)
        navigate( `/subbouquet`, {
            state: { data},
            replace: false
        })
    }

    return (
        <>
            <Container fluid='lg'>
                <div className='py-5 mt-5 text-center'>
                    <h2 className='fancy-font'>Service Bouquets</h2>
                    <h3>Select your preferred service bouquet</h3>
                    <Row className='justify-content-md-center mt-4'>
                        {
                            bouquets.data && bouquets.data.map((bouquet, index)=> {
                                return  <Col key={bouquet._id} xs={12} sm={6} lg={5}>
                                            <div className='medicals-image-container mx-auto'>
                                                <img src={images[index]} className='w-100 h-100 object-fit-cover object-position-top' alt="smiling-lady" />
                                            </div>
                                            <div className='mt-3'>
                                                <h5>{bouquet.name}</h5>
                                                <p onClick={()=>showSubBouquets(bouquet)} className='mt-2 text-blue pointer'>
                                                    Select option
                                                    <Icons icon='chevrons-right'/>
                                                </p>
                                            </div>
                                        </Col>
                            })
                        }
                    </Row>
                </div>
            </Container>
        </>
    )
}

export default ServiceBouquets
