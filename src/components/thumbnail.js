import React from 'react';
import { Card } from 'react-bootstrap';
import './thumbnail.css';

const Thumbnail = ({ image, title, description }) => {
  return (
    <Card className="thumbnail">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Thumbnail;
