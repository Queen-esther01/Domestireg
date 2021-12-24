import React, { useState } from 'react'
import { Container, Nav } from 'react-bootstrap';
import Logo from '../../assets/images/Domestireg.png'
import Offcanvas from '../home/Offcanvas';
import Icons from './Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Login from '../../auth/Login';
import Register from '../../auth/Register';
import { Link } from 'react-router-dom';

function Header() {
    const [showSidebar, setshowSidebar] = useState(false)
    const [showLoginModal, setshowLoginModal] = useState(false)

    const handleSidebar = () => {
        setshowSidebar(!showSidebar)
    }

    const handleLoginModal = () =>{
        setshowLoginModal(!showLoginModal)
    }

    return (
        <>
            <Login open={showLoginModal} onClose={handleLoginModal}/>
            <Container fluid="lg">
                <div className="d-flex justify-content-between align-items-center px-3 py-4 items-center">
                    <Offcanvas toggleLogin={handleLoginModal} showSidebar={showSidebar} handleSidebar={handleSidebar} />
                    <Icons icon='menu' className='menu-icon pointer' size={30} onClick={handleSidebar} />
                    <div className="logo-container">
                        <img src={Logo} alt="domestireg" className='w-100 h-100' />
                    </div>
                    <Nav className="hide-on-mobile">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about-us">About us</Nav.Link>
                        <Nav.Link href="#link">Our services</Nav.Link>
                        <Nav.Link href="/contact-us">Contact us</Nav.Link>
                    </Nav>
                    <div className='d-flex justify-content-between'>
                        <Icons icon='user' onClick={handleLoginModal} size={45} className='header-icon me-2 pointer hide-on-mobile bg-light-blue' />
                        <Link to='/cart' className='remove-link-color'>
                            <Icons icon='shopping-cart' size={45} className='header-icon pointer bg-light-pink' />
                        </Link>
                    </div>
                </div>
            </Container>
            
        </>
    )
}

export default Header
