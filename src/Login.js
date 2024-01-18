// Login.js
import React from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { AccountCircle, LockOutlined } from '@mui/icons-material';
import './Login.css'; // Import the CSS file

const Login = () => {
  return (
    <Container component="main" maxWidth="xs" className="login-container">
      <div>

        <form className="login-form">
            <h1>Login</h1>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                className="login-input"
                InputProps={{
                  startAdornment: (
                    <AccountCircle color="action" style={{ marginRight: '0.5rem' }} />
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="login-input"
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
            className="login-button"
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2" className="forgot-password-link">
                Forgot password?
              </Link><br></br>
              <Link href="#" variant="body2" className="forgot-password-link">
                Create account
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
