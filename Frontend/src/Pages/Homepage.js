import React from 'react';
import NavigationBar from "../Components/NavigationBar";
import ControlledCarousel from "../Components/CarouselContent";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "../Components/Footer";
import Knowledge from "../Gambar/Knowledge.png";
import OK from "../Gambar/OK.png";
import Patience from "../Gambar/Patience.png";
import Satisfaction from "../Gambar/Satisfaction.png";
import Content2 from "../Gambar/Content2.png"; // Pastikan jalur ini benar
import Content3 from "../Gambar/Content3.png"; // Pastikan jalur ini benar
import Content1 from "../Gambar/Content1.png";
import "../Style/Homepage.css";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    const navigate = useNavigate();
    return (
        <>
            <NavigationBar />
            <ControlledCarousel />
            <div className="Content1 mt-5 mb-5">
                <Container>
                    <Row className="justify-content-center mt-5 Row1">
                        <Col className="text-center mt-4">
                            <h2>Our Campaign</h2>
                            <p className='sub1'>Smart solutions for a more productive and environmentally friendly life</p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="justify-content-center mt-3 mb-5">
                        <Col md={5} className="mb-4">
                            <Card style={{ width: '100%', height: '100%', paddingTop:'10px', borderRadius:'15px',}}>
                                <Card.Body>
                                    <Card.Text className="text-card">
                                        <b>Let's change habits, create a green and productive space at home with Good Plants!</b>
                                        <br /><br />
                                        Discover easy-to-follow guides for beginner gardeners. Reap the double benefits: fresh air, healthy food, and a peaceful mind. Join Indonesia's largest gardening community, find inspiration, share experiences, and connect with fellow plant enthusiasts.
                                    </Card.Text>
                                    <div className="text-center mt-auto">
                                        <a href="/Ourcampaign"><Button className="mt5-button">More About Us</Button></a>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={5} className="mb-4">
                            <Card className="contentCard1">
                                <Card.Img className="contentImg1" src={Content1} alt="Content1"  />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
    
            <div className="Content2">
                <Container fluid className='background'>
                    <Row className="justify-content-center Row2 mt-5">
                        <Col className="text-center">
                            <h2>What We Do</h2>
                            <p className='sub2'>You can start with a guide and some vegetable plant suggestions</p>
                        </Col>
                    </Row>
                <Container className='background'>
                    <Row className="justify-content-center mt-4">
                        <Col md={4} className="mb-4 d-flex justify-content-center">
                            <Card className="hPlants" onClick={() => navigate('/guides2')}>
                                <Card.Img variant="top" src={Content2} />
                                <Card.Body>
                                    <Card.Title className="plantsTitle">Plants</Card.Title>
                                    <div className="text1">
                                        <Card.Text>Home gardening guide to produce healthy vegetables without pesticides.</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4 d-flex justify-content-center">
                            <Card className="hGuides" onClick={() => navigate('/guides')}>
                                <Card.Img variant="top" src={Content3} />
                                <Card.Body>
                                    <Card.Title className="guidesTitle">Guides</Card.Title>
                                    <div className="text2">
                                        <Card.Text>Various recommendations and types of plants that are good to plant in home gardens.</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </Container>
            </div>

            <div className="Content3">
                <Container>
                    <Col className='whyUs'>
                        <h1>Why Us?</h1>
                        <p className='sub3'>Smart solutions for a more productive and environmentally friendly life</p>
                        <br></br>
                    </Col>

                    <Row className="mt-5 justify-content-center">
                        <Col xs={12} md={3} className="d-flex flex-column align-items-center">
                            <img src={OK} alt="Easy To Use" className="img-fluid" />
                            <p className='easy'>Easy To Use</p>
                        </Col>
                        <Col xs={12} md={3} className="d-flex flex-column align-items-center">
                            <img src={Satisfaction} alt="User Friendly Design" className="img-fluid" />
                            <p className='user'>User Friendly Design</p>
                        </Col>
                        <Col xs={12} md={3} className="d-flex flex-column align-items-center">
                            <img src={Knowledge} alt="Informative" className="img-fluid" />
                            <p className='info'>Informative</p>
                        </Col>
                        <Col xs={12} md={3} className="d-flex flex-column align-items-center">
                            <img src={Patience} alt="Up to Date Content" className="img-fluid" />
                            <p className='up'>Up to Date Content</p>
                        </Col>
                    </Row>

                    <Row className="text-center mt-4">
                        <Col className='startNow'>
                            <h2>Let's</h2>
                            <h2>Start Now</h2>
                            <p className='mLife'>Make your life productive and healthy with Good Plants.</p>
                        </Col>

                        <Col>
                            <a href='/MyPlants'><Button className="buttonStart">Start Activity</Button></a>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Homepage;
