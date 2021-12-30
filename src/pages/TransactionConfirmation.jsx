import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'
import Loader from '../components/reusable/Loader'
import { verifyPayment } from '../store/actions/orderActions'
import Successful from '../assets/images/successful.gif'
import Failed from '../assets/images/failed.gif'


const breadcrumbs = {
    previous: 'cart',
    previousLink: '/',
    current: 'Confirmation'
}

function TransactionConfirmation() {

    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(verifyPayment())
    // }, [dispatch])

    const order = useSelector(state => state.order)
    const { payment, loading } = order

    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='cart-hero text-white'/>
            {
                loading 
                ?   <div className='text-center d-flex align-items-center justify-content-center' style={{ height: '300px'}}>
                        <Loader/>
                    </div>
                :   <div className='text-center mt-5 pt-5'>
                        <div className="m-auto" style={{ width: '100px'}}>
                            <img src={Successful} alt="" className='w-100 h-100 object-fit-cover' />
                        </div>
                        <div className="m-auto" style={{ width: '100px'}}>
                            <img src={Failed} alt="" className='w-100 h-100 object-fit-cover' />
                        </div>
                        <p className='font-md mt-4'>Payment Successful</p>
                        <button className='border-0 rounded text-white bg-pink px-3 py-2'>
                            <Link to='/orders' className='remove-link-color text-decoration-none'>See orders </Link>
                        </button>
                    </div>
            }
            <Footer/>
        </>
    )
}

export default TransactionConfirmation
