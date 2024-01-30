// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavBar from './BottomNavBar';
import Home from './Home';
import Screens from './Screens';
import Login from './Login';
import Tools from './Tools';
import Register from './Register';
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Import TrendingUpIcon
import './App.css';



// Header component
const Header = () => {
  return (
    <header className="app-header">
      {/* Up Graph Logo */}
     
      <h1> <TrendingUpIcon fontSize="large" style={{color:'green'}} />Stock Screener</h1>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />

        {/* Your main content goes here */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/screens" element={<Screens />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register/>} />
        </Routes>

        {/* Bottom Navigation Bar */}
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
