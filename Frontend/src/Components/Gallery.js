import React, { useState } from 'react';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import '../Style/Gallery.css';
import GP1 from '../Gambar/GP1.png';
import GP2 from '../Gambar/GP2.png';
import GP3 from '../Gambar/GP3.png';
import GP4 from '../Gambar/GP4.png';
import GP5 from '../Gambar/GP5.png';
import GP6 from '../Gambar/GP6.png';
import GP7 from '../Gambar/GP7.png';

const images = [GP1, GP2, GP3, GP4, GP5, GP6, GP7];

const Gallery = () => {
  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

  const handleShow = (image) => {
    setCurrentImage(image);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <div className="bannerG">
        <div className="overlayG">
          <h1>My Gallery</h1>
          <p>This is the gallery for all of the plants picture</p>
        </div>
      </div>
      <Container fluid>
        <Row>
          {images.map((image, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <img
                src={image}
                alt={`Plant ${index + 1}`}
                className="img-thumbnail gallery-image"
                onClick={() => handleShow(image)}
              />
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Plant Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={currentImage} alt="Plant" className="img-fluid" />
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default Gallery;
