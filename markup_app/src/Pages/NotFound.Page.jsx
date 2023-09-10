import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import NavBar from '../Components/NavBarLogin.Component '

const primary = blue[500]; // #f44336

export default function Error() {
  return (<>
    <NavBar/>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: primary,
        minwidth:"100%"
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button variant="contained">Try Again</Button>
    </Box></>
  );
}