import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Layout from './pages/Home/layout.jsx';
import AboutUsLayout from './pages/About-us/layout.jsx';
import Terms from './pages/TermsAndCondition/layout.jsx';
import Cummission from './pages/Commission-and-artwork/layout.jsx';
import LiveArtClasses from './pages/Live-Class/layout.jsx';
import ArtEvent  from './pages/Art-Event/layout.jsx';

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/about-us" element={<AboutUsLayout />} />
      <Route path="/terms-and-condition" element={<Terms />} />
      <Route path="/Commission-and-artwork" element={<Cummission />} />
      <Route path="/Live-Class" element={<LiveArtClasses/>} />
      <Route path="/Art-Event" element={<ArtEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
