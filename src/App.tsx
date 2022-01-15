import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import MyList from './components/Lists/MyList';
import Profile from './components/Profile';
import WishesCreate from './components/Wishes/Create';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/my-list" element={<MyList />} />

        <Route path="/wishes/create" element={<WishesCreate />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
