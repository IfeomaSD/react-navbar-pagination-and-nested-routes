import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SharedLayout from './pages/SharedLayout';

export default function App() {
  return (
  <BrowserRouter>
  <nav>navbar</nav>
  <Routes>
    <Route path= '/' element = {<SharedLayout />} />
    <Route index element = {<Home />} >
<Route path = 'login' element={<Login />} />
</Route>
      <Route path = '*' element = {<Error />} />
</Routes>
</BrowserRouter>
  );
}
