import React from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

function ToastNotification({ show, bg='info', onClose, data }) {
    console.log(data)

    if (!data) return null
    return (
        <>
            <ToastContainer position="top-end" className="p-3">
                <Toast show={show} bg={data.bg ? data.bg : bg} onClose={onClose} autohide >
                    <Toast.Header>
                        <strong className="me-auto">{ data.title }</strong>
                    </Toast.Header>
                    <Toast.Body className='text-white'>{data.text}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default ToastNotification
