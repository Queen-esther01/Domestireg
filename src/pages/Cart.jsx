import React from 'react'
import CartDetails from '../components/cart/CartDetails'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'

const breadcrumbs = {
        previous: 'Home',
        previousLink: '/',
        current: 'Cart'
    }


function Cart() {
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='cart-hero text-white' />
            <CartDetails/>
            <Footer/>
        </>
    )
}

export default Cart
