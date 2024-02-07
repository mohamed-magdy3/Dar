import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';


{/* <img src={require('../assets/classroom.jpg')} alt="" className='room' /> */ }
export const Header = () => {
    const [openNavCentred, setOpenNavCentred] = useState(false);

    return (
        <div className='my-nav'>

            <div className="nav-logo">
                <img src={require('../assets/3.jpg')} alt="" className='bg' />
                <img src={require('../assets/logo2.png')} className='text-center logo-header img-header-log' alt="logo" />
            </div>

            <nav className="nav">
                <div>
                    {/* <ul className='nav-ul'>
                        <li><Link to='/' className='NavLink'>الرئيسية</Link></li>
                        <li><Link to='/programs' className='NavLink'>البرامج الدراسية</Link></li>
                        <li><Link to='/table' className='NavLink'>الجدول الدراسي</Link></li>
                        <li><Link to='login' className='NavLink'>تسجيل الدخول</Link></li>
                    </ul> */}
                    <MDBNavbar expand='lg' light bgColor=''  className='nav-ul'>
                        <MDBContainer fluid>
                            <MDBNavbarToggler
                                type='button'
                                data-target='#navbarCenteredExample'
                                aria-controls='navbarCenteredExample'
                                aria-expanded='false'
                                aria-label='Toggle navigation'
                                onClick={() => setOpenNavCentred(!openNavCentred)}
                            >
                                <MDBIcon icon='bars' fas />
                            </MDBNavbarToggler>

                            <MDBCollapse navbar open={openNavCentred} center id='navbarCenteredExample'>
                                <MDBNavbarNav fullWidth={false} className='mb-2 mb-lg-0'>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink aria-current='page' href='#' className='NavLink'>
                                            <Link to='/' className='NavLink'>الرئيسية</Link>
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink className='NavLink'>
                                            <Link to='/programs' className='NavLink'>البرامج الدراسية</Link>
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>

                                    <MDBNavbarItem>
                                        <MDBNavbarLink className='NavLink'>
                                            <Link to='/table' className='NavLink'>الجدول الدراسي</Link>
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                    <MDBNavbarItem>
                                        <MDBNavbarLink aria-disabled='true' className='NavLink'>
                                            <Link to='login' className='NavLink'>تسجيل الدخول</Link>
                                        </MDBNavbarLink>
                                    </MDBNavbarItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>

                </div>
            </nav>
        </div>
    )
}
