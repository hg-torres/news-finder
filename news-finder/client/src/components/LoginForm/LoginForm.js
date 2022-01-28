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
import UserAPI from '../../utils/UserAPI'
import AuthContext from '../../utils/AuthContext'
import { useState, useContext } from 'react'

const theme = createTheme();

const LoginForm = () => {
  const {
    lUsername,
    lPassword,
    handleInputChange,
    handleLoginUser
  } = useContext(AuthContext)

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