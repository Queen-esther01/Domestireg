import React from 'react'
import { Button, Nav, Offcanvas } from 'react-bootstrap'
import FeatherIcon from 'feather-icons-react';

function OffCanvas({ showSidebar, handleSidebar}) {
    return (
        <>
            <Offcanvas show={showSidebar} onHide={handleSidebar}>
                <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                    <FeatherIcon icon="x" onClick={handleSidebar} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="d-block">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About us</Nav.Link>
                        <Nav.Link href="#link">Our services</Nav.Link>
                        <Nav.Link href="#link">Contact us</Nav.Link>
                        <Nav.Link href="#link">
                            <Button variant="primary">
                                <FeatherIcon icon="log-in" size={16} />
                                &nbsp;Login
                            </Button>
                            <Button variant="secondary" className='ms-2'>
                                <FeatherIcon icon="user" size={16} />
                                &nbsp;Register
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvas
