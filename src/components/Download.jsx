import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Form, Button } from 'react-bootstrap';
import '../css/Download.css';
import downloadOne from '../img/downloadOne.svg';
import downloadTwo from '../img/downloadTwo.svg';
import AppStore from '../img/Download/toAppStore.png'
import PlayStore from '../img/Download/toPlayStore.png'
import Microsoft from '../img/Download/toMicrosoft.png'
import Amazon from '../img/Download/toAmazon.png'
import { FaSpotify } from "react-icons/fa";
import Fade from 'react-reveal/Fade';

const Plan = () => {
    return (
        <>
            <section className="DownloadSection" id="DownloadSection">
                <Row className="sectionDownloadRow">
                    <Col xl={6} className="sectionDownloadColOne text-center">
                        <Fade top>
                            <h1 className="sectionDownloadText">Download Spotify</h1>
                            <img src={downloadTwo} className="sectionDownloadImgOne mt-5" />
                            <h5 className="sectionDownloadSubText mt-5">Play millions of songs on your device.</h5>
                            <Button variant="link" size="sm" className="btnDownload mt-4" block>
                                <b>Download</b>
                            </Button>
                        </Fade>
                    </Col>
                    <Col xl={6}>
                        <Fade bottom>
                            <img src={downloadOne} className="sectionDownloadImgTwo" />
                            <h3 className="sectionDownloadColTwoText mt-5">Bring your music to mobile and tablet, too.</h3>
                            <h5 className="sectionDownloadColTwoSubText mt-4">Listening on your phone or tablet is free, easy, and fun.</h5>
                            <Row className="rowDownloadImg mt-5">
                                <img src={AppStore} className="toAppStore" />
                                <img src={PlayStore} className="toAppStore" />
                                <img src={Microsoft} className="toAppStore" />
                                <img src={Amazon} className="toAppStore" />
                            </Row>
                        </Fade>
                    </Col>
                </Row>
                <h5 className="text-center footerText"><FaSpotify />Spotify 2021</h5>
            </section>
        </>
    )
}

export default Plan
