import React from 'react'
import { useEffect } from 'react'
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import Footer from '../components/reusable/Footer'
import Header from '../components/reusable/Header'
import Hero from '../components/reusable/Hero'
import Loader from '../components/reusable/Loader'
import Successful from '../assets/images/successful.gif'
import Failed from '../assets/images/failed.gif'
import { useDispatch, useSelector } from 'react-redux'
import { verifyOrders } from '../store/actions/orderActions'


const breadcrumbs = {
    previous: 'Cart',
    previousLink: '/',
    current: 'Confirmation'
}

function TransactionConfirmation() {

    const [searchParams, ] = useSearchParams()

    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //const status = searchParams.get('status')
    const transactionID = searchParams.get('transaction_id')
    const referenceID = searchParams.get('tx_ref')

    const verifyResponse = useSelector(state => state.order)
    const { verifyOrder, loading } = verifyResponse
    //console.log(verifyOrder)

    useEffect(() => {

        const data = {
            reference_id: referenceID,
            transaction_id: transactionID
        }

        dispatch(verifyOrders(data))

    }, [ dispatch, navigate, referenceID, transactionID ])

    useEffect(() => {
        if(verifyOrder.error === false){
            setTimeout(() => {
                navigate('/orders')
            }, 2000);
        }
    }, [verifyOrder, navigate])

    // console.log(location)
    // console.log(searchParams.get('status'))
    // console.log(status)
    

    if(!location.search) return <Navigate to='/' />
    return (
        <>
            <Header/>
            <Hero breadcrumb={breadcrumbs} extraStyle='cart-hero text-white'/>
            {
                loading ? <Loader/> :
                <div className='text-center mt-5 pt-5'>
                        { verifyOrder.error === false && <div className="m-auto" style={{ width: '100px'}}>
                                <img src={Successful} alt="" className='w-100 h-100 object-fit-cover' />
                            </div>
                        }
                        { verifyOrder.error === true && <div className="m-auto" style={{ width: '100px'}}>
                                <img src={Failed} alt="" className='w-100 h-100 object-fit-cover' />
                            </div>
                        }
                        { verifyOrder.error === false && <p className='font-md mt-4'>Payment Successful</p> }
                        
                        { verifyOrder.error === true && <p className='font-md mt-4'>Payment Unsuccessful</p> }
                        
                        {
                            verifyOrder.error === true
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
