import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Style/GuidesCard.css';

const GuidesCard = ({ title, image, text, link }) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(link);
    };

    return (
        <Card className="guides-card" onClick={handleNavigation}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button onClick={handleNavigation}>Read</Button>
            </Card.Body>
        </Card>
    );
};

export default GuidesCard;
