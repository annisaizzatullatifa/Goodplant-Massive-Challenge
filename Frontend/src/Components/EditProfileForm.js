import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Style/Profile.css';

const EditProfileForm = ({ user, handleChange, handleSubmit }) => {
  return (
    <Form className="edit-profile-form" onSubmit={handleSubmit}>
      <Form.Group className="firstName" controlId="firstName">
        <Form.Label><b>First Name</b></Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          value={user.firstName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="lastName" controlId="lastName">
        <Form.Label><b>Last Name</b></Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={user.lastName}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="email" controlId="email">
        <Form.Label><b>Email Address</b></Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="phone" controlId="phone">
        <Form.Label><b>Phone</b></Form.Label>
        <Form.Control
          type="text"
          placeholder="Phone"
          value={user.phone}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="bio" controlId="bio">
        <Form.Label><b>Bio</b></Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Bio"
          value={user.bio}
          onChange={handleChange}
        />
      </Form.Group>
      <a href="/Profile">
      <Button className="btnChange" type="submit">Save Changes</Button>
      </a>
    </Form>
  );
};

export default EditProfileForm;
