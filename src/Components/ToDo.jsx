/** @format */
import { Button, Form, Input } from 'antd';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState();
  const [editMode, setEditMode] = useState(null);
  const InputRef = useRef();
  const InputEditModeRef = useRef();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodos = () => {
    setTodos([...todos, { id: Date.now(), title: input }]);
    InputRef.current.focus();
    setInput('');
  };

  const onChangeInputToDo = (e) => {
    setEditMode(e.target.value);
  };

  const handleEditToDo = (id, title) => {
    setEditMode(true);
    todos.map((todos) => {
      if (todos.id === id) {
      }
    });
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
                  display: 'flex',
                  gap: '10px',
                  listStyle: 'none',
                  margin: '10px 0px',
                }}
              >
                {editMode ? (
                  <Input ref={InputEditModeRef} />
                ) : (
                  <Input value={todo.title} onChange={onChangeInputToDo} />
                )}
                {editMode ? (
                  <Button>Save</Button>
                ) : (
                  <Button onClick={() => handleEditToDo(todo.id, todo.title)}>
                    Edit
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      </Form>
    </>
  );
};
