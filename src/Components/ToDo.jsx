/** @format */
import { Button, Form, Input } from 'antd';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState();
  const [editMode, setEditMode] = useState(null);
  const [editInput, setEditInput] = useState()
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

  function handleEditToDo (id, name) {
    InputEditModeRef.current.focus();
    setEditMode(id)
    setEditInput(name)
  };

  const saveHandle = (id) => {
    const copyArray = [...todos].map((item) => {
      if (item.id === id) {
        return (item.title = editInput);
      }
    });
    setEditInput(copyArray);
    setEditMode(null);
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
                {editMode === todo.id ? (
                  <Input onChange={(e) => setEditInput(e.target.value, todo.title)}
                  value={editInput}
                  />
                ) : (
                  <Input ref={InputEditModeRef} value={todo.title}  />
                )}
                {editMode ===  todo.id ? (
                  <Button onClick={() => saveHandle(todo.id)} style={{width:"2.5rem"}}>Save</Button>
                ) : (
                  <Button onClick={() => handleEditToDo(todo.id, todo.title)} style={{width:"2.5rem"}}>
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