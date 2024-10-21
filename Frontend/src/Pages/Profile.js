import React from 'react';
import ProfileCard from '../Components/ProfileCard';
import EditProfileForm from '../Components/EditProfileForm';
import '../Style/Profile.css';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import { Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
  const [user, setUser] = React.useState({
    coverPhoto: 'cover-photo-url',
    profilePicture: 'profile-picture-url',
    name: 'Lintang Macario',
    email: 'LintangMacario@gmail.com',
    phone: '08234567891011',
    bio: 'Menumbuhkan kebahagiaan dari kebun kecil di rumah'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUser({ ...user, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
        <NavigationBar />
        <Container>
        <Row className="justify-content-center mt-5">
          <Col md={6}>
            <ProfileCard user={user}/>
          </Col>
          <Col md={6} >
            <EditProfileForm user={user} handleChange={handleChange} handleSubmit={handleSubmit} />
          </Col>
        </Row>
      </Container>
        <Footer />
    </>
  );
};

export default Profile;
