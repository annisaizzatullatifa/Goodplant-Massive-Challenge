import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Sidebar2 from "../Components/Sidebar2";
import Tips2 from "../Components/Tips2";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ExplainTips2 = () => {
    const { pestName } = useParams();

    return (
        <div>
            <NavigationBar />
            <Container fluid className="mt-3">
                <Row>
                    <Col md={3}>
                        <Sidebar2/>
                    </Col>
                    <Col md={9}>
                        <h1>{pestName}</h1>
                        <Tips2 />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div> 
    );
};

export default ExplainTips2;