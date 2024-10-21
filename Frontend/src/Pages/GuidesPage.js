import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavigationBar from '../Components/NavigationBar';
import Footer from '../Components/Footer';
import GuidesCard from '../Components/GuidesCard';
import UserReview from '../Components/UserReview';
import plantsGuide from '../Gambar/plantGuides.png';
import pestsGuide from '../Gambar/pestGuides.png';
import userImage from '../Gambar/Bintang.png';
import '../Style/GuidesPage.css';

const GuidesPage = () => {
    return (
        <>
            <NavigationBar />
            <div className="banner">
                <div className="overlay">
                    <h1>Guides</h1>
                    <p>Guide to tips and ways to cultivate simple plants at home</p>
                </div>
            </div>
            <Container className="text-center my-5">
                <h2>Guides</h2>
                <p>Smart solutions for a more productive and environmentally friendly life.</p>
                <Row>
                    <Col md={6} className="mb-4">
                        <GuidesCard 
                            title="Plants Guides" 
                            image={plantsGuide} 
                            text="Find the guidance you need regarding plants" 
                            link="/Guides2"
                        />
                    </Col>
                    <Col md={6} className="mb-4">
                        <GuidesCard 
                            title="Pests Guides" 
                            image={pestsGuide} 
                            text="Find the guidance you need regarding pests that attack your plants" 
                            link="/Guides"
                        />
                    </Col>
                </Row>
            </Container>
            <UserReview 
                name="Lintang Macario Fernandes" 
                email="LintangM@gmail.com" 
                date="December, 2023" 
                review="Alhamdulillah membuat saya rajin bercocok tanam"
                image={userImage}
            />
            <Footer />
        </>
    );
};

export default GuidesPage;
