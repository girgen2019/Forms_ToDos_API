/** @format */
import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
export const Registration = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [createUser, setCreateUser] = useState();
  const [request, setRequest] = useState();

  const handleNameForm = () => {
    setName('genadzi');
  };
  const handleEmailForm = () => {
    setEmail('2022@gmail.com');
  };
  const handlePasswordForm = () => {
    setPassword('Aa1#fghj');
  };

  const handleGender = () => {
    setGender('male');
  };

  const handleAge = () => {
    setAge('30');
  };

  const saveInformation = (e) => {
    e.preventDefault();
    setCreateUser({
      username: name,
      email: email,
      password: password,
      gender: gender,
      age: age,
    });
    setName('');
    setEmail('');
    setPassword('');
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
    <div className="App">
      <form>
        <label htmlFor="fname">username:</label>
        <br />
        <input
          id="username"
          name="fname"
          value={name}
          onChange={handleNameForm}
        />
        <br />
        <label htmlFor="email">email:</label>
        <br />
        <input
          id="email"
          name="email"
          value={email}
          onChange={handleEmailForm}
        />
        <br />
        <label htmlFor="pass">password:</label>
        <br />
        <input
          id="pass"
          name="pass"
          value={password}
          onChange={handlePasswordForm}
        />
        <br />
        <label htmlFor="pass">gender:</label>
        <br />
        <input
          id="gender"
          name="gender"
          value={gender}
          onChange={handleGender}
        />
        <br />
        <label htmlFor="pass">age:</label>
        <br />
        <input id="age" name="age" value={age} onChange={handleAge} />
        <br />
        <input type="submit" value="Submit" onClick={saveInformation} />
      </form>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '10px 0px',
        }}
      >
        <div>name is: {name}</div>
        <div>email is: {email}</div>
        <div>password is: {password}</div>
      </div>
      <NavLink to="/login">Already have an account? Log in.</NavLink>
      <Outlet />
    </div>
  );
};
