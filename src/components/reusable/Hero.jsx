import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Icons from './Icons'

function Hero({ breadcrumb , extraStyle}) {
    return (
        <>
            <div className={`bg-light-pink py-5 px-3 hero-container ${extraStyle}`}>
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
