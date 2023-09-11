import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserLogin from './components/Login/Login';
import Signup from './components/Signup/Signup';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLogin />}></Route>
        <Route path='/' element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
