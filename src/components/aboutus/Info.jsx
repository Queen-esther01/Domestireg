import React from 'react'
import { Container } from 'react-bootstrap'

function Info() {
    return (
        <>
            <Container fluid='lg'>
                <div className="text-center my-5 pt-5 about-us-introduction">
                    <h2>We vet and check so you don't have to</h2>
                    <p className='mt-3'>
                        We are a background, medical, criminal vetting 
                        and fact finding service. We assist our clients in 
                        vetting all their staff; to ensure they know exactly 
                        who they are hiring and to ensure the safety of the 
                        most important people - <span className='font-bold'> their family" </span>
                    </p>
                </div>
                
            </Container>
        </>
    )
}

export default Info
