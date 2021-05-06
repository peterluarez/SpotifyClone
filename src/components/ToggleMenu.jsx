import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import '../css/ToggleMenu.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import Fade from 'react-reveal/Fade';
import { HashLink } from 'react-router-hash-link';

const ToggleMenu = () => {
    const [menuClose, setMenuClose] = useState(false);

    return (
        <>
            {menuClose ? null : <Fade left><p className="togglerContent">
                <Container className="text-center btnTogglerContent">
                    <h2><IoMdClose className="navMenuClose" onClick={() => setMenuClose(!menuClose)} /></h2>
                    <p>
                        <Link
                            activeClass="active"
                            to="HomeSection"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                            <Button variant="link" onClick={() => setMenuClose(!menuClose)}>
                                Home
                            </Button>
                        </Link>
                    </p>
                    <p>
                        <Link
                            activeClass="active"
                            to="PlanSection"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                            <Button variant="link" onClick={() => setMenuClose(!menuClose)}>
                                Plan
                            </Button>
                        </Link>
                    </p>
                    <p>
                        <Link
                            activeClass="active"
                            to="DownloadSection"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}>
                            <Button variant="link" onClick={() => setMenuClose(!menuClose)}>
                                Download
                                    </Button>
                        </Link>
                    </p>
                    <p>
                        <Button variant="link">Sign Up</Button>
                    </p>
                    <p>
                        <HashLink smooth to='/Login'><Button variant="link">Log In</Button></HashLink>
                    </p>
                </Container>
            </p></Fade>}
        </>
    )
}

export default ToggleMenu