import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Style/changePassword.css';

const ChangePasswordForm = ({ handleChange, handleSubmit }) => {
  return (
    <div className="form-container">
      <Form className="change-password-form" onSubmit={handleSubmit}>
      <h1 className="form-title">Change Password</h1>
      <Form.Group className="oldPassword" controlId="oldPassword">
        <Form.Label><b>Old Password</b></Form.Label>
        <Form.Control
          type="password"
          placeholder="Old Password"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="newPassword" controlId="newPassword">
        <Form.Label><b>New Password</b></Form.Label>
        <Form.Control
          type="password"
          placeholder="New Password"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="confirmPass" controlId="confirmPassword">
        <Form.Label><b>Confirm Password</b></Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
      </Form.Group>

      <div className="button-container">
        <a href="/"><Button className='pswrd' type="submit">Save Password</Button></a>
      </div>
    </Form>
    </div>
  );
};

export default ChangePasswordForm;
