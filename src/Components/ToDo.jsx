/** @format */
import { Button, Form, Input } from 'antd';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState();
  const InputRef = useRef();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodos = () => {
    setTodos([...todos, { id: Date.now(), title: input }]);
    InputRef.current.focus();
    setInput('')
  };

  const navigateToPrevios = useNavigate();
  const goBackToLogin = () => {
    navigateToPrevios('/login');
  };

  return (
    <>
      <Form className="App-form">
        <Button
          style={{ position: 'fixed', top: '5rem', left: '1rem' }}
          onClick={goBackToLogin}
        >
          Go back
        </Button>
        <div>Todo List</div>
        <Input
        value={input}
          ref={InputRef}
          onChange={handleChangeInput}
          style={{ margin: '10px 0px' }}
        />
        <Button onClick={handleAddTodos}>Add</Button>
        <ul style={{ padding: '0' }}>
          {todos.map((todo) => {
            /* index = index + 1; */
            return (
              <li
                key={todo.id}
                style={{
                  listStyle: 'none',
                }}
              >
                <i>{todo.title}</i>
              </li>
            );
          })}
        </ul>
      </Form>
    </>
  );
};
