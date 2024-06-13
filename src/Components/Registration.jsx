/** @format */
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
    age:'',
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
    <div className="App">
      <form>
        <label htmlFor="fname">username:</label>
        <br />
        <input
          id="username"
          name="fname"
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
      <NavLink to="/login">Already have an account? Log in.</NavLink>
      <Outlet />
    </div>
  );
};
