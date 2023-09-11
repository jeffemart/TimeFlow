import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserLogin from './components/Login/Login';
import Blog from  './pages/Blog';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<UserLogin />}></Route>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
