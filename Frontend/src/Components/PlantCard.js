import React from 'react';
import { Card } from 'react-bootstrap';
import '../Style/PlantCard.css';

const PlantCard = ({ date, task }) => (
  <Card className="plant-card">
    <Card.Body>
      <Card.Title>{date}</Card.Title>
      <Card.Text className='Tdl'>
        <div>To do List</div>
        <div>{task}</div>
      </Card.Text>
    </Card.Body>
  </Card>
);

export default PlantCard;
