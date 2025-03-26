import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

export default function Header() {
  const navLinks = [
    { label: 'Why Us', path: '/why-us' },
    { label: 'Industries', path: '/industries' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AppBar position="fixed" elevation={3} sx={{ backgroundColor: '#ffffff', color: '#333' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography
            component={Link}
            to="/"
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#1e40af', textDecoration: 'none' }}
          >
            Asylum Application
          </Typography>

          {/* Navigation Links + Buttons */}
          <Stack direction="row" spacing={3} alignItems="center">
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.path}
                color="inherit"
                sx={{ fontSize: '1rem', textTransform: 'none' }}
              >
                {link.label}
              </Button>
            ))}

            <Button
              component={Link}
              to="/register"
              variant="contained"
              sx={{ bgcolor: '#1e40af', color: '#fff', textTransform: 'none', px: 3 }}
              endIcon={<ArrowForwardIcon />}
            >
              Register
            </Button>

            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{ color: '#1e40af', borderColor: '#1e40af', textTransform: 'none', px: 3 }}
              endIcon={<ArrowForwardIcon />}
            >
              Login
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
