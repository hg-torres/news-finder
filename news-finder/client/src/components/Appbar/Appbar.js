import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link'

export default function ButtonAppBar() {

  const goToLogin = () => {
    window.location = "/"
  }

  const goToHome = () => {
    window.location = "/home"
  }

  const goToProfile = () => {
    window.location = "/profile"
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News Finder
          </Typography>
          <Button onClick={goToLogin} color="inherit"> Login</Button>
          <Button onClick={goToHome} color="inherit">Home</Button>
          <Button onClick={goToProfile} color="inherit">Profile</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}