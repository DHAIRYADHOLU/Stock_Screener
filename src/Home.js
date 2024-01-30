// Home.js
import React, { useState } from 'react';
import { Container, TextField, InputAdornment, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [stockData, setStockData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://cloud.iexapis.com/stable/stock/${searchTerm}/quote?token=pk_e7d1d64953384365928d4875b416f8b1`);
      const data = await response.json();
      setStockData(data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  const handleSuggestionClick = (symbol) => {
    setSearchTerm(symbol);
    handleSearch();
  };

  // Dummy stock suggestions for illustration
  const stockSuggestions = [
    'AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'FB', 'NFLX', 'NVDA', 'IBM', 'PYPL', 'CSCO', 'AAP'
  ];

  const renderStockDetails = () => {
    if (!stockData) {
      return null;
    }

    return (
      <TableContainer component={Paper} className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Details</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Symbol</TableCell>
              <TableCell>{stockData.symbol}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>{stockData.companyName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Last Price</TableCell>
              <TableCell>{stockData.latestPrice}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Previous Close</TableCell>
              <TableCell>{stockData.previousClose}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>52-Week High</TableCell>
              <TableCell>{stockData.week52High}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>52-Week Low</TableCell>
              <TableCell>{stockData.week52Low}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Volume</TableCell>
              <TableCell>{stockData.latestVolume}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Container component="main" maxWidth="xs" className="home-container">
      <div className="scrollable-container">
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search stocks..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSearch}
                  style={{ backgroundColor: '#161616',}}
                >
                  <SearchIcon color="action" style={{color:'white'}}/>
                </Button>
              </InputAdornment>
            ),
          }}
        />

        <div className="suggestions-section">
          <p>Suggestions:</p>
          <div className="suggestion-buttons">
            {stockSuggestions.map((stock, index) => (
              <Button
                key={index}
                variant="outlined"
                className="suggestion-button"
                onClick={() => handleSuggestionClick(stock)}
                style={{ marginTop: '15px', height: '40px', backgroundColor: 'white', color: 'black', borderColor: 'grey' }}
              >
                {stock}
              </Button>
            ))}
          </div>
        </div>

        {renderStockDetails()}
      </div>
    </Container>
  );
};

export default Home;
