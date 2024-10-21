import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Style/ConditionForm.css';

const ConditionForm = ({ condition, handleConditionChange, handleSubmit, imageUpload }) => (
  <div className="condition-form">
    <h4>Condition of My Plant</h4>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="condition">
        <Form.Label>Problem</Form.Label>
        <Form.Control as="textarea" rows={3} value={condition} onChange={handleConditionChange} />
      </Form.Group>
      <Form.Group className="imageUpload" controlId="imageUpload">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" onChange={imageUpload} />
      </Form.Group>
      <Button className="subm" variant="primary" type="submit">Save</Button>
    </Form>
  </div>
);

export default ConditionForm;
