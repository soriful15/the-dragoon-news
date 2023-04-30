import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
const NavigationNavBar = () => {
    const { user, loggedOut } = useContext(AuthContext)


    const handleLogOut = () => {
        loggedOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <>
            <Container>

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">


                                <Link className='mt-0' to='/category/0'>Home</Link>


                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#career">Career</Nav.Link>

                            </Nav>
                            <Nav>
                                {user && <Nav.Link href="#deets">
                                    <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                                </Nav.Link>}

                                {user ?
                                    <Button variant="secondary" onClick={handleLogOut} >LogOut</Button> :
                                    <Link to='/login'>   <Button variant="secondary">Login</Button></Link>

                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </Container>
        </>
    );
};

export default NavigationNavBar;