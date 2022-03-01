import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EditTodo = ({ todo }) => {
  const [show, setShow] = useState(false);
  const [description, setDescription] = useState(todo.description);

  const handleClose = () => {
    setShow(false);
    setDescription(todo.description);
  };
  const handleShow = () => setShow(true);

  const onSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch(`http://localhost:5002/todos/${todo.todo_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      handleClose();
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log(todo);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => onSubmitEdit(e)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditTodo;
