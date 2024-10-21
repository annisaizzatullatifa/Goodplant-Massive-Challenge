import React from "react";
import { useNavigate } from 'react-router-dom';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import ulatDaun from "../Gambar/ulatDaun.png";
import antraknosa from "../Gambar/antraknosa.png";
import lalatBuah from "../Gambar/lalatBuah.png";
import lalatPenggorokDaun from "../Gambar/lalatPenggorok.png";
import kutuPutih from "../Gambar/kutuPutih.png";
import walangSangit from "../Gambar/walangSangit.png";
import penyakitBusuk from "../Gambar/penyakitBusuk.png";
import kutuKebul from "../Gambar/kutuKebul.png";
import siputBekicot from "../Gambar/siputBekicot.png";
import "../Style/Guides.css";

const pests = [
  { name: "Ulat Daun", image: ulatDaun, path: "/ulatDaun"},
  { name: "Lalat Penggorok Daun", image: lalatPenggorokDaun, path: "/lalatPenggorok"},
  { name: "Penyakit Busuk", image: penyakitBusuk, path: "/penyakitBusuk"},
  { name: "Antraknosa", image: antraknosa, path: "/antraknosa"},
  { name: "Kutu Putih", image: kutuPutih, path: "/kutuPutih"},
  { name: "Kutu Kebul", image: kutuKebul, path: "/kutuKebul"},
  { name: "Lalat Buah", image: lalatBuah, path: "/lalatBuah"},
  { name: "Walang Sangit", image: walangSangit, path: "/walangSangit"},
  { name: "Siput/Bekicot", image: siputBekicot, path: "/siputBekicot"}
];

const Guides = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <NavigationBar />
      <Container className="text-center my-5">
        <h1>Pest Guides</h1>
        <p>Some information about popular pests and diseases in plants</p>
        <Row>
          {pests.map((pest, index) => (
            <Col xs={12} md={4} className="mb-4" key={index}>
              <Card className="h-100" onClick={() => handleCardClick(pest.path)}>
                <Card.Img variant="top" src={pest.image} className="card-img" />
                <Card.Body>
                  <Card.Title>{pest.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Guides;
