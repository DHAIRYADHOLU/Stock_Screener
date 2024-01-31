// src/BottomNavBar.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Apps, Search, AccountCircle, Build } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './BottomNavBar.css'; // Import the CSS file

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className="bottomNavBar" // Apply the CSS class here
    >
      <Link to="/home">
        <BottomNavigationAction label="Home" icon={<Home />} />
      </Link>
      <Link to="/screens">
        <BottomNavigationAction label="Screens" icon={<Apps />} />
      </Link>
      <Link to="/tools">
        <BottomNavigationAction label="Tools" icon={<Build />} />
      </Link>
      <Link to="/login">
        <BottomNavigationAction label="Login" icon={<AccountCircle />} />
      </Link>
    </BottomNavigation>
  );
};

export default BottomNavBar;
