import './App.css';
// import InputTodo from './components/InputTodo';
import {Form, Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <h1 className='text-center mt-5'>Pern Todo List</h1>
      <Form className='mt-5 w-50 m-auto'>
        <Form.Group className='d-flex justify-content-center'>
          <Form.Control type='text' placeholder='description' className='mx-5'/>
          <Button type="submit">Add</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
