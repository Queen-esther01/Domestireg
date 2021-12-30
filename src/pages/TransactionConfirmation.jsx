import React from 'react'
import { useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'
import Successful from '../assets/images/successful.gif'
import Failed from '../assets/images/failed.gif'


const breadcrumbs = {
    previous: 'cart',
    previousLink: '/',
    current: 'Confirmation'
}

function TransactionConfirmation() {
    const [searchParams, setsearchParams] = useSearchParams()

    const location = useLocation()
    const navigate = useNavigate()

    const status = searchParams.get('status')

    useEffect(() => {
        if(status === 'successful'){
            setTimeout(() => {
                navigate('/orders')
            }, 2000);
        }
    }, [searchParams])

    console.log(location)
    console.log(searchParams.get('status'))
    console.log(status)
    
    if(!location.search) return <Navigate to='/' />
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='cart-hero text-white'/>
            {
                <div className='text-center mt-5 pt-5'>
                        { status === 'successful' && <div className="m-auto" style={{ width: '100px'}}>
                                <img src={Successful} alt="" className='w-100 h-100 object-fit-cover' />
                            </div>
                        }
                        { status !== 'successful' && <div className="m-auto" style={{ width: '100px'}}>
                                <img src={Failed} alt="" className='w-100 h-100 object-fit-cover' />
                            </div>
                        }
                        <p className='font-md mt-4'>Payment Successful</p>
                        {/* <button className='border-0 rounded text-white bg-pink px-3 py-2'>
                            <Link to='/orders' className='remove-link-color text-decoration-none'>See orders </Link>
                        </button> */}
                        {
                            status !== 'successful'
                            && <button className='border-0 rounded text-white bg-pink px-3 py-2'>
                            <Link to='/cart' className='remove-link-color text-decoration-none'>Try again </Link>
                        </button>
                        }
                    </div>
            }
            <Footer/>
        </>
    )
}

export default TransactionConfirmation
