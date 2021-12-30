import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { addItemToCart, resetState } from '../../store/actions/cartActions'
// import Nanny from '../../assets/images/nanny.jpg'
import Divider from './Divider'
import Icons from './Icons'
import Loader from './Loader'
// import Driver from '../../assets/images/driver.jpg'
import cookie from 'react-cookies'
import Login from '../../auth/Login'




function SubBouquetList({ subBouquetList, subBouquetName }) {
    const [itemAdded, setitemAdded] = useState()
    const [id, setid] = useState()
    const [showLoginModal, setshowLoginModal] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    
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
    //console.log(subBouquetList)

    const colors = ['brown', 'silver', 'gold', '#5F5C5B']

    const token = cookie.load('dreg')
    
    const addServiceToCart = (service) => {
        const data = {
            cartItems: {
                subbouquet_id: service._id
            }
        }
        if(token === undefined){
            toast.error('Please login to add item to cart')
            setshowLoginModal(true)
        }
        else{
            setitemAdded(service.name)
            setid(service._id)
            dispatch(addItemToCart(data))
        }
    }

    const cart = useSelector(state => state.cart)
    const { addToCartSucceeded, addToCartFailed, addToCartLoading } = cart
    console.log(addToCartSucceeded)
    console.log(addToCartFailed)


    useEffect(() => {
        if(addToCartSucceeded.error === false){
            toast.success(`${itemAdded} has been added to cart.`, {
                id: 'add-to-cart-success'
            })

            setTimeout(() => {
                dispatch(resetState())
            }, 1000)
        }
        else if(addToCartFailed.error === true){
            toast.error(addToCartFailed.message, {
                id: 'cart-error',
            })
            dispatch(resetState())
        }
    }, [addToCartSucceeded, addToCartFailed])

    return (
        <>
            <Login open={showLoginModal} onClose={()=>setshowLoginModal(false)}/>
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
                                            { 
                                                addToCartLoading && id === subBouquet._id 
                                                ? <div className='p-3' style={{ background: 'white', position: 'absolute', right: 0, top: 0 }}> <Loader/> </div>
                                                : addToCartSucceeded.length === 0
                                                ? <Icons icon='shopping-cart' onClick={()=>addServiceToCart(subBouquet)} className={'p-3 cart-icon pointer'} size='50' style={{ background: 'white', position: 'absolute', right: 0, top: 0 }}/> 
                                                : null
                                            }
                                            {
                                                addToCartSucceeded.error === false  && id === subBouquet._id
                                                ? <Icons icon='check' className='text-green' onClick={()=>addServiceToCart(subBouquet)} className={'p-3 cart-icon pointer'} size='50' style={{ background: 'white', position: 'absolute', right: 0, top: 0 }}/> 
                                                : null
                                            }
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
                </Row>
            </Container>
        </>
    )
}

export default SubBouquetList
