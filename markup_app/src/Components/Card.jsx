import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function Deposits() {
  const user=JSON.parse(localStorage.getItem("logUser"));
  return (<>
      <Title>Joel Soto</Title>
      <Typography component="p" variant="h4">
        {user.contact}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {user.password}
      </Typography>
      <div>
      </div>
      </>
  );
}