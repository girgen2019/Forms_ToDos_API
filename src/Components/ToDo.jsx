/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState()

  const handleAddTodos = () => {
    setTodos([...todos,{id:Date.now(),title:input}])
  }

  const handleChangeInput = (e) => {
    setInput(e.target.value)
  }

  const navigateToPrevios = useNavigate();
  const goBackToLogin = () => {
    navigateToPrevios('/login');
  };

  return (
    <>
      <button
        style={{ position: 'fixed', top: '5px', left: '5px' }}
        onClick={goBackToLogin}
      >
        Go back
      </button>
      <div>Todo List</div>
      <input  onChange={handleChangeInput}/>
      <button onClick={handleAddTodos}>Add</button>
      <ul>{todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}</ul>
    </>
  );
};
