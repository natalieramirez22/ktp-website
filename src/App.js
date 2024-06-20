import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './tailwind.css';
import Home from './home'
import Rush from './rush';
import Members from './members';
import About from './about';
import Nationals from './nationals';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rush" element={<Rush />} />
        <Route path="/members" element={<Members />} />
        <Route path="/about" element={<About />} />
        <Route path="/nationals" element={<Nationals />} />
      </Routes>
    </Router>
  );
}

export default App;
