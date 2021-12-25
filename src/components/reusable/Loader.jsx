import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader({ animation='border' }) {
    return (
        <>
            <Spinner size='sm' animation={animation}/>
        </>
    )
}

export default Loader
