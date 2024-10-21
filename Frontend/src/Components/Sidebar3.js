// src/Sidebar.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import penyakitBusuk from "../Gambar/penyakitBusuk.png";
import '../Style/Sidebar3.css';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h4>Pest Guides</h4>
      </div>
      <ListGroup className="ListGroup">
        <ListGroup.Item action onClick={() => handleNavigation('/ulatDaun')}>Ulat Daun</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/lalatPenggorok')}>Lalat Penggorok Daun</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/penyakitBusuk')}>Penyakit Busuk</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/antraknosa')}>Penyakit Antraknosa</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/kutuPutih')}>Kutu Putih</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/kutuKabul')}>Kutu Kabul</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/lalatBuah')}>Lalat Buah</ListGroup.Item>
        <ListGroup.Item action onClick={() => handleNavigation('/walangSangit')}>Walang Sangit</ListGroup.Item>
      </ListGroup>
      <img src={penyakitBusuk} alt="Sidebar" className="sidebar-image" />
    </div>
  );
};

export default Sidebar;