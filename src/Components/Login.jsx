/** @format */

import { useEffect, useState } from 'react';
import { NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import { Todo } from './ToDo';

const isToken = () => {
  let tokenStore = localStorage.getItem('token');
  if (typeof tokenStore !== 'undefined') {
    return tokenStore;
  }
};

export const Login = () => {
  const [objectLogin, setObjectLogin] = useState({
    email: '',
    password: '',
  });
  const [token, setToken] = useState(isToken());
  const [link, setLink] = useState(false);

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
    (async function loginization() {
      let result = await fetch(
        'https://todo-redev.herokuapp.com/api/auth/login',
        req
      );
      let res = await result.json();
      setToken(res);
      localStorage.setItem('token', res.token);
      return res;
    })();
  };

  // '2022@gmail.com'
  // 'Aa1#fghj'
  useEffect(() => {
    let isCheck = localStorage.getItem('token');
    if(isCheck === "undefined" ){
      setLink(false)
    }else if(isCheck === null){
      setLink(false)
    }else{
      setLink(true)
    }
  });

  return (
    <>
      <div>
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
      </div>
      {link && <NavLink to="/todo">token exist</NavLink>}
    </>
  );
};
