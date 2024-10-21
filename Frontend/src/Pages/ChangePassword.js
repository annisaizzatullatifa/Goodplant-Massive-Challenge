import React from 'react';
import ChangePasswordForm from '../Components/ChangePasswordForm.js';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import '../Style/changePassword.css';

const ChangePassword = () => {
  const handleChange = (e) => {
    // Handle change logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save password logic here
  };

  return (
    <>
      <NavigationBar />
      <div className="change-password-page">
        <ChangePasswordForm handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
      <Footer />
    </>
  );
};

export default ChangePassword;
