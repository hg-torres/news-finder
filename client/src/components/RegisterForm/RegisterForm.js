import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
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

const RegisterForm = () => {
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
    name,
    username,
    email,
    password,
    handleInputChange,
    handleRegisterUser
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
            <PersonAddAltOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
<<<<<<< HEAD
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
=======
          <Box component="form" noValidate onSubmit={handleRegisterUser} sx={{ mt: 3 }}>
>>>>>>> 0d7e3eba8a94ad3ad6e8934e453eb1242c234c04
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
<<<<<<< HEAD
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
=======
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={handleInputChange}
>>>>>>> 0d7e3eba8a94ad3ad6e8934e453eb1242c234c04
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
<<<<<<< HEAD
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
=======
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  value={username}
                  onChange={handleInputChange}
>>>>>>> 0d7e3eba8a94ad3ad6e8934e453eb1242c234c04
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
<<<<<<< HEAD
=======
                  value={email}
                  onChange={handleInputChange}
>>>>>>> 0d7e3eba8a94ad3ad6e8934e453eb1242c234c04
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
<<<<<<< HEAD
=======
                  value={password}
                  onChange={handleInputChange}
>>>>>>> 0d7e3eba8a94ad3ad6e8934e453eb1242c234c04
                />
              </Grid>
              <Grid item xs={12}>
          
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default RegisterForm