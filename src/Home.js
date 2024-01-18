// Home.js
import React from 'react';
import { Container, TextField, InputAdornment, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Home.css'; // Import the CSS file

const Home = () => {
  // Dummy stock suggestions for illustration
  const stockSuggestions = [
    'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'FB', 'NFLX', 'NVDA',
    'IRFC', 'RBI', 'TATA', 'ITC', 'GS', 'IBM', 'DIS', 'V', 'PYPL', 'BA', 'CSCO', 'AAP'
  ];
  
  

  return (
    <Container component="main" maxWidth="xs" className="home-container">
      <TextField
        variant="outlined"
        fullWidth
        placeholder="Search stocks..."
        className="search-bar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      <div className="suggestions-section">
        <p>Suggestions:</p>
        <div className="suggestion-buttons">
          {stockSuggestions.map((stock, index) => (
            <Button key={index} variant="outlined" className="suggestion-button">
              {stock}
            </Button>
          ))}
        </div>
      </div>

      {/* Additional content for the Home component */}
    </Container>
  );
};

export default Home;
