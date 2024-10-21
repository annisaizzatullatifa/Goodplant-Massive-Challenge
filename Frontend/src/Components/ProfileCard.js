import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../Style/Profile.css';
import bintangImage from '../Gambar/Bintang.png';
import bgProfile1 from '../Gambar/bgProfile1.png'

const ProfileCard = ({ user }) => {
  return (
    <Card className="profile-card">
      <Card.Img variant="top" src={bgProfile1} className="cover-photo"/>
      <Card.Body>
        <div className="profile-picture-container">
          <img src={bintangImage} alt="Profile" className="profile-picture"/>
          <Button variant="light" className="edit-icon">
            <i className="bi bi-pencil"></i>
          </Button>
        </div>
        <Card.Title className='userName'>{user.name}</Card.Title>
        <Card.Text className='userEmail'>{user.email}</Card.Text>
        <Card.Text className='userPhone'>{user.phone}</Card.Text>
        <Card.Text className='userBio'>{user.bio}</Card.Text>
        <a href="/ChangePassword"><Button className="edit-password">Change Password</Button></a>
      </Card.Body>
    </Card>
  );
};

export default ProfileCard;
