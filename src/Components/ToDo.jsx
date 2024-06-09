/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleAddTodos = () => {
    
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
      <input />
      <button>Add</button>
    </>
  );
};
