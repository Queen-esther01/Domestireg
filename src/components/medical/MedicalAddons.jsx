import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import cookie from 'react-cookies'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import Login from '../../auth/Login'
import { addItemToCart, resetState } from '../../store/actions/cartActions'
import Loader from '../reusable/Loader'


function MedicalAddons({ medicalAddons }) {
    const [id, setid] = useState()
    const [showLoginModal, setshowLoginModal] = useState(false)

    const dispatch = useDispatch()

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
            setid(service._id)
            dispatch(addItemToCart(data))
        }
    }

    const cart = useSelector(state => state.cart)
    const { addonsToCartSucceeded, addonsToCartFailed, addToCartLoading } = cart
    console.log(addonsToCartSucceeded)


    useEffect(() => {
        if(addonsToCartSucceeded.error === false){

            toast.success(`${addonsToCartSucceeded.data[0].subbouquet.description[0]} has been added to cart.`, {
                id: 'addon-cart-success'
            })

            setTimeout(() => {
                dispatch(resetState())
            }, 1000)
        }
        else if(addonsToCartFailed.error === true){
            toast.error(addonsToCartFailed.message, {
                id: 'addon-cart-failed'
            })
            dispatch(resetState())
        }
    }, [addonsToCartSucceeded, addonsToCartFailed])

    
    return (
        <>
            <Login open={showLoginModal} onClose={()=>setshowLoginModal(false)}/>
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
                                                <button onClick={()=>addServiceToCart(addons)} className='button-primary'>
                                                    { addToCartLoading && id === addons._id ? <Loader/> : 'Add to cart' }
                                                </button>
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
