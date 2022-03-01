import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const InputTodo = () => {
  const [description, setDescription] = useState('');

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      await fetch('http://localhost:5002/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <Form className="mt-5 w-50 m-auto" onSubmit={onSubmitForm}>
        <Form.Group className="d-flex justify-content-center">
          <Form.Control
            type="text"
            placeholder="description"
            className="mx-5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button type="submit" variant="success" className="px-4">
            Add
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default InputTodo;
