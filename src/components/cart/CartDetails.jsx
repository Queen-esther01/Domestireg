import React, { useState } from 'react'
import { useEffect } from 'react'
import { Badge, Col, Container, Row, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import EmptyCart from '../../assets/images/empty-cart.png'
import { deleteItemFromCart, getCartItems, resetState } from '../../store/actions/cartActions'
import Divider from '../reusable/Divider'
import Icons from '../reusable/Icons'
import cookie from 'react-cookies'
import toast from 'react-hot-toast'

function CartDetails() {
    const [bouquetsInCart, setbouquetsInCart] = useState()
    const [cartID, setcartID] = useState()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart = useSelector(state => state.cart)
    const { cartItems, deleteFromCartSucceeded, cartTotal, fetchCartLoading} = cart
    console.log(cartItems)
    //console.log(cartTotal)

    useEffect(() => {
        dispatch(getCartItems())
    }, [])


    const deleteItem = (info) => {
        const data = {
            subbouquet_id: info.subbouquet._id
        }
        dispatch(deleteItemFromCart(data))
    }

    const cookies = cookie.load('dreg')

    useEffect(() => {
        const bouquetsInCart = cartItems && cartItems.map(item => item.bouquet[0].name).filter((value, index, self) => self.indexOf(value) === index)
        const cartId = cartItems && cartItems.map(item => item._id).filter((value, index, self) => self.indexOf(value) === index)
        setbouquetsInCart(bouquetsInCart)
        setcartID(cartId)
    }, [cartItems])

    
    //console.log(bouquetsInCart)

    const openEmployeeForms = () => {
        navigate(
            `/checkoutform`, 
            {
                state: { 
                    cart: bouquetsInCart,
                    id: cartID,
                    amount: cartTotal
                },
                replace: false
            },
        )
        
    }

    useEffect(() => {
        if(deleteFromCartSucceeded.error === false){
            if(deleteFromCartSucceeded.data[0].subbouquet.name === 'Medical Add-ons'){
                toast.success(`${deleteFromCartSucceeded.data[0].subbouquet.description[0]} has been deleted from cart.`, {
                    id: 'delete-cart-success',
                })
            }
            else{
                toast.success(`${deleteFromCartSucceeded.data[0].subbouquet.name} has been deleted from cart.`, {
                    id: 'delete-cart-success',
                })
            }

            setTimeout(() => {
                dispatch(resetState())
            }, 1000)
        }
        else if(deleteFromCartSucceeded.error === true){
            toast.error(deleteFromCartSucceeded.message)
            dispatch(resetState())
        }
    }, [deleteFromCartSucceeded])

    return (
        <>
            <Container fluid='lg'>
                {
                    cartItems.length === 0 || cookies === undefined ?
                        <div className='text-center mt-5 pt-5'>
                            <div className="m-auto" style={{ width: '80px'}}>
                                <img src={EmptyCart} alt="" className='w-100 h-100 object-fit-cover' />
                            </div>
                            <p className='font-md mt-4'>Your cart is currently empty</p>
                            <button className='border-0 rounded text-white bg-pink px-3 py-2'>
                                <Link to='/' className='remove-link-color text-decoration-none'>Return to home </Link>
                            </button>
                        </div>
                    :   <div className="pt-5 cart-wrapper">
                            <h4>Total Items In Cart <Badge className='bg-pink'>{cartItems.length}</Badge></h4>
                            <Row className='justify-content-md-between'>
                                <Col xs={12} sm={12} md={7} className='mt-5'>
                                    {
                                        //cartItems && cartItems.map(item => {
                                        <Table responsive>
                                            <thead>
                                                <tr>
                                                    <th>Bouquet</th>
                                                    <th>Service</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    cartItems && cartItems.map(item => {
                                                        return (
                                                            <tr key={item.subbouquet._id}>
                                                                <td className='py-3'>{item.bouquet[0].name}</td>
                                                                <td className='py-3'>{item.subbouquet.name === 'Medical Add-ons' ? item.subbouquet.description : item.subbouquet.name }</td>
                                                                <td className='py-3 font-bold'>{item.subbouquet.price.toLocaleString('en') || item.price.toLocaleString('en')}</td>
                                                                <td className='py-3 pointer' onClick={()=>deleteItem(item)}> 
                                                                    <Icons icon='trash' size={20} fill="red" className={'font-bold text-red'} /> 
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    }
                                    {/* {
                                        cartItems && cartItems.map(item => {
                                            return (
                                                <div key={item.subbouquet._id} className='mt-5 cart-item-container'>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p>Service</p>
                                                        <h6>&nbsp;{item.subbouquet.name}</h6>
                                                    </div>
                                                    <Divider styles={{ width: '100%' }}/>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <p>Price</p>
                                                        <h6>&#8358; {item.subbouquet.price.toLocaleString('en')}</h6>
                                                    </div>
                                                    <Divider styles={{ width: '100%', border: '1px solid black' }}/>
                                                </div>
                                            )
                                        })
                                    }  */}
                                </Col>  
                                <Col xs={12} sm={6} md={5} className='mt-5 cart-item-container'>
                                    <div className='px-3 py-4' style={{ border: '2px solid lightgrey'}}>
                                        <h4 className='mb-3'>Cart Total</h4>
                                        <Divider styles={{ width: '100%' }}/>
                                        <div className="my-3 d-flex justify-content-between align-items-center">
                                            <p>Total</p>
                                            <h6>&#8358; {cartTotal.toLocaleString('en')}</h6>
                                        </div>
                                        <button onClick={openEmployeeForms} className='rounded w-100 border-0 bg-pink text-white py-2'>
                                            Checkout
                                        </button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                }
            </Container>
        </>
    )
}

export default CartDetails
