/** @format */
import { useRef, useState } from 'react';
import { ButtonGoBack } from './BtnGoBack';
import { ToDoItems } from './ToDoItems';

import { Button, Form, Input } from 'antd';

export const TodoForm = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
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

  const handleDelete = (id) => {
    const newTodosArray = [...todos].filter((item) => item.id !== id);
    setTodos(newTodosArray);
  };

  const statusIsCompleted = (id) => {
    setTodos(
      todos.map((item) => ({
        ...item,
        status: item.id === id ? !item.status : item.status,
      }))
    );
  };

  return (
    <>
      <Form className="App-form">
        <ButtonGoBack pathTo={'login'} />
        <h1 style={{ color: 'white' }}>Todo List</h1>
        <Input
          value={input}
          ref={InputRef}
          onChange={handleChangeInput}
          style={{ margin: '10px 0px' }}
        />
        <Button onClick={handleAddTodos}>Add</Button>
        <ToDoItems
          todos={todos}
          handleDelete={handleDelete}
          statusIsCompleted={statusIsCompleted}
        />
      </Form>
    </>
  );
};
