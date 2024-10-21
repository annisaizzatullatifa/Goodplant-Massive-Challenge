import React from 'react';
import '../Style/UserReview.css';
import { Card, Container } from 'react-bootstrap';

const UserReview = ({ name, email, date, review, image }) => {
    return (
        <Container className="user-review-container">
            <h2 className="user-review-title">User Reviews</h2>
            <p className="user-review-subtitle">Honest reviews from various good plant website users</p>
            <Card className="user-review-card">
                <Card.Body className="user-review-card-body">
                    <div className="user-review-image-container">
                        <img src={image} alt={name} className="user-review-image" />
                    </div>
                    <div className="user-review-text">
                        <Card.Title className="user-review-name">{name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted user-review-email">{email}</Card.Subtitle>
                        <Card.Text className="user-review-date">{date}</Card.Text>
                        <Card.Text className="user-review-content">{review}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserReview;
