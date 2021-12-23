import React from 'react'
import { Breadcrumb, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Icons from './Icons'

function Hero({ heading, breadcrumbs }) {
    console.log(breadcrumbs)
    return (
        <>
            <div className="bg-light-pink py-5 px-3">
                <Container fluid='lg'>
                    <h2 className='hero-heading'>{heading}</h2>
                    {
                        breadcrumbs.map(breadcrumb => {
                            return  <div key={breadcrumb.current}>
                                        <p>
                                            <span className="text-grey">
                                                <Link to={breadcrumb.previousLink} className='text-decoration-none remove-link-color'> {breadcrumb.previous} </Link> 
                                            </span>
                                            <Icons icon='chevron-right' size={15} className={'text-grey'} />
                                            {breadcrumb.current}
                                        </p>
                                    </div>
                        })
                    }
                </Container>
            </div>
            
        </>
    )
}

export default Hero
