/** @format */

import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const isToken = () => {
  const tokenValue = localStorage.getItem('token')
  if (tokenValue){
    return tokenValue
  }else{
    return localStorage.setItem("tok")
  }
}

export const Login = () => {
  const [objectLogin, setObjectLogin] = useState({
    email: '',
    password: '',
  });
  const [token, setToken] = useState(isToken());

  const handleLoginEmail = (e) => {
    objectLogin.email = e.target.value;
  };

  const handleLoginPassword = (e) => {
    objectLogin.password = e.target.value;
  };

  const navigate = useNavigate();
  const goBack = () => navigate('/');

  const handleSubmit = (e) => {
    e.preventDefault();

    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objectLogin),
    };
    async function loginization() {
      return await fetch('https://todo-redev.herokuapp.com/api/auth/login', req)
        .then((response) => response.json())
        .then((data) => setToken(data));
    }
    loginization();
  
  };

  useEffect(() => {
        return () => {
      localStorage.setItem('token', token);
    }
  },[token]);

  // '2022@gmail.com'
  // 'Aa1#fghj'

  return (
    <>
      <button
        style={{ position: 'fixed', top: '5px', left: '5px' }}
        onClick={goBack}
      >
        Back
      </button>
      <form>
        <div>email</div>
        <input onChange={handleLoginEmail} />
        <div>password</div>
        <input onChange={handleLoginPassword} />
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </>
  );
};
