// src/Sidebar.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import jahe from "../Gambar/jahe.jpg";
import '../Style/Sidebar18.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4>Plant Guides</h4>
      </div>
      <ListGroup className="ListGroup">
        <ListGroup.Item action onClick={() => handleNavigation('/bayam')}>Bayam</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/labuSiam')}>Labu Siam</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/jamurTiram')}>Jamur Tiram</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/selada')}>Selada</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/terongUngu')}>Terong Ungu</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/bawangMerah')}>Bawang Merah</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/Tomat')}>Tomat</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/kacangPanjang')}>Kacang Panjang</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/jahe')}>Jahe</ListGroup.Item>
      </ListGroup>
      <img src={jahe} alt="Sidebar" className="sidebar-image" />
    </div>
  );
};

export default Sidebar;