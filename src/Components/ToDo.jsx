/** @format */
import { Button, Form, Input, Checkbox } from 'antd';

import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editInput, setEditInput] = useState();
  const InputRef = useRef();

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodos = () => {
    let entered = InputRef.current.input.value;
    if (entered.trim() !== '') {
      setTodos([...todos, { id: Date.now(), title: input, status: false }]);
      InputRef.current.focus();
      setInput('');
    } else {
      setTodos([...todos]);
    }
  };

  const handleEditToDo = (id, name) => {
    setEditMode(id);
    setEditInput(name);
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

  const handleDelete = (id) => {
    const newTodosArray = [...todos].filter((item) => item.id !== id);
    setTodos(newTodosArray);
  };

  const statusIsCompleted = (id) => {
   setTodos(todos.map((item) =>({
    ...item,
    status: item.id === id && !item.status
   })));
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
        <h1 style={{ color: 'white' }}>Todo List</h1>
        <Input
          value={input}
          ref={InputRef}
          onChange={handleChangeInput}
          style={{ margin: '10px 0px' }}
        />
        <Button onClick={handleAddTodos}>Add</Button>
        {todos.map((todo) => {
          return (
            <ul style={{ padding: '0' }} key={todo.id}>
              {todo.status ? (
                <li
                  key={todo.id}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    listStyle: 'none',
                    margin: '10px 0px',
                    textDecorationLine: 'line-through',
                    textDecorationColor: 'black',
                    textDecorationStyle: 'double',
                  }}
                >
                  <Checkbox
                    onChange={() => statusIsCompleted(todo.id)}
                  ></Checkbox>
                  {editMode === todo.id ? (
                    <Input
                      onChange={(e) => setEditInput(e.target.value, todo.title)}
                      value={editInput}
                    />
                  ) : (
                    <Input value={todo.title}
                    />
                  )}

                  {editMode === todo.id ? (
                    <div>
                      <Button
                        onClick={() => saveHandle(todo.id)}
                        style={{ width: '2.5rem', textDecorationLine: 'none' }}
                      >
                        Save
                      </Button>
                    </div>
                  ) : (
                    <div>
                      {todo.status ? (
                        <Button style={{ width: '2.5rem'}}>Done</Button>
                      ) : (
                        <Button
                          onClick={() => handleEditToDo(todo.id, todo.title)}
                          style={{ width: '2.5rem' }}
                        >
                          Edit
                        </Button>
                      )}
                    </div>
                  )}
                  <div>
                    <Button onClick={() => handleDelete(todo.id)}>
                      Delete
                    </Button>
                  </div>
                </li>
              ) : (
                <li
                  key={todo.id}
                  style={{
                    display: 'flex',
                    gap: '10px',
                    listStyle: 'none',
                    margin: '10px 0px',
                  }}
                >
                  <Checkbox
                    onChange={() => statusIsCompleted(todo.id)}
                  ></Checkbox>
                  {editMode === todo.id ? (
                    <Input
                      onChange={(e) => setEditInput(e.target.value, todo.title)}
                      value={editInput}
                    />
                  ) : (
                    <Input value={todo.title} />
                  )}

                  {editMode === todo.id ? (
                    <Button
                      onClick={() => saveHandle(todo.id)}
                      style={{ width: '2.5rem' }}
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      onClick={() => handleEditToDo(todo.id, todo.title)}
                      style={{ width: '2.5rem' }}
                    >
                      Edit
                    </Button>
                  )}

                  <Button onClick={() => handleDelete(todo.id)}>Delete</Button>
                </li>
              )}
            </ul>
          );
        })}
      </Form>
    </>
  );
};
