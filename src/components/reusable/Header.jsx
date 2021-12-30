import React, { useState, useEffect } from 'react'
import { Badge, Container, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/images/Domestireg.png'
import Offcanvas from '../home/Offcanvas';
import Icons from './Icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import Login from '../../auth/Login';
import { Link, useNavigate } from 'react-router-dom';
import { cookies } from '../../utils/getCookies';
import { user } from '../../utils/userInfo';
import Logout from '../../auth/Logout';
import { getBouquets } from '../../store/actions/bouquetActions';
import { useSelector, useDispatch } from 'react-redux';
import { getCartItems } from '../../store/actions/cartActions';

function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [showSidebar, setshowSidebar] = useState(false)
    const [showLoginModal, setshowLoginModal] = useState(false)
    const [showLogoutModal, setshowLogoutModal] = useState(false)


    const handleSidebar = () => {
        setshowSidebar(!showSidebar)
    }

    const handleLoginModal = () =>{
        setshowLoginModal(!showLoginModal)
    }

    //console.log(user)

    //console.log(cookies)

    const handleLogoutModal = () =>{
        setshowLogoutModal(!showLogoutModal)
    }

    useEffect(() => {
        dispatch(getBouquets())
        dispatch(getCartItems())
    }, [dispatch])

    const data = useSelector(state => state.bouquet)
    const { bouquets } = data
   
    const showSubBouquets = (data) => {
        //console.log(data)
        navigate( `/subbouquet`, {
            state: { data},
            replace: false
        })
        window.location.reload(false)
    }

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart



    return (
        <>
            <Logout open={showLogoutModal} onClose={handleLogoutModal} />
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
                        <NavDropdown title="Our services" id="navbarScrollingDropdown">
                        {
                            bouquets.data && bouquets.data.map(bouquet => {
                                    return (
                                        <NavDropdown.Item key={bouquet._id} onClick={()=>showSubBouquets(bouquet)} href='#'>{bouquet.name}</NavDropdown.Item>
                                    )
                                })
                            }
                        </NavDropdown>
                        <Nav.Link href="/contact-us">Contact us</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                    </Nav>
                    <div className='d-flex justify-content-between'>
                        {
                            cookies === undefined
                            ?   <Icons icon='user' onClick={handleLoginModal} size={45} className='header-icon me-2 mt-2 pointer hide-on-mobile bg-light-blue' />
                            :   <Tippy content={
                                    <div className='my-2 px-3'>
                                        <p className=''> 
                                            You are signed in as <span className="font-bold"> {user.firstname} {user.lastname} </span>
                                        </p>
                                        <div className=" text-red">
                                            <Icons size={15} icon='log-out'/>
                                            <span className='pointer font-bold' onClick={handleLogoutModal} >&nbsp;Log out</span>
                                        </div>
                                    </div>
                                } arrow={false} theme='light' interactive={true} trigger='mouseenter' >
                                    <div>
                                        <Icons icon='user' size={45} className='header-icon me-2 pointer hide-on-mobile bg-light-blue mt-2' />
                                    </div>
                                </Tippy>
                        }
                        <Nav.Link href='/cart' className='remove-link-color position-relative'>
                            <Icons icon='shopping-cart' size={45} className='header-icon pointer text-dark bg-light-pink' />
                            <Badge bg="secondary" className='bg-pink rounded-circle position-absolute' style={{ right: '-5px', top: '0' }}>{cartItems.length || 0}</Badge>
                        </Nav.Link>
                    </div>
                </div>
            </Container>
            
        </>
    )
}

export default Header
