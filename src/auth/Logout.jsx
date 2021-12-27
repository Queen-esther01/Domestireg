import React from 'react'
import { Modal } from 'react-bootstrap'
import { removeUserData } from '../utils/removeUserData'

function Logout({ open, onClose}) {

    const logout = () =>{
        removeUserData()
        window.location.reload(false)
    }

    if(!open) return null
    return (
        <>
            <Modal size="md" centered show={open} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Sign out
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> Are you sure you want to leave? </p>
                </Modal.Body>
                <Modal.Footer>
                    <button className='border-0 px-3 py-2 rounded bg-pink text-white' onClick={logout}>Sign out</button>
                    <button className='border-0 px-3 py-2 rounded' onClick={onClose}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Logout
