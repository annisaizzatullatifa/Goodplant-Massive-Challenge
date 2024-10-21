import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import C1 from '../Gambar/C1.jpg';
import C2 from '../Gambar/C2.jpg';
import C3 from '../Gambar/C3.png';
import '../Style/CarouselContent.css'

function CarouselContent() {
    return (
        <Carousel fade>
          <Carousel.Item fade>
            <img className="d-block w-100" src={C1} alt="First slide" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="carousel-title">CLEAN FROM <br></br>PESTICIDE AND <br></br>DANGEROUS <br></br>SUBSTANCE</h3>
              <a href='/MyPlants'><Button className="start-activity-button">Start Activity</Button></a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item fade>
            <img className="d-block w-100" src={C2} alt="Second slide" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="carousel-title">ORGANIC <br></br>GARDENING FOR <br></br>THE HEALTHY OF <br></br>YOU AND FAMILY</h3>
              <a href='/MyPlants'><Button className="start-activity-button">Start Activity</Button></a>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item fade>
            <img className="d-block w-100" src={C3} alt="Third slide" />
            <Carousel.Caption className="carousel-caption">
              <h3 className="carousel-title">USE YOUR FREE <br></br>TIME FOR HOME <br></br>GARDENING</h3>
              <a href='/MyPlants'><Button className="start-activity-button">Start Activity</Button></a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  );
}

export default CarouselContent;
