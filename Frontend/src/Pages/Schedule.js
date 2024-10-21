import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PlantCard from '../Components/PlantCard';
import ToDoList from '../Components/ToDoList';
import ConditionForm from '../Components/ConditionForm';
import '../Style/Schedule.css';
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";

const Schedule = () => {
  const [tasks, setTasks] = useState(['Memberi Pupuk pada tanaman']);
  const [newTask, setNewTask] = useState('');
  const [condition, setCondition] = useState('');
  const [image, setImage] = useState(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleTaskChange = (e) => setNewTask(e.target.value);

  const handleConditionChange = (e) => setCondition(e.target.value);

  const handleImageUpload = (e) => setImage(URL.createObjectURL(e.target.files[0]));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submit logic
  };

  return (
    <>
    <NavigationBar/>
    <Container>
      <Row>
        <Col>
          <PlantCard date="Friday, 17 May 2024" task={tasks[0]} />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ToDoList tasks={tasks} handleAddTask={handleAddTask} handleTaskChange={handleTaskChange} newTask={newTask} />
        </Col>
        <Col md={6}>
          <ConditionForm
            condition={condition}
            handleConditionChange={handleConditionChange}
            handleSubmit={handleSubmit}
            imageUpload={handleImageUpload}
          />
          {image && <img src={image} alt="Uploaded" />}
        </Col>
      </Row>
    </Container>
    <Footer/>
    </>
  );
};

export default Schedule;
