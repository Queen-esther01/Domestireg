import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Icons from './Icons'
// import Cart from '../../assets/images/cart.jpg'

function Hero({ breadcrumb , extraStyle}) {
    return (
        <>
            <div className={`bg-light-pink py-5 px-3 hero-container ${extraStyle}`}>
                {/* <img src={Cart} alt="" className='w-100 h-100 z-index-1 position-absolute object-fit-cover' /> */}
                <Container fluid='lg'>
                    <h2 className='hero-heading'>{breadcrumb.current}</h2>
                    <div key={breadcrumb.current}>
                        <p>
                            <span className="text-grey">
                                <Link to={breadcrumb.previousLink} className='text-decoration-none remove-link-color'> {breadcrumb.previous} </Link> 
                            </span>
                            <Icons icon='chevron-right' size={15} className={'text-grey'} />
                            {breadcrumb.current}
                        </p>
                    </div>
                </Container>
            </div>
            
        </>
    )
}

export default Hero
