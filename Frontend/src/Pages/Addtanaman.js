import React from "react";
import NavigationBar from "../Components/NavigationBar.js";
import Footer from "../Components/Footer.js";
import { Container ,Row ,Col ,Form ,Button  } from "react-bootstrap";
import "../Style/Addtanaman.css";

const Addtanaman = () => {
    return(
<>
<NavigationBar/>
<div>
<Container>
<Row className="text-center mt-3"> 
    <Col>
    <h1>
      Add Plants 
    </h1>
    <p>
    Add Your Plant today! spending time around plants can improve your mood and reduce stress levels. start now <br/>by filling in the following form
    </p>
    </Col>
</Row>
</Container>
</div>
    <div>
    <Container>
      <Form>
        <Row className="mb-3 mt-5">
          <Col md={4}>
            <div className="image-upload">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="image-upload-label">
                  <div style={{ textAlign: 'center', padding: '20px', border: '1px dashed #ccc' }}>
                    <i className="bi bi-upload" style={{ fontSize: '2rem' }}></i>
                    <p>Upload Image here</p>
                  </div>
                </Form.Label>
                <Form.Control type="file" style={{ display: 'none' }} />
              </Form.Group>
              <Button variant="success">Add Image</Button>
            </div>
          </Col>
          <Col md={8}>
            <Form.Group controlId="formTypeOfPlants" className="mb-3">
              <Form.Label>Type of plants</Form.Label>
              <Form.Control type="text" placeholder="Type here" />
            </Form.Group>
            <Form.Group controlId="formPlantName" className="mb-3">
              <Form.Label>Plant Name</Form.Label>
              <Form.Control type="text" placeholder="Type here" />
            </Form.Group>
            <Form.Group controlId="formPlantAge" className="mb-3">
              <Form.Label>Plant Age</Form.Label>
              <Form.Control type="text" placeholder="Type here" />
            </Form.Group>
            <Form.Group controlId="formPlantingStartDate" className="mb-3">
              <Form.Label>Planting Start Date</Form.Label>
              <Form.Control type="date" placeholder="Type here" />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row className="mb-4 mt-3">
        <Col>
        <Form.Group controlId="formFirstPlant" className="mb-3">
          <Form.Label>How your First Plant?</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Type here" />
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="success">Save</Button>
        </div>
        </Col>
      </Row>
    </Container>
   </div>

   <Footer/>
</>
    )
}
export default Addtanaman;