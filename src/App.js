/** @format */

import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { useEffect, useState } from 'react';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import { Registration } from './Components/Registration';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
