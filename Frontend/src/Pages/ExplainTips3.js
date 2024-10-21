import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Sidebar3 from "../Components/Sidebar3";
import Tips3 from "../Components/Tips3";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ExplainTips3 = () => {
    const { pestName } = useParams();

    return (
        <div>
            <NavigationBar />
            <Container fluid className="mt-3">
                <Row>
                    <Col md={3}>
                        <Sidebar3/>
                    </Col>
                    <Col md={9}>
                        <h1>{pestName}</h1>
                        <Tips3 />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div> 
    );
};

export default ExplainTips3;