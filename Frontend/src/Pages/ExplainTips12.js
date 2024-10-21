import React from "react";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import Sidebar12 from "../Components/Sidebar12";
import Tips12 from "../Components/Tips12";
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ExplainTips12 = () => {
    const { plantName } = useParams();

    return (
        <div>
            <NavigationBar />
            <Container fluid className="mt-3">
                <Row>
                    <Col md={3}>
                        <Sidebar12/>
                    </Col>
                    <Col md={9}>
                        <h1>{plantName}</h1>
                        <Tips12 />
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div> 
    );
};

export default ExplainTips12;