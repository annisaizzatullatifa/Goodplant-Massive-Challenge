import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Sidebar10 from "../Components/Sidebar10";
import Tips10 from "../Components/Tips10";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ExplainTips10 = () => {
    const { plantName } = useParams();

    return (
        <div>
            <NavigationBar />
            <Container fluid className="mt-3">
                <Row>
                    <Col md={3}>
                        <Sidebar10/>
                    </Col>
                    <Col md={9}>
                        <h1>{plantName}</h1>
                        <Tips10 />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div> 
    );
};

export default ExplainTips10;