import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import Ourc from '../Gambar/Ourc.png';
import ztaa from '../Gambar/ztaa.png';
import Bintang from '../Gambar/Bintang.png';
import Izza from '../Gambar/Izza.png';
import Sasa from '../Gambar/Sasa.png';
import Rian from '../Gambar/Rian.png';
import Valentino from '../Gambar/Valentino.png';
import '../Style/Ourcampaign.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Ourcampaign = () => {
    return (
        <>
            <NavigationBar />
            <div className="mt-4">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h1>Story Of Us</h1>
                            <p className='smart'>Smart solutions for a more productive and environmentally friendly life.</p>
                        </Col>
                    </Row>

                    <Row className="mt-3 justify-content-center">
                        <Col xs="auto">
                            <img src={Ourc} fluid alt="Ourc" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="Content1">
                <Container>
                    <Row className="justify-content-center mt-4">
                        <Col md={5} className="mb-4">
                            <Card className='vision'>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                    <Card.Text>
                                        <h2 className='vis'>Our Vision</h2>
                                        <p className='lead'>
                                            To be the leading platform that supports productivity and sustainability by helping individuals effectively utilize their time through gardening,
                                            providing the tools and information needed to achieve success in planting and nurturing plants.
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={5} className="mb-4">
                            <Card className='mission'>
                                <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                                    <Card.Text>
                                        <h2 className='mis'>Our Mission</h2>
                                        <p className='misord'>
                                        <ol>
                                            <li>Offer a platform that allows users to monitor the progress of their plants in real-time, enabling them to care for their plants more efficiently and effectively.</li>
                                            <li>Provide comprehensive guides for various types of plants and pests, helping users overcome gardening challenges and improve their yields.</li>
                                            <li>Assist users in making better use of their time through organized and planned gardening activities, so they can enjoy the fruits of their labor to the fullest.</li>
                                        </ol>
                                        </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="Content2">
                <Container>
                    <Row>
                        <Col>
                            <p className="text-center">
                                At GoodPlants, we believe that planting is not just a hobby, but also a way to boost productivity. <br/>We are inspired by scientific research that shows that being around plants can improve focus, concentration, and creativity.<br />
                                <br />Our website is founded on the mission of helping people integrate plants into their daily lives. <br/>We provide a variety of resources, such as planting guides, plant care tips, and planting and care schedules. <br />
                                <br />GoodPlants is a friendly and supportive community for plant lovers and those who want to start planting. <br/>We are always happy to share tips and tricks, answer questions, and provide support.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="Content3">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <h2>Say Hello To Our Teams</h2>
                            <br></br>
                            <p className='proud'>
                                We are proud to have a team of talented and driven individuals who are dedicated to 
                                    <br/>delivering the best possible products to our customers.
                            </p>
                            <br></br>
                        </Col>
                    </Row>

                    <div>
                        <Row className="justify-content-center">
                            <Col xs={6} md={4} className="text-center">
                                <img src={Valentino} className="rounded-circle" alt="Valentino" />
                                <h4>Deny Chaidar<br />Valentino</h4>
                                <p className='Pm'>Project Manager</p>
                                <div className="social-links">
                                    <a className='git' href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a className='linkedin' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a className='instagram' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </Col>

                            <Col xs={6} md={4} className="text-center">
                                <img src={Rian} className="rounded-circle" alt="Rian" />
                                <h4>Rian Agus<br />Trianto</h4>
                                <p className='Ui1'>UI/UX Designer</p>
                                <div className="social-links">
                                    <a className='git' href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a className='linkedin' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a className='instagram' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </Col>

                            <Col xs={6} md={4} className="text-center">
                                <img src={Izza} className="rounded-circle" alt="Izza" />
                                <h4>Annisa<br />Izzatul Latifa</h4>
                                <p className='Ui2'>UI/UX Designer</p>
                                <div className="social-links">
                                    <a className='git' href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a className='linkedin' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a className='instagram' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </Col>
                        </Row>

                        <Row className="justify-content-center mt-4">
                            <Col xs={6} md={4} className="text-center">
                                <img src={ztaa} className="rounded-circle" alt="ztaa" />
                                <h4>Afta<br />Herminanta Jati</h4>
                                <p className='Dev1'>Coder/Developer</p>
                                <div className="social-links">
                                    <a className='git' href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a className='linkedin' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a className='instagram' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </Col>

                            <Col xs={6} md={4} className="text-center">
                                <img src={Sasa} className="rounded-circle" alt="Sasa" />
                                <h4>Clarissa Nazhwa<br />Ramadhina</h4>
                                <p className='Dev2'>Coder/Developer</p>
                                <div className="social-links">
                                    <a className='git' href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a className='linkedin' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a className='instagram' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </Col>

                            <Col xs={6} md={4} className="text-center">
                                <img src={Bintang} className="rounded-circle" alt="Bintang" />
                                <h4>Bintang Fajar<br />Pratama</h4>
                                <p className='Dev3'>Coder/Developer</p>
                                <div className="social-links">
                                    <a className='git' href="https://github.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                                    <a className='linkedin' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                                    <a className='instagram' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Ourcampaign;
