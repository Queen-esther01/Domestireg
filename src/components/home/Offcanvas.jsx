import React from 'react'
import { Button, Nav, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icons from '../reusable/Icons';

function OffCanvas({ showSidebar, handleSidebar, toggleLogin }) {
    return (
        <>
            <Offcanvas show={showSidebar} onHide={handleSidebar}>
                <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                    <Icons icon="x" onClick={handleSidebar} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="d-block ms-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About us</Nav.Link>
                        <Nav.Link href="#">Our services</Nav.Link>
                        <Nav.Link href="/contact-us">Contact us</Nav.Link>
                        <Nav.Link href="#link" className=''>
                            <button onClick={toggleLogin} className='button-primary d-block' variant="primary">
                                <Icons icon="log-in" size={16} />
                                &nbsp;Login
                            </button>
                            <Link to='/register'>
                                <button className='button-secondary mt-3'>
                                    <Icons icon="user" size={16} />
                                    &nbsp;Register
                                </button>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvas
