import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap';
import Home from './components/Home/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
