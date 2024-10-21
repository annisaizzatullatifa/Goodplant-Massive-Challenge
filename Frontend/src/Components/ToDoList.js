import React from 'react';
import { ListGroup, Form, Button } from 'react-bootstrap';
import '../Style/ToDoList.css';

const ToDoList = ({ tasks, handleAddTask, handleTaskChange, handleDeleteTask, newTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask();
  };

  const handleDelete = (index) => {
    handleDeleteTask(index);
  };

  return (
    <div className="todo-list">
      <h4>To do List</h4>
      <ListGroup>
        {tasks.map((task, index) => (
          <ListGroup.Item key={index}>
            <div className="task-item">
              <Form.Check type="checkbox" label={task} />
              <Button className="del" variant="danger" onClick={() => handleDelete(index)}>Delete</Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="newTask">
          <Form.Control type="text" placeholder="New Task" value={newTask} onChange={handleTaskChange} />
        </Form.Group>
        <Button className="add" variant="primary" type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default ToDoList;
