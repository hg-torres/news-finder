import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
<<<<<<< HEAD
=======
import UserAPI from '../../utils/UserAPI'
import AuthContext from '../../utils/AuthContext'
import { useState, useContext } from 'react'
>>>>>>> 0d7e3eba8a94ad3ad6e8934e453eb1242c234c04

const theme = createTheme();

const LoginForm = () => {
<<<<<<< HEAD
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
=======
  const {
    lUsername,
    lPassword,
    handleInputChange,
    handleLoginUser
  } = useContext(AuthContext)
>>>>>>> 0d7e3eba8a94ad3ad6e8934e453eb1242c234c04

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonOutlineIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
<<<<<<< HEAD
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
=======
          <Box component="form" onSubmit={handleLoginUser} noValidate sx={{ mt: 1 }}>
            <TextField
              required
              fullWidth
              autoFocus
              margin="normal"
              name="lUsername"
              label="Username"
              id="lUsername"
              value={lUsername}
              autoComplete="lUsername"
              onChange={handleInputChange}
            />
            <TextField
              required
              fullWidth
              margin="normal"
              type="password"
              name="lPassword"
              label="Password"
              id="lPassword"
              autoComplete="current-password"
              value={lPassword}
              onChange={handleInputChange}
>>>>>>> 0d7e3eba8a94ad3ad6e8934e453eb1242c234c04
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginForm
