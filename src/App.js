// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BottomNavBar from './components/core/BottomNavBar';
import Home from './views/home';
import Screens from './components/core/Screens';
import Login from './views/login';
import Tools from './views/tools';
import Register from './views/register';
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Import TrendingUpIcon
import './App.css';



// Header component
const Header = () => {
  return (
    <header className="app-header">
      {/* Up Graph Logo */}

      <h1> <TrendingUpIcon fontSize="large" style={{ color: 'green' }} />Stock Screener</h1>
    </header>
  );
};

function App() {
  return (
    <Router>
      <div>
        {/* Header */}
        <Header />
        <div className="marquee-container">
          <marquee behavior="scroll" direction="left" scrollamount="4">
            {/* demo */}
            <span className="marquee-texts">AAPL : </span>
            <span className="marquee-text-up">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-down">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-up">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-down">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-up">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-down">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-up">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-down">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-up">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-down">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-up">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-down">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-up">134.09</span>
            <span> | </span>
            <span className="marquee-texts"> AAPL : </span>
            <span className="marquee-text-down">134.09</span>

            {/* demo */}
          </marquee>
        </div>
        {/* Your main content goes here */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/screens" element={<Screens />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Bottom Navigation Bar */}
        <BottomNavBar />
      </div>
    </Router>
  );
}

export default App;
