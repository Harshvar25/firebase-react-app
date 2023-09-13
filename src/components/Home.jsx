import React from 'react';
import { Box, Container } from '@mui/material';
import ImgMediaCard from './Card';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function Home() {
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  return (
    <Box className='homeBox'>
      <Container className='homeContainer'>
        <ImgMediaCard className='homeCard' />
        <Copyright className='Copyright' />
      </Container>
    </Box>
  );
}
