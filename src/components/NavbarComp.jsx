import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import '../css/Navbar.css';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSpotify } from "react-icons/fa";
import ToogleMenu from './ToggleMenu';

const NavbarComp = () => {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <Navbar className="navbarContent mt-5 ml-5">
                <Container>
                    <Navbar.Brand>
                        <h1 className="navBrand"><b><FaSpotify className="mb-2" /> <span className="navTitle">Spotify</span></b></h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Nav className="navMenu mb-2">
                        <Nav.Item className="navMenu" onClick={() => setNavOpen(!navOpen)}>
                            {navOpen ? <h2><b><GiHamburgerMenu /></b></h2> : <h2><b><GiHamburgerMenu /></b></h2>}
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            {navOpen ? <ToogleMenu /> : null}
        </>
    )
}
export default NavbarComp