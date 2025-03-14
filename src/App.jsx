// src/App.jsx

import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddBook from './components/AddBook';
import Home from './Home';
import './App.css'; // Import global styles

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
        </Routes>
      </Router>
  );
}

export default App;
