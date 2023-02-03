import { Box } from '@mui/system'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Stack, Typography } from '@mui/material';
import logo from '../images/logo.svg';
import styled from '@emotion/styled';


const Image = styled.img(() => ({
    
}))

function Navbar() {
  return (
    <Box sx={{padding:'20px 0',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Image alt="Remy Sharp" src={logo}/>
        <Stack direction="row" spacing={3}>
            <Typography>Home</Typography>
            <Typography>New</Typography>
            <Typography>Popular</Typography>
            <Typography>Trending</Typography>
            <Typography>Categories</Typography>
        </Stack>
    </Box>
  )
}

export default Navbar