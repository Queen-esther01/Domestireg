import React from 'react'
import { Badge, Container, Table } from 'react-bootstrap'
import Loader from '../reusable/Loader'
import cookie from 'react-cookies'
import Clipboard from '../../assets/images/clipboard.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makePayment } from '../../store/actions/orderActions'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function OrderDetails({ orders, loading}) {
    console.log(orders)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cookies = cookie.load('dreg')

    const startPaymentProcess = () =>{
        dispatch(makePayment())
    }

    const paymentResponse = useSelector(state => state.order)
    const { payment, paymentLoading } = paymentResponse

    // useEffect(() => {
    //     if(payment){
    //         navigate(`${ }`)
    //     }
    // }, [payment])

    return (
        <>
            <Container fluid='lg'>
                {
                    loading ? <div className='text-center d-flex align-items-center justify-content-center' style={{ height: '300px'}}><Loader/></div>
                    :   orders.length === 0 || cookies === undefined 
                    ?   <div className='text-center mt-5 pt-5'>
                            <div className="m-auto" style={{ width: '80px'}}>
                                <img src={Clipboard} alt="" className='w-100 h-100 object-fit-cover' />
                            </div>
                            <p className='font-md mt-4'>You have no orders</p>
                            <button className='border-0 rounded text-white bg-pink px-3 py-2'>
                                <Link to='/cart' className='remove-link-color text-decoration-none'>Return to cart </Link>
                            </button>
                        </div>
                    :   <div className="pt-5 cart-wrapper">
                            <h4>Total orders <Badge className='bg-pink'>{orders.length}</Badge></h4>
                            <Table responsive className='mt-3'>
                                <thead className=''>
                                    <tr>
                                        <th>Bouquet</th>
                                        <th>Service(s)</th>
                                        <th>Price</th>
                                        <th>Status</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders && orders.map(item => {
                                            return (
                                                <tr key={item._id}>
                                                    <td className='py-3'>{item.bouquet[0]}</td>
                                                    <td className='py-3'>
                                                        {
                                                            item.subbouquet.map(items => {
                                                                return (
                                                                    <li key={items}>{items}</li>
                                                                )
                                                            })
                                                        }
                                                    </td>
                                                    <td className='py-3 font-bold'>{item.total.toLocaleString('en')}</td>
                                                    <td className={`py-3`}>
                                                        <span className={` ${item.status} text-white py-2 px-2`} style={{ borderRadius: '20px'}}>{item.status}</span>
                                                    </td>
                                                    {
                                                        item.status === 'pending' &&    
                                                            <td className="py-3">
                                                                <button onClick={startPaymentProcess} className='px-2 py-2 border-0 rounded text-center bg-blue text-white' >
                                                                    { paymentLoading ? <Loader/> : 'Make Payment' }
                                                                </button>
                                                            </td>
                                                    }
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    }
            </Container>
        </>
    )
}

export default OrderDetails
