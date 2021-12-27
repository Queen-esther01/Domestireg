import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
// import Nanny from '../../assets/images/nanny.jpg'
import Divider from './Divider'
import Icons from './Icons'
// import Driver from '../../assets/images/driver.jpg'





function SubBouquetList({ subBouquetList, subBouquetName }) {

    const navigate = useNavigate()
    const location = useLocation()
    
    const showSubBouquetDetails = (info) =>{
        //console.log(info)
        navigate(
            `${location.pathname}/${info._id}`, 
            {
                state: { info },
                replace: false
            },
        )
    }
    //console.log(location)

    const colors = ['brown', 'silver', 'gold', '#5F5C5B']
    
    return (
        <>
            
            <Container fluid='lg'>
                { subBouquetName === 'Medical Check' && <div className="w-70 mx-auto text-center pt-5 mt-3" style={{ maxWidth: '600px'}}>
                    <p>Packages have been put together to make it easy for you ,but all medical tests can be customized to 
                        suit your needs and budget, the add-ons can also be included with any test package or done as a 
                        stand-alone service request.
                    </p>
                </div> }
                <Row className='service-container pt-5'>
                    {
                        subBouquetList && subBouquetList.map((subBouquet, index) => {
                            return  <Col key={subBouquet._id} xs={12} sm={6} md={4} className='my-3 '>
                                        <div className="position-relative text-center rounded-img  mx-2 py-5 shadow-lg">
                                            <Icons icon='shopping-cart' className={'p-3 cart-icon pointer'} size='50' style={{ background: 'white', position: 'absolute', right: 0, top: 0 }}/>
                                            <div className="text-center my-3">
                                                {
                                                    subBouquetName !== 'Medical Check' && <Icons icon='star' size={50} fill='white' className="mb-3 text-white text-center p-3 rounded-circle mx-auto mb-2" style={{ background: colors[index]}} />
                                                }
                                                <p style={{ maxWidth: '250px', margin: '0 auto 20px auto'}}>{subBouquet.name}</p>
                                                <h5 className='text-pink'>&#8358;{subBouquet.price.toLocaleString('en')}</h5>
                                            </div>
                                            <Divider styles={{ width: '150px' }}/>
                                            <p onClick={()=>showSubBouquetDetails(subBouquet)} className='hover-blue pointer mt-2 text-center font-bold'>
                                                Service details
                                                <Icons icon='chevrons-right'/>
                                            </p>
                                        </div>
                                    </Col>
                        })
                    }
                    {/* {
                        medicalpackages.map((packages, index) => {
                            return  <Col key={packages.title} xs={12} sm={6} md={4} className='my-3'>
                                        <div className="position-relative text-center rounded-img  mx-2 py-5 shadow-lg">
                                            <Icons icon='shopping-cart' className={'p-3 cart-icon pointer'} size='50' style={{ background: 'white', position: 'absolute', right: 0, top: 0 }}/>
                                            <div className="text-center my-3">
                                                <p style={{ maxWidth: '250px', margin: '0 auto 20px auto'}}>{packages.title}</p>
                                                <h5 className='text-pink'>&#8358;{packages.price}</h5>
                                            </div>
                                            <Divider styles={{ width: '150px' }}/>
                                            <p onClick={()=>showMedicalCheckDetails(packages)} className='pointer mt-2 text-center font-bold'>
                                                Service details
                                                <Icons icon='chevrons-right'/>
                                            </p>
                                        </div>
                                    </Col>
                        })
                    } */}
                </Row>
            </Container>
        </>
    )
}

export default SubBouquetList
