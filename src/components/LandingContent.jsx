import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import BG from '../img/BG.jpg';
import '../css/LandingContent.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { GoPrimitiveDot } from "react-icons/go";
import Fade from 'react-reveal/Fade';

const LandingContent = () => {
    const imgStyle = {
        backgroundImage: `url(${BG})`,
        height: `48.8vw`,
        backgroundRepeat: `no-repeat`,
    }
    return (
        <>
            <div style={imgStyle} className="landingPageBackground" id="HomeSection">
                <ul className="btnNavigation">
                    <li>
                        <Link
                            activeClass="active"
                            to="HomeSection"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <h1 className="btnNavHome">
                                {['left'].map((placement) => (
                                    <OverlayTrigger
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Tooltip>
                                                Home
                                            </Tooltip>
                                        }
                                    >
                                        <GoPrimitiveDot size={42} />
                                    </OverlayTrigger>
                                ))}
                            </h1>
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="PlanSection"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <h1 className="btnNavPlan">
                                {['left'].map((placement) => (
                                    <OverlayTrigger
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Tooltip>
                                                Plan
                                            </Tooltip>
                                        }
                                    >
                                        <GoPrimitiveDot size={42} />
                                    </OverlayTrigger>
                                ))}
                            </h1>
                        </Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="DownloadSection"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            <h1 className="btnNavDownload">
                                {['left'].map((placement) => (
                                    <OverlayTrigger
                                        key={placement}
                                        placement={placement}
                                        overlay={
                                            <Tooltip>
                                                Download
                                            </Tooltip>
                                        }
                                    >
                                        <GoPrimitiveDot size={42} />
                                    </OverlayTrigger>
                                ))}
                            </h1>
                        </Link>
                    </li>
                </ul>
                <Fade bottom>
                    <h1 className="landingPageText text-center">
                        Listening is everything
                </h1>
                    <h3 className="landingPageSubText text-center mt-4"><b>Millions of songs and podcasts. No credit card needed.</b></h3>
                    <a href="https://www.spotify.com/us/signup/?forward_url=https%3A%2F%2Fwww.spotify.com%2Fus%2Fdownload%2F">
                        <Button variant="link" size="sm" className="btnGetSpotify mt-5">
                            <h4><b>Get Spotify Now</b></h4>
                        </Button>
                    </a>
                </Fade>
            </div >
        </>
    )
}

export default LandingContent