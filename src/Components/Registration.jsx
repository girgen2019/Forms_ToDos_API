/** @format */
import { Button, Checkbox, Form, Input } from 'antd';

import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
export const Registration = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [createUser, setCreateUser] = useState({
    username: '',
    email: '',
    password: '',
    gender: '',
    age: '',
  });

  // 'genadzi'
  // '2022@gmail.com'
  // 'Aa1#fghj'
  // 'male'
  // '30'

  const [request, setRequest] = useState();

  const handleNameForm = (e) => {
    createUser.username = e.target.value;
  };
  const handleEmailForm = (e) => {
    createUser.email = e.target.value;
  };
  const handlePasswordForm = (e) => {
    createUser.password = e.target.value;
  };

  const handleGender = (e) => {
    createUser.gender = e.target.value;
  };

  const handleAge = (e) => {
    createUser.age = e.target.value;
  };

  const saveInformation = (e) => {
    e.preventDefault();

    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(createUser),
    };
    async function request() {
      return await fetch(
        'https://todo-redev.herokuapp.com/api/users/register',
        req
      )
        .then((response) => response.json())
        .then((data) => setRequest(data));
    }
    request();
  };

  return (
    <>
      <Form className="App-form">
        <div style={{marginBottom:"5px"}}>username:</div>
        <Input onChange={handleNameForm} style={{ marginBottom: '5px' }} />
        <div style={{marginBottom:"5px"}}>email:</div>
        <Input
          id="email"
          name="email"
          value={email}
          onChange={handleEmailForm}
          style={{ marginBottom: '5px' }}
        />
        <div style={{marginBottom:"5px"}}>password:</div>
        <Input
          id="pass"
          name="pass"
          value={password}
          onChange={handlePasswordForm}
          style={{ marginBottom: '5px' }}
        />
        <div style={{marginBottom:"5px"}}>gender:</div>
        <Input
          id="gender"
          name="gender"
          value={gender}
          onChange={handleGender}
          style={{ marginBottom: '5px' }}
        />
        <div style={{marginBottom:"5px"}}>age:</div>
        <Input
          id="age"
          name="age"
          value={age}
          onChange={handleAge}
          style={{ marginBottom: '5px' }}
        />
        <Button style={{marginTop:"5px"}} onClick={saveInformation}>
          Submit
        </Button>
      </Form>
      <NavLink style={{margin:"10px"}} to="/login">Already have an account? Log in.</NavLink>
      <Outlet />
    </>
  );
};
