import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Card, Button, Col } from 'react-bootstrap';
import '../css/Plan.css';
import { AiOutlineCheck } from "react-icons/ai";
import PlanImg from '../img/plan.svg';
import Fade from 'react-reveal/Fade';



const Plan = () => {
    return (
        <>
            <section className="PlanSection" id="PlanSection">
                <Row className="sectionPlanRow">
                    <Col xl={6}>
                        <Fade left>
                            <img src={PlanImg} className="sectionPlanImg" />
                        </Fade>
                    </Col>
                    <Col xl={6}>
                        <Fade right>
                            <Row>
                                <h1 className="sectionPlanText mb-4">Pick your plan</h1>
                                <Card style={{ width: '22rem' }} className="sectionPlanCardOne mr-5">
                                    <Card.Body>
                                        <Card.Title><b><h2 className="mt-5">Spotify Free</h2></b></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"><h5>$0. No credit card needed, ever. 1 account</h5></Card.Subtitle>
                                        <hr />
                                        <Card.Text>
                                            <h5>
                                                <p><AiOutlineCheck /> Play millions of songs and <span className="ml-4">podcasts</span></p>
                                                <p><AiOutlineCheck /> Discover new music</p>
                                                <p><AiOutlineCheck /> Save your favourites and <span className="ml-4">create playlists</span></p>
                                                <p><AiOutlineCheck /> Enjoy playlists made just for <span className="ml-4">you</span></p>
                                            </h5>
                                        </Card.Text>
                                        <hr />
                                        <a href="https://www.spotify.com/us/signup/?forward_url=https%3A%2F%2Fwww.spotify.com%2Fus%2Fdownload%2F" className="btnGetSpotifyPlanAnchor"><Button variant="link" size="sm" className="btnGetSpotifyPlan" block>
                                            <h4><b>Get Free</b></h4>
                                        </Button>
                                        </a>
                                    </Card.Body>
                                </Card>
                                <Card style={{ width: '22rem' }} className="sectionPlanCardTwo">
                                    <Card.Body>
                                        <p className="badge bg-primary text-wrap">1 month free</p>
                                        <Card.Title><b><h2 className="mt-1">Premium Individual</h2></b></Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted"><h5>$9.99/month after offer period 1 Premium account</h5></Card.Subtitle>
                                        <hr />
                                        <Card.Text>
                                            <h5 className="mb-4">
                                                <p><AiOutlineCheck /> <b>All benefits of Spotify Free</b></p>
                                                <p><AiOutlineCheck /> Play in any order. Unlimited <span className="ml-4">skips</span></p>
                                                <p><AiOutlineCheck /> Download and listen offline</p>
                                                <p><AiOutlineCheck /> Music without audio ads</p>
                                                <br />
                                            </h5>
                                        </Card.Text>
                                        <hr />
                                        <a href="https://www.spotify.com/us/signup/?forward_url=https%3A%2F%2Fwww.spotify.com%2Fus%2Fdownload%2F" className="btnGetSpotifyPlanAnchor">
                                            <Button variant="link" size="sm" className="btnGetSpotifyPlan" block>
                                                <h4><b>Get Premium</b></h4>
                                            </Button>
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Row>
                        </Fade>
                    </Col>
                </Row>
                <Row>
                    <Fade bottom>
                        <p className="sectionPlanNote text-center mt-5"><a href="https://www.spotify.com/us/legal/premium-promotional-offer-terms/" className="sectionPlanNoteSubText"><u><b>Terms and conditions apply.</b></u></a> 1 month free not available for users who have already tried Premium.</p>
                    </Fade>
                </Row>
            </section>
        </>
    )
}

export default Plan
