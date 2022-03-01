import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import EditTodo from './EditTodo';
import "../styles/ListTodos.css"

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const TODO_BASE_URL = 'http://localhost:5002/todos';

  const getTodos = async () => {
    try {
      const response = await fetch(TODO_BASE_URL);
      const data = await response.json();
      setTodos(data.rows);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onDeleteTodo = async (id) => {
    await fetch(TODO_BASE_URL + `/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo.todo_id !== id));
  };

  useEffect(() => {
    getTodos();
  }, []);

  console.log(todos);

  return (
    <Table striped bordered hover className="w-50 mt-5 m-auto text-center">
      <thead className='table-head'>
        <tr className='header-row'>
          <th>Todo</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo.todo_id}>
              <td className='description'>{todo.description}</td>
              <td>
                <EditTodo todo={todo}/>
              </td>
              <td>
                <Button
                  type="text"
                  variant="danger"
                  onClick={() => onDeleteTodo(todo.todo_id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ListTodos;
