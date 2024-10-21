import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Sidebar5 from "../Components/Sidebar5";
import Tips5 from "../Components/Tips5";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ExplainTips5 = () => {
    const { pestName } = useParams();

    return (
        <div>
            <NavigationBar />
            <Container fluid className="mt-3">
                <Row>
                    <Col md={3}>
                        <Sidebar5/>
                    </Col>
                    <Col md={9}>
                        <h1>{pestName}</h1>
                        <Tips5 />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div> 
    );
};

export default ExplainTips5;