import React, { useState } from 'react'
import { Badge, Nav, NavDropdown, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Icons from '../reusable/Icons';
import { cookies } from '../../utils/getCookies';
import {user} from '../../utils/userInfo'
import Logout from './Logout';

function OffCanvas({ showSidebar, handleSidebar, toggleLogin }) {
    
    const [showLogoutModal, setshowLogoutModal] = useState(false)
    
    //console.log(user)

    const handleLogoutModal = () =>{
        setshowLogoutModal(!showLogoutModal)
    }
   
    
    return (
        <>
            <Logout open={showLogoutModal} onClose={handleLogoutModal}/>
            <Offcanvas show={showSidebar} onHide={handleSidebar}>
                <Offcanvas.Header>
                    <Offcanvas.Title></Offcanvas.Title>
                    <Icons icon="x" onClick={handleSidebar} className={'pointer'} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="d-block ms-3">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About us</Nav.Link>
                        <NavDropdown title="Our services" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/medical-bouquet">Medical checks</NavDropdown.Item>
                            <NavDropdown.Item href="/background-bouquet">Background & security checks</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/contact-us">Contact us</Nav.Link>
                        {
                            cookies === undefined
                            ?   <>
                                    <button onClick={toggleLogin} className='mt-2 button-primary d-block' variant="primary">
                                        <Icons icon="log-in" size={16} />
                                        &nbsp;Login
                                    </button>
                                    <Link to='/register'>
                                        <button className='button-secondary mt-3'>
                                            <Icons icon="user" size={16} />
                                            &nbsp;Register
                                        </button>
                                    </Link>
                                </>
                            :   <NavDropdown title="Profile" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#">Logged in: <span className='font-bold'>{user.firstname} {user.lastname} </span> </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/cart">
                                            <div className="d-flex align-items-center ml-3">
                                                <Icons icon='shopping-cart' size={15} />
                                                &nbsp; &nbsp;Cart &nbsp;
                                                <Badge bg="secondary" className='bg-pink'>0</Badge>
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/order">
                                            <div className="d-flex align-items-center ml-3">
                                                <Icons icon='shopping-bag' size={15} />
                                                &nbsp; &nbsp;Orders
                                            </div>
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#">
                                            <div onClick={handleLogoutModal} className="d-flex align-items-center ml-3">
                                                <Icons icon='log-out' size={15} />
                                                &nbsp; &nbsp;Log out
                                            </div>
                                        </NavDropdown.Item>
                                </NavDropdown>
                        }
                        
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffCanvas
