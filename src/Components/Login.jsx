/** @format */
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ButtonGoBack } from './BtnGoBack';
import { Button, Form, Input } from 'antd';

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
      <ButtonGoBack pathTo={'Forms_ToDos_API'}/>
        <Form className="App-form">
          <div style={{ marginBottom: '5px' }}>email</div>
          <Input onChange={handleLoginEmail} style={{ marginBottom: '5px' }}/>
          <div style={{ marginBottom: '5px' }}>password</div>
          <Input onChange={handleLoginPassword} style={{ marginBottom: '5px' }}/>
          <Button onClick={handleSubmit} style={{ margin: '10px 0px' }}>Save</Button>
        </Form>
      {link && <NavLink to="/todo_form">token exist</NavLink>}
    </>
  );
};
