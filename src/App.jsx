import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/blog:id" element={<Blog />} />
    </Routes>
   
     </BrowserRouter>
   
  );
};

export default App;
