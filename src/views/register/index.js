// Register.js
import React from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { AccountCircle, LockOutlined } from '@mui/icons-material';
import './Register.css'; // Import the CSS file

const Register = () => {
  return (
    <Container component="main" maxWidth="xs" className="register-container" style={{ marginBottom: '4rem' }}>
      <div>
        <form className="register-form">
          <h1>Create Account</h1>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="given-name"
                className="register-input"
                InputProps={{
                  startAdornment: (
                    <AccountCircle color="action" style={{ marginRight: '0.5rem' }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                className="register-input"
                InputProps={{
                  startAdornment: (
                    <AccountCircle color="action" style={{ marginRight: '0.5rem' }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                className="register-input"
                InputProps={{
                  startAdornment: (
                    <AccountCircle color="action" style={{ marginRight: '0.5rem' }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
                autoComplete="tel"
                className="register-input"
                InputProps={{
                  startAdornment: (
                    <AccountCircle color="action" style={{ marginRight: '0.5rem' }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="new-password"
                className="register-input"
                InputProps={{
                  startAdornment: (
                    <LockOutlined color="action" style={{ marginRight: '0.5rem' }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="reenterPassword"
                label="Re-enter Password"
                name="reenterPassword"
                type="password"
                autoComplete="new-password"
                className="register-input"
                InputProps={{
                  startAdornment: (
                    <LockOutlined color="action" style={{ marginRight: '0.5rem' }} />
                  ),
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="register-button"
            style={{ backgroundColor: '#161616', marginTop: '10px' }}
          >
            Register
          </Button>
          <Grid container justifyContent="flex-end" style={{ marginTop: '7px' }}>
            <Grid item>
              <Link href="/login" variant="body2" className="login-link">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;
