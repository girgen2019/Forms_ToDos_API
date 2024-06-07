/** @format */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [loginEmail, setLoginEmail] = useState();
  const [loginPassword, setLoginPassword] = useState();
  const [objectLogin, setObjectLogin] = useState();
  const [token, setToken] = useState()

  const handleLoginEmail = () => setLoginEmail('2022@gmail.com');
  const handleLoginPassword = () => setLoginPassword('Aa1#fghj');

  const navigate = useNavigate();
  const goBack = () => navigate('/');

  const handleSubmit = (e) => {
    e.preventDefault();
    setObjectLogin({ email: loginEmail, password: loginPassword });
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objectLogin),
    };
    async function loginization () {
      return await fetch('https://todo-redev.herokuapp.com/api/auth/login', req)
      .then((response) => response.json())
        .then((data) => setToken(data));
    }
    loginization()
  };
console.log(token);
  return (
    <>
      <button
        style={{ position: 'fixed', top: '5px', left: '5px' }}
        onClick={goBack}
      >
        Back
      </button>
      <form>
        <label htmlFor="name">email:</label>
        <br />
        <input
          type="text"
          name="email"
          value={loginEmail}
          onChange={handleLoginEmail}
        />
        <br />
        <label htmlFor="password">password:</label>
        <br />
        <input
          type="text"
          name="password"
          value={loginPassword}
          onChange={handleLoginPassword}
        />
        <br />
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
    </>
  );
};
