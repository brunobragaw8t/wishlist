import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap';
import Header from './components/partials/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
