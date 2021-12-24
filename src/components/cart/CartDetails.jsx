import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EmptyCart from '../../assets/images/empty-cart.png'

function CartDetails() {
    return (
        <>
            <Container fluid='lg'>
                <div className='text-center mt-5 pt-5'>
                    <div className="m-auto" style={{ width: '80px'}}>
                        <img src={EmptyCart} alt="" className='w-100 h-100 object-fit-cover' />
                    </div>
                    <p className='font-md mt-4'>Your cart is currently empty</p>
                    <button className='border-0 rounded text-white bg-pink px-3 py-2'>
                        <Link to='/' className='remove-link-color text-decoration-none'>Return to home </Link>
                    </button>
                </div>
            </Container>
        </>
    )
}

export default CartDetails
