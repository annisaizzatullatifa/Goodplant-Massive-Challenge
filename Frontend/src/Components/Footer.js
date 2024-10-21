import React from 'react'
import Logo from "../Gambar/Logo.png"
import '../Style/Footer.css' 
import {Col, Form, Button, Container, Row, InputGroup} from "react-bootstrap"

const Footer = () => {
  return (
    <footer className="py-4" id="footer">
    <Container>
      <Row className="text-center text-md-left">
        <Col md={2} className="mb-4 mb-md-0">
          <img
          src= {Logo}
          />
        </Col>
        <Col md={2} className="mb-4 mb-md-0">
          <div className="site">
            <p>Site Links</p>
            <ul className="list-unstyled">
              <li><a href="/">My Plant</a></li>
              <li><a href="/">Gallery</a></li>
              <li><a href="/">Guides</a></li>
              <li><a href="/">Schedule</a></li>
            </ul>
          </div>
        </Col>
        <Col md={2} className="mb-4 mb-md-0">
          <div className="learn">
            <p>Learn</p>
            <ul className="list-unstyled">
              <li><a href="/">Plant</a></li>
              <li><a href="/">Pest</a></li>
            </ul>
          </div>
        </Col>
        <Col md={2} className="mb-4 mb-md-0">
          <div className="from-us">
            <p>More From Us</p>
            <ul className="list-unstyled">
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">About Us</a></li>
              <li><a href="/">FAQ</a></li>
              <li><a href="/">Sign in</a></li>
            </ul>
          </div>
        </Col>
        <Col md={4}>
          <div className="eml-input">
            <p>Let's Stay Connected</p>
            <InputGroup className="mb-2">
              <Form.Control
                placeholder="Your email"
                aria-label="Email"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                SUBS
              </Button>
            </InputGroup>
            <p className="mt-2">
            by filling the form, you agree that you will get our newspaper
            </p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} className="text-center">
          <div className="border-top pt-3 mt-3">
            <p>Good Plants</p>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
  );
}

export default Footer;