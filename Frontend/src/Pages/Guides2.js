import React from "react";
import { useNavigate } from 'react-router-dom';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { Container, Row, Col, Card } from "react-bootstrap";
import bayam from "../Gambar/bayam.jpg";
import labuSiam from "../Gambar/labuSiam.jpg";
import jamurTiram from "../Gambar/jamurTiram.jpg";
import selada from "../Gambar/selada.jpg";
import terongUngu from "../Gambar/terongUngu.jpg";
import bawangMerah from "../Gambar/bawangMerah.jpg";
import tomat from "../Gambar/Tomat.jpg";
import kacangPanjang from "../Gambar/kacangPanjang.jpg";
import jahe from "../Gambar/jahe.jpg";
import "../Style/Guides2.css";

const plants = [
  { name: "Bayam", image: bayam, path: "/bayam" },
  { name: "Labu Siam", image: labuSiam, path: "/labuSiam" },
  { name: "Jamur Tiram", image: jamurTiram, path: "/jamurTiram"},
  { name: "Selada", image: selada, path: "/selada"},
  { name: "Terong Ungu", image: terongUngu, path: "/terongUngu"},
  { name: "Bawang Merah", image: bawangMerah, path: "/bawangMerah"},
  { name: "Tomat", image: tomat, path: "/Tomat"},
  { name: "Kacang Panjang", image: kacangPanjang, path: "/kacangPanjang"},
  { name: "Jahe", image: jahe, path: "/jahe"}
];

const Guides2 = () => {
    const navigate = useNavigate();
  
    const handleCardClick = (path) => {
      navigate(path);
    };

  return (
    <>
      <NavigationBar />
      <Container className="text-center my-5">
        <h1>Plant Guides</h1>
        <p>Information about tips and tricks for planting several plants in your garden</p>
        <Row>
          {plants.map((plant, index) => (
            <Col xs={12} md={4} className="mb-4" key={index}>
              <Card className="h-100" onClick={() => handleCardClick(plant.path)}>
                <Card.Img variant="top" src={plant.image} className="card-img"/>
                <Card.Body>
                  <Card.Title>{plant.name}</Card.Title>
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

export default Guides2;
