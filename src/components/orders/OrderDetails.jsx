import React from 'react'
import { Badge, Container, Table } from 'react-bootstrap'

function OrderDetails({ orders}) {
    console.log(orders)



    return (
        <>
            <Container fluid='lg'>
                <div className="pt-5 cart-wrapper">
                    <h4>Total orders <Badge className='bg-pink'>{orders.length}</Badge></h4>
                    <Table responsive>
                        <thead>
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
                                            <td className='py-3'>bouquet name</td>
                                            <td className='py-3'>{item.subbouquet.name === 'Medical Add-ons' ? item.subbouquet.description : item.subbouquet.name }</td>
                                            <td className='py-3 font-bold'>{item.total.toLocaleString('en') || item.price.toLocaleString('en')}</td>
                                            <td className={`py-3`}>
                                                <span className={` ${item.status} d-flex align-items-center`}>{item.status}</span>
                                            </td>
                                            {/* <td className='py-3 pointer' onClick={()=>deleteItem(item)}> 
                                                <Icons icon='trash' size={20} fill="red" className={'font-bold text-red'} /> 
                                            </td> */}
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </Container>
        </>
    )
}

export default OrderDetails
