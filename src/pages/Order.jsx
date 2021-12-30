import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OrderDetails from '../components/orders/OrderDetails'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'
import { getOrders } from '../store/actions/orderActions'



const breadcrumbs = {
    previous: 'Home',
    previousLink: '/',
    current: 'Orders'
}


function Order() {

    const dispatch = useDispatch()

    const order = useSelector(state => state.order)
    const { orders, loading } = order
    console.log(orders)

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='cart-hero text-white'/>
            <OrderDetails orders={orders} loading={loading}/>
            <Footer/>
        </>
    )
}

export default Order
